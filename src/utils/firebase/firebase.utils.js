// setting up the firebase for project
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  writeBatch,
  query,
  getDocs,
  collection,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE-bo8sBZ8-aXC3Y6_fl-4jkh0OtfaiYg",
  authDomain: "crown-clothing-a8a6e.firebaseapp.com",
  projectId: "crown-clothing-a8a6e",
  storageBucket: "crown-clothing-a8a6e.appspot.com",
  messagingSenderId: "228821912967",
  appId: "1:228821912967:web:33f0d09392f77c6a259722",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// AUTHETICATION WITH GOOGLE
const providers = new GoogleAuthProvider();
providers.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, providers);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, providers);

export const db = getFirestore();

// Making collectiona and adding document in it
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title);
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

// getting data from the categories collection that we create above

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "collections");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  authUser,
  additionalInformation
) => {
  const userDocRef = await doc(db, "Users", authUser.uid);
  // console.log(userDocRef);

  // additionalInformation = {};

  const snapshot = await getDoc(userDocRef);
  // console.log(snapshot);

  if (!snapshot.exists()) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log("error in fetching data");
    }
  }

  return userDocRef;
};

export const createAuthUserEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => await signOut(auth);

// setting up the firebase for project
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

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

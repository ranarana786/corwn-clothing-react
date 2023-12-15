// This is the sign in componenet for the authentication
import { useEffect } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.style.scss";

import {
  auth,
  SignInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
const Authentication = () => {
  useEffect(() => {
    async function func() {
      const response = await getRedirectResult(auth);
      console.log(response);
    }
    func();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  // const logGoogleUserRedirect = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   console.log(userDocRef);
  // };
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

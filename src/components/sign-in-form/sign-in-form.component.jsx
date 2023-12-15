import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import Button from "../button/button.component";
import "./sign-in-conatiner.style.scss";
import {
  SignInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
// import {
//   createAuthUserEmailAndPassword,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  console.log("Component Remount");

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  // function that will handle on change input
  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const clearFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const formHandler = async () => {
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Already Have An Account</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          formHandler();
        }}
      >
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={onChangeInput}
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={onChangeInput}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={SignInWithGooglePopup}
            buttonType="google"
          >
            Google SignIn
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;

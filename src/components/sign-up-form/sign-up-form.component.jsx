import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import Button from "../button/button.component";
import "./sign-up-conatiner.style.scss";
import {
  createAuthUserEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  console.log("Component Remount");

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  // function that will handle on change input
  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const clearFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const formHandler = async () => {
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }
    try {
      const { user } = await createAuthUserEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      console.log(error.message);
    }
    clearFormFields();
  };
  return (
    <div className="sign-up-container">
      <h2>I Do not have account</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          formHandler();
        }}
      >
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          onChange={onChangeInput}
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChangeInput}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
export default SignUpForm;

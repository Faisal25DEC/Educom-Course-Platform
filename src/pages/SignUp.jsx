import React from "react";
import AuthFrom from "../components/AuthFrom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../firebase/firebase";

const SignUp = () => {
  const handleSubmit = async ({
    displayName,
    email,
    password,
    confirmPassword,
  }) => {
    if (password !== confirmPassword) {
      alert("User already registered");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, {
        courses: [{ id: "none", progress: null }],
      });
    } catch (err) {
      console.log(err);
    }
  };

  return <AuthFrom onSignUp={true} handleSubmit={handleSubmit} />;
};

export default SignUp;

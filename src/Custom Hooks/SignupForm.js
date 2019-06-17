import { useState, useEffect } from "react";
import { CheckValidity } from "../components/CheckValidity/CheckValidity";

import firebase from "../firebase";
import md5 from "md5";

const useSignupForm = initialValues => {
  const [input, setInput] = useState(initialValues);
  const [errors, setErrors] = useState({});

  //inputChangeHandler
  const inputChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    const clonedInput = JSON.parse(JSON.stringify(input));
    setInput(clonedInput => ({ ...clonedInput, [name]: value }));
  };

  //submitHandler for signup
  const submitHandler = () => {
    //checking invalid input
    setErrors(CheckValidity(input));

    //firebase auth for register new User

    firebase
      .auth()
      .createUserWithEmailAndPassword(input.email, input.password)
      .then(createdUser => {
        console.log(createdUser);
      })
      .catch(error => console.log(error));
  };

  return {
    input,
    submitHandler,
    inputChangeHandler,
    errors
  };
};

export default useSignupForm;

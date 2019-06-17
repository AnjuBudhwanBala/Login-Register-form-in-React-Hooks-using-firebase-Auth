import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import md5 from "md5";

const useSignupForm = initialValues => {
  const [input, setInput] = useState(initialValues);
  const [errors, setErrors] = useState([]);

  //inputChangeHandler
  const inputChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInput(input => ({ ...input, [name]: value }));
  };

  //submitHandler
  const submitHandler = () => {
    console.log("submit");
  };

  return {
    input,
    submitHandler,
    inputChangeHandler,
    errors
  };
};

export default useSignupForm;

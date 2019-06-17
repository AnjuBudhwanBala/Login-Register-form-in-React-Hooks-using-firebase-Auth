import React from "react";
import InputForm from "./UI/InputForm";
import useSignupForm from "../Custom Hooks/SignupForm";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Icon
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

const Register = () => {
  const formValue = {
    userName: {
      elementType: "input",
      elementConfig: {
        placeholder: "UserName",
        type: "text"
      },
      value: "",
      icon: "user"
    },
    email: {
      elementType: "input",
      elementConfig: {
        placeholder: "Email",
        type: "email"
      },
      value: "",
      icon: "mail"
    },
    password: {
      elementType: "input",
      elementConfig: {
        placeholder: "password",
        type: "password"
      },
      value: "",
      icon: "lock"
    },
    confirmPassword: {
      elementType: "input",
      elementConfig: {
        placeholder: "Confirm Password",
        type: "password"
      },
      value: "",
      icon: "repeat"
    }
  };

  //pass initialValues
  const { inputChangeHandler, submitHandler } = useSignupForm(formValue);

  //change object into an array
  let formElementsArray = [];
  for (let key in formValue) {
    formElementsArray.push({
      id: key,
      config: formValue[key]
    });
  }
  //loop through array to map Input
  const form = formElementsArray.map(formElement => {
    return (
      <InputForm
        key={formElement.id}
        name={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        Icon={formElement.config.icon}
        changed={inputChangeHandler}
      />
    );
  });

  return (
    <Grid centered verticalAlign="middle" className="app">
      <Grid.Column style={{ maxWidth: "450px" }}>
        <Header as="h2" textAlign="center" color="orange">
          <Icon color="orange" name="puzzle piece" />
          Register for Dev Chat
        </Header>
        <Segment>
          <Form size="large" onSubmit={submitHandler}>
            {form}
            <Button color="orange" fluid size="large">
              Sign Up
            </Button>
          </Form>
        </Segment>
        <Message>
          Already Registerd? <Link to="/login"> Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
export default Register;

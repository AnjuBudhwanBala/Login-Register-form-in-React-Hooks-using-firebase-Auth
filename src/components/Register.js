import React from "react";
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
import useSignupForm from "../Custom Hooks/SignupForm";

const Register = () => {
  const { input, inputChangeHandler, submitHandler, errors } = useSignupForm({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "" // inital values
  });

  return (
    <Grid centered verticalAlign="middle" className="app">
      <Grid.Column style={{ maxWidth: "450px" }}>
        <Header as="h2" textAlign="center" color="orange">
          <Icon color="orange" name="puzzle piece" />
          Register for Dev Chat
        </Header>
        <Segment>
          <Form size="large" onSubmit="">
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="UserName"
              type="text"
              name="userName"
              value={input.userName}
              onChange={inputChangeHandler}
            />

            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="email"
              type="email"
              name="email"
              value={input.email}
              onChange={inputChangeHandler}
            />

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              value={input.password}
              onChange={inputChangeHandler}
            />

            <Form.Input
              fluid
              icon="repeat"
              iconPosition="left"
              placeholder="Confirm Passsword"
              type="password"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={inputChangeHandler}
            />

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

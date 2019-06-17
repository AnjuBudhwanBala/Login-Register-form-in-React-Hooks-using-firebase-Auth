import React from "react";
import { Form } from "semantic-ui-react";
const InputForm = props => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <Form.Input
          fluid
          iconPosition="left"
          icon={props.Icon}
          {...props.elementConfig}
          name={props.name}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <Form.Input
          fluid
          iconPosition="left"
          {...props.elementConfig}
          icon={props.Icon}
          name={props.name}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return <React.Fragment>{inputElement}</React.Fragment>;
};

export default InputForm;

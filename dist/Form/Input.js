import React from "react";
import "../../../index.css";
const Input = props => {
  const handleInputChange = element => {
    let error = false;
    if (props.field.regexPattern) {
      error = !props.field.regexPattern.test(element.target.value);
    }
    props.handleChange({
      ...element,
      error: error,
      errorMessage: props.field.errorMessage
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "field-container"
  }, /*#__PURE__*/React.createElement("input", {
    className: "input-field",
    type: props.field.type,
    placeholder: props.field.placeholder,
    id: props.field.id,
    onChange: handleInputChange,
    regex: props.field.regexPattern,
    value: props.value
  }), /*#__PURE__*/React.createElement("p", {
    className: "field-error-message"
  }, props.error));
};
export default Input;
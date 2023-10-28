import React from "react";
import "../../../index.css";
const Option = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "options-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "options-container-title"
  }, props.field.title, ":"), props.field.options.map((field, i) => {
    return /*#__PURE__*/React.createElement("label", {
      className: "options-items",
      key: field.value
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      id: props.field.name + i,
      name: props.field.name,
      value: field.value,
      onChange: props.handleChange,
      required: props.field.isRequired
    }), field.text);
  }));
};
export default Option;
import React from "react";
import "../../../index.css";
const Select = props => {
  return /*#__PURE__*/React.createElement("select", {
    className: "select-field",
    id: props.field.id,
    name: props.field.name,
    onChange: props.handleChange,
    "aria-required": props.field.isRequired
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    className: "placeholder"
  }, props.field.placeholder), props.field.options.map((field, i) => {
    return /*#__PURE__*/React.createElement("option", {
      key: i,
      value: field.value
    }, field.text);
  }));
};
export default Select;
import React from "react";
import "../../../index.css";
const Button = props => {
  return /*#__PURE__*/React.createElement("button", {
    className: "input-button",
    style: {
      backgroundColor: props.field.design.backgroundColor,
      color: props.field.design.color,
      border: props.field.design.border,
      borderRadius: props.field.design.borderRadius
    },
    type: props.field.type,
    placeholder: props.field.placeholder,
    id: props.field.id
  }, props.field.caption);
};
export default Button;
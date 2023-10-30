import React from "react";
import "../../index.css";
const Select = (props) => {
  return (
    <select
      className="select-field"
      id={props.field.id}
      name={props.field.name}
      onChange={props.handleChange}
      aria-required={props.field.isRequired}
      style={props.design.selectField}
    >
      <option value="" className="placeholder">
        {props.field.placeholder}
      </option>
      {props.field.options.map((field, i) => {
        return (
          <option key={i} value={field.value}>
            {field.text}
          </option>
        );
      })}
    </select>
  );
};
export default Select;

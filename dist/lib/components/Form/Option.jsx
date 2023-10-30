import React from "react";
import "../../index.css";

const Option = (props) => {
  return (
    <div className="options-container">
      <p className="options-container-title">{props.field.title}:</p>
      {props.field.options.map((field, i) => {
        return (
          <label className="options-items" key={field.value}>
            <input
              type="radio"
              id={props.field.name + i}
              name={props.field.name}
              value={field.value}
              onChange={props.handleChange}
              required={props.field.isRequired}
            />
            {field.text}
          </label>
        );
      })}
    </div>
  );
};
export default Option;

import React, { createRef, useEffect, useState } from "react";
import "../../index.css";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import MultiSelect from "./MultiSelect";
import Option from "./Option";

const Form = (props) => {
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState({});
  const formRef = createRef();

  const submitForm = (e) => {
    e.preventDefault();
    const form = formRef;
    let error = [];
    for (let i = 0; i < form.current.elements.length; i++) {
      // Reset error border effect
      if (form?.current?.elements[i].getAttribute("class") !== "input-button") {
        document.getElementById(
          form?.current?.elements[i].getAttribute("id"),
        ).style.border = props.setup.formDesign.inputField.border;
      }
      if (
        form?.current?.elements[i]?.getAttribute("aria-required") &&
        !form?.current?.elements[i].value.length
      ) {
        error.push(form?.current?.elements[i].getAttribute("id"));
      }
      // Check for errors on input text
      if (form?.current?.elements[i]?.getAttribute("regex")) {
        if (
          !eval(form?.current?.elements[i]?.getAttribute("regex")).test(
            form?.current?.elements[i].getAttribute("type")
              ? form.current.elements[i].getAttribute("value")
              : form?.current?.elements[i].value,
          )
        ) {
          error.push(form?.current?.elements[i].getAttribute("id"));
        }
      }
    }
    // Apply error border effect
    error.map((e) => {
      document.getElementById(e).style.border = "1px solid #f00";
    });

    if (error.length > 0) {
      setFormError({
        ...formError,
        generalErrorMessage: props.setup.generalErrorMessage,
      });
    } else {
      setFormError({});
      props.submittedData(formData);
    }
  };

  const checkErrors = (target, error, errorMessage) => {
    setFormError((currentError) => {
      if (
        target?.value?.length > 0 &&
        error &&
        !Object.keys(currentError).includes(target.id)
      ) {
        return { ...currentError, [target.id]: errorMessage };
      }
      if (!error || target.value.length === 0) {
        delete currentError[target.id];
        return { ...currentError };
      }
      return currentError;
    });
  };

  const handleChange = (e) => {
    const { target, error, errorMessage } = e;
    // Check and set errors
    checkErrors(target, error, errorMessage);
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  // Prepares each field for the form
  const generateFormItem = (field, i) => {
    switch (field.kind) {
      case "text":
        return (
          <Input
            key={i}
            field={field}
            value={formData[field.name]}
            error={formError[field.name]}
            handleChange={handleChange}
            design={props.setup.formDesign}
          />
        );
      case "select":
        return (
          <Select
            key={i}
            field={field}
            handleChange={handleChange}
            value={formData[field.name]}
            design={props.setup.formDesign}
          />
        );
      case "multi-select":
        return (
          <MultiSelect
            key={i}
            field={field}
            handleChange={handleChange}
            design={props.setup.formDesign}
          />
        );
      case "option":
        return (
          <Option
            key={i}
            field={field}
            handleChange={handleChange}
            value={formData[field.name]}
            design={props.setup.formDesign}
          />
        );
      case "button":
        return <Button key={i} field={field} />;
      default:
        return;
    }
  };
  // Returns form with full design
  return (
    <div
      className="form-div"
      style={{
        backgroundColor: props.setup.formDesign.backgroundColor,
        border: props.setup.formDesign.border,
        borderRadius: props.setup.formDesign.borderRadius,
      }}
    >
      <div className="title-div">
        <div className="title">{props.setup.title}</div>
        <div className="subtitle">{props.setup.subtitle}</div>
      </div>
      <form ref={formRef} onSubmit={submitForm}>
        {props.setup.fields.map((field, i) => {
          // If form items are grouped (show side by side):
          if (field.length) {
            return (
              <div key={i} className="field-group">
                {field.map((field, i) => {
                  return generateFormItem(field, i);
                })}
              </div>
            );
          }
          // If form items are not grouped:
          return generateFormItem(field, i);
        })}
      </form>
      <p className="field-error-message">{formError?.generalErrorMessage}</p>
    </div>
  );
};
export default Form;

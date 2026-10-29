import { useMemo, useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import Button from "./Button";
import Input from "./Input";
import MultiSelect from "./MultiSelect";
import Option from "./Option";
import Select from "./Select";
import type { FormColors, FormField, FormProps, FormValues } from "../../types";

const defaultColors: FormColors = {
  formBackground: "#eeeeee",
  formBorder: "#cccccc",
  text: "#222222",
  mutedText: "#666666",
  fieldBackground: "#ffffff",
  fieldText: "#222222",
  fieldBorder: "#cccccc",
  primary: "#087ea4",
  primaryText: "#ffffff",
  error: "#d32f2f",
  dropdownBackground: "#ffffff",
};

const getFields = (fields: FormProps["setup"]["fields"]) =>
  fields.flatMap((group) => (Array.isArray(group) ? group : [group]));

const getFieldError = (
  field: FormField,
  value: string | string[] | undefined,
) => {
  const message =
    ("errorMessage" in field ? field.errorMessage : undefined) ??
    "This field is required.";
  if ("isRequired" in field && field.isRequired) {
    const isEmpty = Array.isArray(value)
      ? value.length === 0
      : typeof value !== "string" || value.trim().length === 0;
    if (isEmpty) return message;
  }

  if (
    field.kind === "text" &&
    field.regexPattern &&
    typeof value === "string" &&
    value.length > 0
  ) {
    field.regexPattern.lastIndex = 0;
    if (!field.regexPattern.test(value)) return message;
  }
  return undefined;
};

export default function Form({ setup, submittedData }: FormProps) {
  const [formData, setFormData] = useState<FormValues>({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState("");
  const fields = useMemo(() => getFields(setup.fields), [setup.fields]);
  const colors = { ...defaultColors, ...setup.colors };
  const colorStyles = Object.fromEntries(
    Object.entries(colors).map(([name, value]) => [
      `--form-${name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`,
      value,
    ]),
  ) as CSSProperties;

  const handleChange = (name: string, value: string | string[]) => {
    setFormData((currentData) => ({ ...currentData, [name]: value }));
    const field = fields.find(
      (candidate) => "name" in candidate && candidate.name === name,
    );
    if (field) {
      const error = getFieldError(field, value);
      setFieldErrors((currentErrors) => {
        const nextErrors = { ...currentErrors };
        if (error) nextErrors[name] = error;
        else delete nextErrors[name];
        return nextErrors;
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};

    fields.forEach((field) => {
      if ("name" in field) {
        const error = getFieldError(field, formData[field.name]);
        if (error) nextErrors[field.name] = error;
      }
    });

    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setGeneralError(
        setup.generalErrorMessage ?? "Please check the required fields.",
      );
      return;
    }

    setGeneralError("");
    submittedData(formData);
  };

  const renderField = (field: FormField) => {
    switch (field.kind) {
      case "text":
        return (
          <Input
            error={fieldErrors[field.name]}
            field={field}
            key={field.id}
            onChange={handleChange}
            value={String(formData[field.name] ?? "")}
          />
        );
      case "select":
        return (
          <Select
            field={field}
            key={field.id}
            onChange={handleChange}
            value={String(formData[field.name] ?? "")}
          />
        );
      case "multi-select": {
        const value = formData[field.name];
        return (
          <MultiSelect
            field={field}
            key={field.id}
            onChange={handleChange}
            value={Array.isArray(value) ? value : []}
          />
        );
      }
      case "option":
        return (
          <Option
            field={field}
            key={field.id}
            onChange={handleChange}
            value={String(formData[field.name] ?? "")}
          />
        );
      case "button":
        return <Button field={field} key={field.id} />;
    }
  };

  return (
    <div className="form-div" style={colorStyles}>
      <div className="title-div">
        <h2 className="title">{setup.title}</h2>
        {setup.subtitle && <p className="subtitle">{setup.subtitle}</p>}
      </div>
      <form noValidate onSubmit={handleSubmit}>
        {setup.fields.map((group, index) =>
          Array.isArray(group) ? (
            <div className="field-group" key={`group-${index}`}>
              {group.map(renderField)}
            </div>
          ) : (
            renderField(group)
          ),
        )}
      </form>
      {generalError && (
        <p className="field-error-message" role="alert">
          {generalError}
        </p>
      )}
    </div>
  );
}

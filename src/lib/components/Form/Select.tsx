import type { ChangeEvent } from "react";
import type { SelectField } from "../../types";

interface SelectProps {
  field: SelectField;
  value: string;
  onChange: (name: string, value: string) => void;
}

export default function Select({ field, value, onChange }: SelectProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(field.name, event.currentTarget.value);
  };

  return (
    <select
      aria-required={field.isRequired}
      className="select-field"
      id={field.id}
      name={field.name}
      onChange={handleChange}
      value={value}
    >
      <option value="">{field.placeholder ?? "Select an option"}</option>
      {field.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}

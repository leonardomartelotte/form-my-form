import type { ChangeEvent } from "react";
import type { OptionField } from "../../types";

interface OptionProps {
  field: OptionField;
  value: string;
  onChange: (name: string, value: string) => void;
}

export default function Option({ field, value, onChange }: OptionProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(field.name, event.currentTarget.value);
  };

  return (
    <fieldset className="options-container">
      <legend className="options-container-title">{field.title}</legend>
      {field.options.map((option) => (
        <label className="options-items" key={option.value}>
          <input
            checked={value === option.value}
            name={field.name}
            onChange={handleChange}
            required={field.isRequired}
            type="radio"
            value={option.value}
          />
          {option.text}
        </label>
      ))}
    </fieldset>
  );
}

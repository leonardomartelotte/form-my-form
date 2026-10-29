import type { ChangeEvent } from "react";
import type { TextField } from "../../types";

interface InputProps {
  field: TextField;
  value: string;
  error?: string;
  onChange: (name: string, value: string) => void;
}

export default function Input({ field, value, error, onChange }: InputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(field.name, event.currentTarget.value);
  };

  return (
    <div className="field-container">
      <input
        aria-describedby={error ? `${field.id}-error` : undefined}
        aria-invalid={Boolean(error)}
        aria-required={field.isRequired}
        className="input-field"
        id={field.id}
        name={field.name}
        onChange={handleChange}
        placeholder={field.placeholder}
        type={field.type}
        value={value}
      />
      {error && (
        <p className="field-error-message" id={`${field.id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

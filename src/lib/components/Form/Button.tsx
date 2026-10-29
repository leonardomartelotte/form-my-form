import type { ButtonField } from "../../types";

interface ButtonProps {
  field: ButtonField;
}

export default function Button({ field }: ButtonProps) {
  return (
    <button
      className="input-button"
      id={field.id}
      style={field.design}
      type="submit"
    >
      {field.caption}
    </button>
  );
}

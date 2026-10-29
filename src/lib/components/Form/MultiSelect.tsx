import { useCallback, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import type { MultiSelectField } from "../../types";
import useClickOutside from "../../composables/useClickOutside";

interface MultiSelectProps {
  field: MultiSelectField;
  value: string[];
  onChange: (name: string, value: string[]) => void;
}

export default function MultiSelect({
  field,
  value,
  onChange,
}: MultiSelectProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeDropdown = useCallback(() => setDropdownOpen(false), []);

  useClickOutside(containerRef, closeDropdown);

  const toggleOption = (event: ChangeEvent<HTMLInputElement>) => {
    const optionValue = event.currentTarget.value;
    const nextValue = value.includes(optionValue)
      ? value.filter((selected) => selected !== optionValue)
      : [...value, optionValue];
    onChange(field.name, nextValue);
  };

  return (
    <div className="multi-select-container" ref={containerRef}>
      <button
        aria-expanded={dropdownOpen}
        aria-haspopup="true"
        className="multi-select-field"
        onClick={() => setDropdownOpen((open) => !open)}
        type="button"
      >
        <span>
          {field.placeholder ?? "Select options"}
          {value.length > 0 && ` (${value.length})`}
        </span>
        <span aria-hidden="true" className={dropdownOpen ? "rotate-arrow" : ""}>
          ▾
        </span>
      </button>
      {dropdownOpen && (
        <div className="multi-select-field-options" role="group">
          {field.options.map((option) => (
            <label className="multi-select-label" key={option.value}>
              <input
                checked={value.includes(option.value)}
                name={field.name}
                onChange={toggleOption}
                type="checkbox"
                value={option.value}
              />
              {option.text}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

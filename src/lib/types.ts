import type { CSSProperties, HTMLInputTypeAttribute } from "react";

export interface FormColors {
  formBackground: string;
  formBorder: string;
  text: string;
  mutedText: string;
  fieldBackground: string;
  fieldText: string;
  fieldBorder: string;
  primary: string;
  primaryText: string;
  error: string;
  dropdownBackground: string;
}

export type FormColorOverrides = Partial<FormColors>;

export interface FormOption {
  text: string;
  value: string;
}

interface BaseField {
  id: string;
  name: string;
  isRequired?: boolean;
  errorMessage?: string;
}

export interface TextField extends BaseField {
  kind: "text";
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  regexPattern?: RegExp;
}

export interface SelectField extends BaseField {
  kind: "select";
  placeholder?: string;
  options: FormOption[];
}

export interface MultiSelectField extends BaseField {
  kind: "multi-select";
  placeholder?: string;
  options: FormOption[];
}

export interface OptionField extends BaseField {
  kind: "option";
  title: string;
  options: FormOption[];
}

export interface ButtonField {
  kind: "button";
  id: string;
  caption: string;
  design?: CSSProperties;
}

export type FormField =
  TextField | SelectField | MultiSelectField | OptionField | ButtonField;

export type FormFieldGroup = FormField | FormField[];
export type FormValue = string | string[];
export type FormValues = Record<string, FormValue>;

export interface FormSetup {
  title: string;
  subtitle?: string;
  generalErrorMessage?: string;
  colors?: FormColorOverrides;
  fields: FormFieldGroup[];
}

export interface FormProps {
  setup: FormSetup;
  submittedData: (data: FormValues) => void;
}

# form-my-form

`form-my-form` is a customizable form component for React 19, written in TypeScript. It supports text inputs, selects, multi-selects, radio groups, grouped fields, validation, and a configurable color palette.

## Requirements

- React 19
- Node.js 20.19 or newer for local development

## Installation

```bash
npm install form-my-form
```

Import the component and its stylesheet:

```tsx
import { Form } from "form-my-form";
import "form-my-form/style.css";
```

## Usage

```tsx
import { Form } from "form-my-form";
import type { FormSetup, FormValues } from "form-my-form";
import "form-my-form/style.css";

const setup: FormSetup = {
  title: "Register",
  subtitle: "Create an account",
  generalErrorMessage: "Please review the form.",
  colors: {
    formBackground: "#ffffff",
    formBorder: "#d8e1e8",
    text: "#172b3a",
    mutedText: "#526777",
    fieldBackground: "#ffffff",
    fieldText: "#172b3a",
    fieldBorder: "#b8c8d4",
    primary: "#087ea4",
    primaryText: "#ffffff",
    error: "#c62828",
    dropdownBackground: "#ffffff",
  },
  fields: [
    {
      kind: "text",
      type: "text",
      id: "name",
      name: "name",
      placeholder: "Name",
      isRequired: true,
      regexPattern: /^.{3,}$/,
      errorMessage: "Enter at least three characters.",
    },
    [
      {
        kind: "text",
        type: "email",
        id: "email",
        name: "email",
        placeholder: "Email",
        isRequired: true,
        regexPattern: /^\S+@\S+\.\S+$/,
        errorMessage: "Enter a valid email address.",
      },
      {
        kind: "text",
        type: "password",
        id: "password",
        name: "password",
        placeholder: "Password",
        isRequired: true,
      },
    ],
    {
      kind: "select",
      id: "country",
      name: "country",
      placeholder: "Choose a country",
      isRequired: true,
      options: [
        { text: "Canada", value: "ca" },
        { text: "United Kingdom", value: "uk" },
      ],
    },
    {
      kind: "multi-select",
      id: "interests",
      name: "interests",
      placeholder: "Choose your interests",
      options: [
        { text: "Reading", value: "reading" },
        { text: "Running", value: "running" },
      ],
    },
    {
      kind: "option",
      id: "delivery",
      name: "delivery",
      title: "Delivery preference",
      isRequired: true,
      options: [
        { text: "Home delivery", value: "home" },
        { text: "Pickup", value: "pickup" },
      ],
    },
    { kind: "button", id: "submit", caption: "Register" },
  ],
};

function handleSubmit(data: FormValues) {
  console.log(data);
}

export function RegistrationForm() {
  return <Form setup={setup} submittedData={handleSubmit} />;
}
```

Put fields in an array to display them side by side. The `colors` property accepts any subset of these CSS color values:

| Color                | Controls                                          |
| -------------------- | ------------------------------------------------- |
| `formBackground`     | Form surface                                      |
| `formBorder`         | Form outline                                      |
| `text`               | Main form text                                    |
| `mutedText`          | Subtitle                                          |
| `fieldBackground`    | Input and select surfaces                         |
| `fieldText`          | Input, select, and multi-select text              |
| `fieldBorder`        | Input, select, and option group outlines          |
| `primary`            | Submit button, focus outline, and choice controls |
| `primaryText`        | Submit button text                                |
| `error`              | Validation messages                               |
| `dropdownBackground` | Multi-select menu                                 |

Any omitted color uses the built-in default. `FormSetup`, `FormColors`, `FormField`, and `FormValues` are exported for typed configuration and submit handlers. Text fields support optional `isRequired` and `regexPattern` validation; the `submittedData` callback receives values keyed by each field's `name`. Multi-select values are arrays of strings.

## Development

```bash
npm install
npm run dev
npm test
npm run typecheck
npm run build
```

The library build writes JavaScript, CSS, and TypeScript declarations to `dist/`. The demo site is built into `demo-dist/`.

## Contributing

See [AGENTS.md](./AGENTS.md) for repository guidance for AI coding agents and contributors. Changes should include appropriate tests and keep public TypeScript types and documentation in sync.

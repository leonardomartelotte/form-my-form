import { Form } from "./lib";
import type { FormSetup, FormValues } from "./lib";

const setup: FormSetup = {
  title: "Create your account",
  subtitle: "Fill in your details to get started.",
  generalErrorMessage: "Please review the highlighted fields.",
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
      placeholder: "Full name",
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
        placeholder: "Email address",
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
        errorMessage: "Enter a password.",
      },
    ],
    {
      kind: "select",
      id: "gender",
      name: "gender",
      placeholder: "Select a gender",
      isRequired: true,
      options: [
        { text: "Female", value: "female" },
        { text: "Male", value: "male" },
        { text: "Prefer not to say", value: "unspecified" },
      ],
    },
    {
      kind: "multi-select",
      id: "hobbies",
      name: "hobbies",
      placeholder: "Choose your interests",
      options: [
        { text: "Reading", value: "reading" },
        { text: "Running", value: "running" },
        { text: "Cooking", value: "cooking" },
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
    {
      kind: "button",
      id: "submit",
      caption: "Create account",
    },
  ],
};

function handleSubmit(data: FormValues) {
  console.log("Submitted form data:", data);
}

export default function App() {
  return (
    <main className="App">
      <Form setup={setup} submittedData={handleSubmit} />
    </main>
  );
}

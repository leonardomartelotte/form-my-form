import { Form } from "./lib";

function App() {
  const sampleInputData = {
    title: "Register",
    subtitle: "Please fill out all fields",
    submitButtonCaption: "Register",
    generalErrorMessage: "Please fill required fields",
    formDesign: {
      backgroundColor: "#caf0f8",
      border: "1px solid #90e0ef",
      borderRadius: "2px",
      inputField: {
        backgroundColor: "#fff",
        border: "1px solid #90e0ef",
        borderRadius: "2px",
      },
      selectField: {
        backgroundColor: "#fff",
        border: "1px solid #90e0ef",
        borderRadius: "2px",
      },
      multiSelectField: {
        backgroundColor: "#fff",
        border: "1px solid #90e0ef",
        borderRadius: "2px",
      },
      optionField: {
        backgroundColor: "#fff",
        border: "1px solid #90e0ef",
        borderRadius: "2px",
      },
    },
    fields: [
      {
        kind: "text",
        type: "text",
        name: "name",
        id: "name",
        placeholder: "Name",
        regexPattern: /^.{3,}$/,
        errorMessage: "This field is required",
      },
      [
        {
          kind: "text",
          type: "text",
          name: "email",
          id: "email",
          placeholder: "Email",
          regexPattern: /^\S+@\S+\.\S+$/,
          errorMessage: "This is not a valid email",
        },

        {
          kind: "text",
          type: "password",
          id: "password",
          placeholder: "password",
        },
      ],
      [
        {
          kind: "select",
          name: "gender",
          id: "gender",
          options: [
            { text: "Male", value: "male" },
            { text: "Female", value: "female" },
          ],
          placeholder: "Gender",
          isRequired: true,
          errorMessage: "This field is required",
        },
        {
          placeholder: "Hobbies",
          kind: "multi-select",
          name: "hobbies",
          id: "hobbies",
          isRequired: true,
          options: [
            { text: "Play Fortnite", value: "fortnite" },
            { text: "Watch TV", value: "tv" },
            { text: "Running", value: "running" },
          ],
        },
      ],
      {
        title: "Delivery",
        kind: "option",
        name: "delivery",
        id: "delivery",
        // isRequired: true,
        errorMessage: "This field is required",
        options: [
          { text: "Home", value: "home" },
          { text: "Takeout", value: "takeout" },
        ],
      },
      {
        kind: "button",
        id: "submit",
        design: {
          backgroundColor: "#00b4d8",
          color: "#000",
          border: "0",
          borderRadius: "2px",
        },
        caption: "Submit",
      },
    ],
  };
  const submittedData = (data) => {
    console.log("-> data", data);
  };
  return (
    <div className="App">
      <Form setup={sampleInputData} submittedData={submittedData}></Form>
    </div>
  );
}

export default App;

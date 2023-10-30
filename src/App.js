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
        id: "name",
        name: "name",
        placeholder: "Name",
        regexPattern: /^.{3,}$/,
        errorMessage: "This field is required",
      },
      [
        {
          kind: "text",
          type: "text",
          id: "email",
          name: "email",
          placeholder: "Email",
          regexPattern: /^\S+@\S+\.\S+$/,
          errorMessage: "This is not a valid email",
        },

        {
          kind: "text",
          type: "password",
          id: "password",
          name: "password",
          placeholder: "password",
        },
      ],
      [
        {
          kind: "select",
          id: "gender",
          name: "gender",
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
          id: "hobbies",
          name: "hobbies",
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
        id: "delivery",
        name: "delivery",
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
          color: "#fff",
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

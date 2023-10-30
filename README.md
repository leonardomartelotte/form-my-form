# Welcome to form-my-form! 

Every time when starting a new project I end up by realizing how much work it takes to create forms.

This time I got tired and decided to create this package, so that I can easily use it in multiple projects - so can you :)

<b>`form-my-form`</b> is a <b>`React`</b> package for easily bringing forms into life on your application.

It's still in the early versions so there are still some stuff to cover. So... Coming in the next weeks:

- Improvement in error handling

... And next:

- Typescript
- Colors customisation

Hope you like it!

# Docs

Installing: 
```bash 
npm i form-my-form
```

Importing:
```javascript 
import { Form } from "form-my-form/dist"
```

Usage:
```jsx
<Form setup={sampleInputData} submittedData={submittedData}/>
```


Props `setup` and `submittedData` are required, being:

* On `submittedData` you'll get an object with all submitted form data;
* On `setup` you'll pass the fields you want to be shown in the form, with rules and error messages. Here is an example:

```javascript
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
```

Tip:

- You can group form fields to be shown side by side by adding them together in an array, like email and password fields in the sampleInputData above.

## Join me on improving it!
I invite you to collaborate with me on this open-source project. Here's how to get involved:

- Fork: Start by forking our project on GitHub.

- Make Changes: Work on bug fixes, features, or documentation improvements.

- Pull Request: Create a pull request to propose your changes.

- Review: I'll review your contribution and discuss it with you.

- Contribute Respectfully: Be respectful and constructive in your interactions.

Your contributions make a difference. Let's build something great together!
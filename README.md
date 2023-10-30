# Welcome to form-my-form! 

Every time when starting a new project I end up by realizing how much work it takes to create forms.

This time I got tired and decided to create this package, so that I can easily use it in multiple projects - so can you :)

It's still in v0.1.10 so there's still some stuff to cover. So... Coming in the next weeks:

- Improvement in error handling

... And next:

- Typescript
- Colors customisation

Hope you like it!

# Docs

Installing: 
<br>`npm i form-my-form`

Importing:
<br>`import { Form } from "form-my-form/dist";`

Using:
<br>`<Form setup={sampleInputData} submittedData={submittedData}/>`

Props `setup` and `submittedData` are required, being:

* On `submittedData` you'll get an object with all submitted form data;
* On `setup` you'll pass the fields you want to be shown in the form, with rules and error messages. Here is an example:

```
const sampleInputData = {
        title: "Register",
        subtitle: "Please fill out all fields",
        submitButtonCaption: "Register",
        generalErrorMessage: "Please fill required fields",
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
                    backgroundColor: "#bbb",
                    color: "#000",
                    border: "0",
                    borderRadius: "5px",
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

- Review: We'll review your contribution and discuss it with you.

- Contribute Respectfully: Be respectful and constructive in your interactions.

Your contributions make a difference. Let's build something great together!
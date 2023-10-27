import './App.css';
import {Form} from "./lib/components";

function App() {
    const sampleInputData = {
        title: "Register",
        subtitle: "Please fill out all fields",
        submitButtonCaption: "Register",
        generalErrorMessage: 'Please fill required fields',
        fields: [
            {
                kind: 'text',
                type: 'text',
                name: 'name',
                id: 'name',
                placeholder: 'Name',
                regexPattern: /^.{3,}$/,
                errorMessage: 'This field is required'
            },
            [
                {
                    kind: 'text',
                    type: 'text',
                    name: 'email',
                    id: 'email',
                    placeholder: 'Email',
                    regexPattern: /^\S+@\S+\.\S+$/,
                    errorMessage: 'This is not a valid email'
                },

                {
                    kind: 'text',
                    type: 'password',
                    id: 'password',
                    placeholder: 'password',
                },
            ],
            [
                {
                    kind: 'select',
                    name: 'gender',
                    id: 'gender',
                    options: [
                        {text: 'Male', value: 'male'},
                        {text: 'Female', value: 'female'}
                    ],
                    placeholder: 'Gender',
                    isRequired: true,
                    errorMessage: 'This field is required'
                },
                {
                    placeholder: 'Hobbies',
                    kind: 'multi-select',
                    name: 'hobbies',
                    id: 'hobbies',
                    options: [
                        {text: 'Play Fortnite', value: 'fortnite'},
                        {text: 'Watch TV', value: 'tv'},
                        {text: 'Running', value: 'running'},
                    ],
                },
            ],
            [
            {
                title: 'Delivery',
                kind: 'option',
                name: 'delivery',
                id: 'delivery',
                regexPattern: /^.+$/,
                errorMessage: 'This field is required',
                options: [
                    {text: 'Home', value: 'home'},
                    {text: 'Takeout', value: 'takeout'}
                ],
            },
                {
                    title: 'Country',
                    kind: 'option',
                    name: 'country',
                    id: 'country',
                    options: [
                        {text: 'USA', value: 'usa'},
                        {text: 'Portugal', value: 'portugal'}
                    ],
                },
                ],
            {
                kind: 'button',
                id: 'submit',
                design: {
                  backgroundColor: '#bbb',
                  color: '#000',
                  border: '0',
                  borderRadius: '5px',
                },
                caption: 'Submit',
            }
        ]
    }
  return (
    <div className="App">
      <Form setup={sampleInputData}></Form>
    </div>
  );
}

export default App;

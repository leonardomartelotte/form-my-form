import './App.css';
import {Form} from "./lib/components";

function App() {
    const testForm = {
        title: "Register",
        subtitle: "Please fill out all fields",
        submitButtonCaption: "Register",
        fields: [
            [
                {
                    kind: 'text',
                    type: 'text',
                    name: 'email',
                    id: 'email',
                    placeholder: 'email',
                },
                {
                    kind: 'text',
                    type: 'password',
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
                    placeholder: 'gender'
                },
                {
                    kind: 'multi-select',
                    name: 'items',
                    id: 'items',
                    options: [
                        {text: 'Beans', value: 'beans'},
                        {text: 'Rice', value: 'rice'},
                        {text: 'Beans', value: 'beans'},
                        {text: 'Rice', value: 'rice'},
                        {text: 'Beans', value: 'beans'},
                        {text: 'Rice', value: 'rice'}
                    ],
                    placeholder: 'ingredients'
                },
            ],
            {
                kind: 'text',
                type: 'text',
                name: 'address',
                placeholder: 'address',
            },
            {
                kind: 'text',
                type: 'text',
                placeholder: 'phone',
            },
            {
                kind: 'button',
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
      <Form setup={testForm}></Form>
    </div>
  );
}

export default App;

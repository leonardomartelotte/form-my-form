import React, { useState } from 'react';
import '../../../index.css';
import Button from './Button'
import Input from "./Input";
import Select from "./Select";
import MultiSelect from "./MultiSelect";

const Form = (props) => {
    const [formData, setFormData] = useState({});
    const submitForm = () => {
        console.log(formData);
    }
    const handleChange = (e) => {
        console.log("-> e", e);
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    }
    // Prepares each field for the form
    const generateFormItem = (field, i) => {
        switch(field.kind){
            case 'text':
                return <Input key={i} field={field} value={formData[field.name]} handleChange={handleChange}/>
            case 'button':
                return <Button key={i} field={field} />
            case 'select':
                return <Select key={i} field={field} handleChange={handleChange}/>
            case 'multi-select':
                return <MultiSelect key={i} field={field} handleChange={handleChange}/>
            default:
                return;
        }
    }
    // Returns form with full design
    return (
        <div className='form-div'>
            <div className='title-div'>
                <div className='title'>{props.setup.title}</div>
                <div className='subtitle'>{props.setup.subtitle}</div>
            </div>
           <form onSubmit={submitForm}>
               {
                   props.setup.fields.map((field, i) => {
                       // If form items are grouped:
                       if(field.length){
                           return (
                               <div className='field-group'>
                                   {field.map((field, i) => {
                                       return generateFormItem(field, i);
                                   })}
                               </div>
                           )
                       }
                       // If form items are not grouped:
                       return generateFormItem(field, i);
                    }
                   )
               }
           </form>
        </div>
    )
}
export default Form;
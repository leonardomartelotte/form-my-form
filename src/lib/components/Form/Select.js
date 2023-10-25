import React from 'react';
import '../../../index.css';
const Select = (props) => {
    return <select defaultValue='placeholder'
                   className='select-field'
                   id={props.field.id}
                   name={props.field.name}
                   onChange={props.handleChange}
    >
        <option value="" className='placeholder'>{props.field.placeholder}</option>
        {
            props.field.options.map((field, i) => {
                return <option key={i} value={field.value}>{field.text}</option>
            })
        }
    </select>
}
export default Select;
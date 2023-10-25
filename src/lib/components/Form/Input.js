import React from 'react';
import '../../../index.css';
const Input = (props) => {
    return <input
        className='input-field'
        type={props.field.type}
        placeholder={props.field.placeholder}
        id={props.field.id}
        onChange={props.handleChange}
    />;
}
export default Input;
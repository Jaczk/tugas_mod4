import React, { useState } from 'react';
import './input.css';

const Input = ({ label, id, handleChange, name, type }) => (
    <>
        <label htmlFor={id}>{label}</label>
        <input type={type || 'text'} id={id} name={name || id} onChange={handleChange} />
        <br />
    </>
);

export default function InputType() {

    const [name, setName] = useState("")

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <div className="Main">
            <p>Name: {name}</p>
            <Input label="Name: " id="name" handleChange={handleChange} />
        </div>

    );
}

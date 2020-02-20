// First: import useState, which is a named export from 'react'
// We could alternatively skip this step, and write React.useState
import React, { useState } from 'react';
import axios from 'axios';

function PostUsingHook() {
    const [form, setValues] = useState({
        firstname: '',
        lastname: ''
    });

    const printValues = e => {
        e.preventDefault();
        console.log(form.firstname, form.lastname);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:3000/persons',
{
            firstname: form.firstname,
            lastname: form.lastname
        });
        if (result.status === 201) {
            alert('Data inserted sucessfuly!');
        } else {
            throw new Error('Failed to insert data!');
        }
    } catch (err) {
        console.log(err);
    }
};
    
const updateField = e => {
    setValues({
        ...form,
        [e.target.name]: e.target.value
    });
};

return (
    <form onSubmit={handleSubmit}>
        <label>
            First Name:
            <input value={form.firstname} name="firstname" onChange={updateField} />
        </label>
        <br />
        <label>
        Last Name:
        <input value={form.lastname} name="lastname" onChange={updateField} />
        </label>
        <br />
        <button>Submit</button>
        </form>
    );
}
export default PostUsingHook;

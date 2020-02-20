// First: import useState, which is a named export from 'react'
// We could alternatively skip this step, and write React.useState
import React, { useState } from 'react';
import axios from 'axios';

function PostBook() {
    const [form, setValues] = useState({
        title: '',
        author: '',
        published_id: '',
        pages: '',
        language: '',
        publisher_id: ''
    });

    const printValues = e => {
        e.preventDefault();
        console.log(form.title, form.author, form.published_id, form.pages, form.language, form.publisher_id);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:3000/persons',
{
            title: form.title,
            author: form.author,
            published_id: form.pages,
            language: form.language,
            publisher_id: form.published_id
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
            Title:
            <input value={form.firstname} name="title" onChange={updateField} />
        </label>
        <br />
        <label>
            Author:
        <input value={form.lastname} name="author" onChange={updateField} />
        </label>
        <br />
        <label>
            Published Id:
        <input value={form.lastname} name="published_id" onChange={updateField} />
        </label>
        <br />
        <label>
            Pages:
        <input value={form.lastname} name="pages" onChange={updateField} />
        </label>
        <br />
        <label>
            Language:
        <input value={form.lastname} name="language" onChange={updateField} />
        </label>
        <br />
        <label>
            Publisher Id:
        <input value={form.lastname} name="publisher_id" onChange={updateField} />
        </label>
        <br />
        <button>Submit</button>
        </form>
    );
}
export default PostBook;

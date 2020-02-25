import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from 'axios';

const PostBook = props => {
    const defaultValues = {
        title: '',
        author: '',
        pages: '',
        language: '',
        publisher_id: ''
    }

    const { PostBook, errors, formState, reset } = useForm({
        defaultValues
      });

    const [form, setValues] = useState({
        title: '',
        author: '',
        pages: '',
        language: '',
        publisher_id: ''
    });

    const printValues = e => {
        e.preventDefault();
        console.log(form.title, form.author, form.pages, form.language, form.publisher_id);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const result = await axios.post('http://127.0.0.1:8080/books',
    {
            title: form.title,
            author: form.author,
            pages: form.pages,
            language: form.language,
            publisher_id: form.publisher_id
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
            Title:<br/>
            <input value={form.title} type="text" class="form-control" 
            name="title" onChange={updateField} />
        </label>
        <br/>
        <label>
            Author:<br/>
            <input value={form.author} type="text" class="form-control" 
           name="author" onChange={updateField} />
        </label>
        <br/>
        <label>
            Pages:<br/>
            <input value={form.pages} type="text" class="form-control" 
            name="pages" onChange={updateField} />
        </label>
        <br/>
        <label>
            Language:<br/>
            <input value={form.language} type="text" class="form-control" 
            name="language" onChange={updateField} />
        </label>
        <br/>
        <label>
            Publisher Id:<br/>
            <input value={form.publisher_id} type="text" class="form-control" 
            name="publisher_id" onChange={updateField} />
        </label>
        <br/>
        <br/>
        <button type="submit" class="btn btn-primary" onClick={() => { reset(defaultValues); }}>Submit</button>
        </form>
    );
}
export default PostBook;

// ref={PostBook({required: "Required"})}
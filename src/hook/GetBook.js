import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

function GetBook() {
    const [data, setData] = useState({book:[]});

    useMemo(() => {
        const fetchData = async () => {
        const result = await axios.get('http://127.0.0.1:8080/books');
        setData(result.data);
    };
    try {
        fetchData();
    } catch (err) {
        alert(err);
    }
    // console.log(data);
    }, []);
    console.log(data);
    return (
        <table class='table'>
            <thead class='thead-dark'>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Pages</th>
                    <th scope="col">Language</th>
                    <th scope="col">Publisher ID</th>
                </tr>
            </thead>
            <tbody>
                {data.book.map((data, id) => (
                    <tr key={id}>
                        <th scope='row'>{id}</th>
                        <td>{data.title}</td>
                        <td>{data.author}</td>
                        <td>{data.pages}</td>
                        <td>{data.language}</td>
                        <td>{data.publisher_id}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default GetBook;
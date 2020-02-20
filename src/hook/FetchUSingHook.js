import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

function FetchUsingHook() {
    const [data, setData] = useState([]);

    useMemo(() => {
        const fetchData = async () => {
        const result = await axios('http://localhost:3000/persons');
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
        <table>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Author</td>
                    <td>Publisher Id</td>
                    <td>Pages</td>
                    <td>Language</td>
                    <td>Publisher Id</td>
                </tr>
            </thead>
            <tbody>
                {data.map((item, id) => (
                    <tr key={id}>
                        <td>
                            <a href={item._id}>{item.title}</a>
                        </td>
                        <td>{item.author}</td>
                        <td>{item.Published_id}</td>
                        <td>{item.pages}</td>
                        <td>{item.language}</td>
                        <td>{item.publisher_id}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default FetchUsingHook;

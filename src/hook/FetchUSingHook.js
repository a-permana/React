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
                    <td>First Name</td>
                    <td>Last Name</td>
                </tr>
            </thead>
            <tbody>
                {data.map((item, id) => (
                    <tr key={id}>
                        <td>
                            <a href={item._id}>{item.firstname}</a>
                        </td>
                        <td>{item.lastname}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default FetchUsingHook;

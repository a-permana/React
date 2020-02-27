import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";

function GetBook() {
    const [data, setData] = useState({book:[]});
    const token = JSON.parse(
        sessionStorage.getItem("persisted_state_hook:token")
      );

    useMemo(() => {
        const fetchData = async () => {
        const result = await axios.get('http://127.0.0.1:8080/books');
        setData(result.data);
        // setRole(result.data.Role);
    };
    try {
        fetchData();
    } catch (err) {
        alert(err);
    }
    // console.log(data);
    }, []);
    console.log(data);

    function deleteConfirm(title, id) {
        confirmAlert({
            title: "Alert",
            message: "Are you sure to remove " + title + "?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => deleteBook(id)
                },
                {
                    label: "No",
                    onClick: () => {}
                }
            ]
        });
    }
    async function deleteBook(id) {
        
        await axios({
            method: "delete",

        url: `http://127.0.0.1:8080/books/${id}`,
        header: {
            Authorization: token.token.accessToken
        },
    data: data
})
window.location.reload(false);
}

    const render = () => {
        let no = 1;
        return data.book.map((data, id) => {
            return (
                <tr key={id}>
                    <td>{no++}</td>
                    <td>{data.title}</td>
                    <td>{data.author}</td>
                    <td>{data.pages}</td>
                    <td>{data.language}</td>
                    <td>{data.publisher_id}</td>
                    <td>
                    <Link to={"/PutBook/" + data.id}>
                        <button
                            type="button"
                            className="btn btn-success active">
                                Edit
                        </button>
                    </Link> &nbsp;
                        <button
                            type="button"
                            className="btn btn-danger active"
                            onClick={() => deleteConfirm(data.title, data.id)}>
                                Hapus
                        </button>
                    </td>
                </tr>
            );
        });
    };
    return (
        <div className="container mt-5 ">
            <span>
            <Link to={"/PostBook/" + data.id}>
                <button
                    type="button"
                        className="btn btn-primary mb1 bg-teal">
                            Add
                </button>
            </Link>
            </span>
        <table class="table">
            <thead class="thead">
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Pages</th>
                    <th scope="col">Language</th>
                    <th scope="col">Publisher ID</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>{render()}</tbody>
        </table>
        </div>
    );
}
export default GetBook;
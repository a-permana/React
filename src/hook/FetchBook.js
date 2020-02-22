import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function FetchBook() {
  const [data, setData] = useState({ data: [] });
  useMemo(() => {
    const fetchData = async () => {
      const result = await axios("http://127.0.0.1:8080/books");
      setData(result.data);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }

    console.log(data);
  }, []);

  function deleteConfirm(title, id) {
    confirmAlert({
      title: "Warning",
      message: "Are you sure you want to delete " + title + "?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteProduk(id)
        },
        {
          label: "No",
          onClick: () => {}
        }
      ]
    });
  }

  function deleteProduk(id) {
    axios.delete(`http://127.0.0.1:8080/books/${id}`);
    window.location.reload(false);
  }

  const render = () => {
    return data.book.map((data, id) => {
      return (
        <tr key={id}>
          <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.author}</td>
          <td>{data.pages}</td>
          <td>{data.language}</td>
          <td>{data.publisher_id}</td>
          <td>
            <Link to={"/put/" + data.id}>
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </Link>
          </td>
          <td>
            <i
              className="fa fa-trash"
              aria-hidden="true"
              onClick={() => deleteConfirm(data.title, data.id)}
            ></i>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <td>No</td>
            <td>Title</td>
            <td>Author</td>
            <td>Pages</td>
            <td>Language</td>
            <td>Publisher ID</td>
            <td>Edit Book</td>
            <td>Delete Book</td>
          </tr>
        </thead>
        <tbody>{render()}</tbody>
      </table>
    </div>
  );
}
export default FetchBook;
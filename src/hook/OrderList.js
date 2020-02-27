import React, { useState, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function OrderList() {
  const token = JSON.parse(
    sessionStorage.getItem("persisted_state_hook:token")
  );
  const id = token.token.id;
  const [data, setData] = useState([]);

  useMemo(() => {
    const fetchData = async () => {
      const result = await axios({
        method: "get",
        url: "http://127.0.0.1:8080/orders/" + id,
        headers: {
          Authorization: token.token.accessToken
        }
      });
      setData(result.data.user.books);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }

    // console.log(result.data.user.books);
  }, []);

  async function deleteBook(id) {
    await axios({
      method: "delete",
      url: `http://localhost:8080/books/${id}`,
      headers: {
        Authorization: token.token.accessToken
      }
    });
    window.location.reload(false);
  }

  const render = () => {
    let no = 1;
    return data.map((data, id) => {
      return (
        <tr key={id}>
          <td>{no++}</td>
          <td>{data.title}</td>
          <td>{data.author}</td>
          <td>{data.pages}</td>
          <td>{data.language}</td>
          <td>{data.publisher_id}</td>
        </tr>
      );
    });
  };
  return (
    <div className="container mt-5 ">
      <table class="table ">
      <thead class="thead">
          <tr>
            <td>No</td>
            <td>Title</td>
            <td>Author</td>
            <td>Pages</td>
            <td>Language</td>
            <td>Publisher_id</td>
          </tr>
        </thead>
        <tbody>{render()}</tbody>
      </table>
    </div>
  );
}
export default OrderList;
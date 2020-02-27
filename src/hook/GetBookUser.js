import React, { useState, useMemo } from "react";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";

function GetBookUser() {
  
  const [data, setData] = useState({ book: [] });
  const token = JSON.parse(
    sessionStorage.getItem("persisted_state_hook:token")
  );

  useMemo(() => {
    const fetchData = async () => {   
      const result = await axios({
        method: "get",
        url: "http://127.0.0.1:8080/books",
        headers: {
          Authorization: token.token.accessToken
        },
        data: data
      })
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

  async function deleteBook(id) {
    await axios({
      method: "delete",
      url: `http://127.0.0.1:8080/books/${id}`,
      headers: {
        Authorization: token.token.accessToken
      },
      data: data
    })
    window.location.reload(false);
  }
  async function orderBooks(id) {
    const token = JSON.parse(
      sessionStorage.getItem("persisted_state_hook:token")
    );
    try {
      await axios({
        method: "post",
        url: `http://127.0.0.1:8080/orders/${id}`,
        headers: {
          Authorization: token.token.accessToken
        },
        data: {
          userId: token.token.id,
          bookId: id
        }
      });
    } catch (err) {
      console.log(err);
    }
    alert("Order Success!");
    // window.location.reload();
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
                <Link to={"/OrderList/" + data.id}>
                <button
                  type="button"
                  className="btn btn-success btn-sm mt-1" 
                  onClick={() => orderBooks(data.id)}>
                  Order
                </button>
                </Link>
                </td>
            </tr>
        );
    });
};
return (
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
);
}
export default GetBookUser;
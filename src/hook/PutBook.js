import React, { Fragment, useState, useEffect, useMemo } from "react";
import axios from "axios";

function PutBook() {
  const [data, setData] = useState({ data: [] });
  const [query, setQuery] = useState();
  const [url, setUrl] = useState("http://127.0.0.1:8080/books");

  useMemo(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }
    // console.log(data);
  }, [url]);
  console.log(url);
  return (
    <div class="container">
      <form>
        <center>
          <p>
            <h3>Change Book</h3>
          </p>
        </center>

        <div className="container">
            <label for="nama">Title</label>
            <input
              name="title"
              type="text"
              class="form-control"/>
          </div>
          <button type="submit" class="btn btn-primary">
            Edit
          </button>
      </form>
    </div>
  );
}
export default PutBook;
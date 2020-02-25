import React, { Component } from "react";
import axios from "axios";

export default class UpdateBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: "",
      data: [
        {
          id: "",
          title: "",
          author: "",
          pages: "",
          language: "",
          publisher_id: "",
          createdAt: "",
          updatedAt: ""
        }
      ]
    };
  }

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const res = await axios.get("http://127.0.0.1:8080/books/" + id);
    this.setState(res.data.book[0]);
  };

  getUpdate = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  };

  getId = async e => {
    const id = this.props.match.params.id;

    e.preventDefault();

    await axios.put("http://127.0.0.1:8080/books/" + id, this.state);
    alert("Update Successfully!");
    this.props.history.push("/getbook");
  };

  render() {
    return (
      <div className="container">
        <div className="cardregis">
          <div className="title">Update Book</div>
          <form onSubmit={this.getId}>
            <div className="container mt-5">
              <div className="form-group">
                <label>Title </label>
                <input
                  name="title"
                  type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.getUpdate}
                />
              </div>
              <div className="form-group">
                <label>Author</label>
                <input
                  name="author"
                  className="form-control"
                  type="text"
                  value={this.state.author}
                  onChange={this.getUpdate}
                />
              </div>

              <div className="form-group">
                <label>Pages</label>
                <input
                  name="pages"
                  className="form-control"
                  type="number"
                  value={this.state.pages}
                  onChange={this.getUpdate}
                />
              </div>
              <div className="form-group">
                <label>Language</label>
                <input
                  name="language"
                  className="form-control"
                  type="text"
                  value={this.state.language}
                  onChange={this.getUpdate}
                />
              </div>
              <div className="form-group">
                <label>Publisher Id</label>
                <input
                  name="publisher_id"
                  className="form-control"
                  type="text"
                  value={this.state.published_id}
                  onChange={this.getUpdate}
                />
              </div>
              <button type="submit" value="Submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


// import React, { Component } from "react";
// import axios from "axios";

// function PutBook() {
//   const [data, setData] = useState({ data: [] });
//   const [query, setQuery] = useState();
//   const [url, setUrl] = useState("http://127.0.0.1:8080/books");

//   useMemo(() => {
//     const fetchData = async () => {
//       const result = await axios(url);
//       setData(result.data);
//     };
//     try {
//       fetchData();
//     } catch (err) {
//       alert(err);
//     }
//     // console.log(data);
//   }, [url]);
//   console.log(url);
//   return (
//     <div class="container">
//       <form>
//         <center>
//           <p>
//             <h3>Change Book</h3>
//           </p>
//         </center>

//         <div className="container">
//             <label for="nama">Title</label>
//             <input
//               name="title"
//               type="text"
//               class="form-control"/>
//           </div>
//           <button type="submit" class="btn btn-primary">
//             Edit
//           </button>
//       </form>
//     </div>
//   );
// }
// export default PutBook;
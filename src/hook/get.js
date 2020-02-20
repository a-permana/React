import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Get () {
    const url = 'http://localhost:3000/books'
    
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get(url).then(json => setData(json.data))
    }, [])

    const renderTable = () => {
        return data.map(book => {
            return (
                <tr>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.published_id}</td>
                    <td>{book.pages}</td>
                    <td>{book.language}</td>
                    <td>{book.publisher_id}</td>
                </tr>
            )
        })
    }
    return (
        <div>
            <h1 id="title">API Table</h1>
                <table id="books">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Published ID</th>
                            <th>Pages</th>
                            <th>Language</th>
                            <th>Publisher ID</th>
                            
                            
                        </tr>
                    </thead>
                <tbody>{renderTable()}</tbody>
            </table>
        </div>
    )
}
export default Get;
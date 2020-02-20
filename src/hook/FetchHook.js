import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default App = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url).then(json => setData(json.data))
    }, [])

    const renderTable = () => {
        return data.map(user => {
            return (
                <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address.street}</td>
                    <td>{user.company.name}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <h1 id="title">API Table</h1>
            <table id="users">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>{renderTable()}</tbody>
            </table>
        </div>
    )
}
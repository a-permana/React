import React, {useState} from 'react';
import Axios from 'axios';
import { Redirect } from "react-router-dom";
import createPersistedState from '@plq/use-persisted-state';

export default function Login () {
    const [use] = createPersistedState("token", window.sessionStorage);
    const [form, setForm] = useState({
        username: "",
        password: "" 
    });
    const [tokens, getToken] = use("token", "");

    const [role, setRole] = useState({
      redirect: true
    });

    const handleSubmit = async e => {
        e.preventDefault();
    try {
    const result = await Axios.post("http://127.0.0.1:8080/api/signin", {
        username: form.username,
        password: form.password
    });
    
    getToken(result.data);
    setRole(result.data.Role);

    if (result.status === 200) {
        alert("berhasil login");
            } else {
        throw new Error("Failed to !");
        }
    } catch (err) {
    console.log(err);
    }
};
    // const [token, getToken] = use("token", "");
    const updateField = e => {
    setForm({
    ...form,
    [e.target.name]: e.target.value
    });
    };
    if (role === "ADMIN") {
        return <Redirect to={"/adminpage"} />;
    } 
    else if (role === "USER") {
        return <Redirect to={"/userpage"} />;
    }
    return (
        <div>
            <h2><center>Sign In</center></h2>
                    <form onSubmit={handleSubmit}>
                    <div class="container3 mt-5">
                        {/* <div class="form-group"> */}
                            <label for="Email">username</label>
                                <input
                                    name="username"
                                    type="text"
                                    placeholder="Enter username"
                                    class="form-control"
                                    value={form.username}
                                    onChange={updateField} 
                                />
                            <label for="password">password</label>
                                <input
                                    name="password"
                                    type="text"
                                    placeholder="Enter Password"
                                    class="form-control"
                                    value={form.password}
                                    onChange={updateField} 
                                />
                        {/* </div> */}
                    <button type="submit" class="btn btn-primary">
                    submit
            </button>
            </div>
        </form>

    </div>
    );

}
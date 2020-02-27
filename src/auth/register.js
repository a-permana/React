import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { Redirect } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Register = props => {
    const { register, watch, errors, getValues, formState } = useForm();
    
    const [form, usedForm] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        roles: ""
    });
    const [redirects, setRedirect] = useState({
        redirect: false
    });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const result = await Axios.post("http://127.0.0.1:8080/api/signup",{
                name: form.name,
                username: form.username,
                email: form.email,
                password: form.password,
                roles: ["USER"]
            });

            console.log(result.data);

            if (result.status === 201) {
                alert("Register Success");
                setRedirect({ redirect: true });
            } else {
                throw new Error("Failed to insert dat!");
                }
            }catch (err) {
                console.log(err);
            }
        };
        console.log(redirects);

        if (redirects.redirect === true){
            return <Redirect to={"/login"} />
        }
    const updateField = e => {
    usedForm({
    ...form,
    [e.target.name]: e.target.value
    });
    };
    
    return (
        <div className="container4">
            <h2><center>Sign up</center></h2>
                <form onSubmit ={handleSubmit}>
                    <label><b>Name</b></label>
                        <input 
                            type="text" 
                            placeholder="Enter Name" 
                            className="form-control" 
                            name="name"
                                ref={register(
                                { required: 'name required'}
                                )}
                            onChange={updateField}/>
                            <span>
                                {errors.name && errors.name.message}
                            </span>

                    <label for="Email"><b>Username</b></label>
                        <input
                            name="username"
                            type="text"
                            placeholder="Enter username"
                            class="form-control"
                            value={form.username}
                            onChange={updateField} />

                    <label><b>Email</b></label>
                        <input 
                            type="Email" 
                            placeholder="Enter Email" 
                            className="form-control" 
                            name="email"
                            ref={register(
                                { required: 'email required', 
                                pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 
                                message: 'email is Invalid'}
                                }
                            )}
                            onChange={updateField}/>
                            <span>
                                {errors.email && errors.email.message}
                            </span>

                    <label><b>Password</b></label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            className="form-control" 
                            name="password"
                            ref={register(
                                { required: 'password required', 
                                minLength: {value: 4, message: 'password atleast 4 character'}
                                }
                            )}
                            onChange={updateField}/>
                            <span>
                                {errors.password && errors.password.message}
                            </span>

                    <label><b>Password Confirm</b></label>
                        <input 
                            type="password" 
                            placeholder="Enter Password Confirm" 
                            className="form-control" 
                            name="passwordConfirm"
                            ref={register(
                                { required: 'passwordConfirm required', 
                                validate: value => value === watch().password || "password don't match"}
                                )}
                                onChange={updateField}/>
                            <span>
                                {errors.passwordConfirm && errors.passwordConfirm.message}
                            </span>

                        <button type="submit" className="btn btn-primary">Sign up</button>
                    <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                </div>   
            </form>
        </div>
    );
}
export default Register;
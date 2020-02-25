import React from 'react'
import {useForm} from 'react-hook-form'

function FormHook() {

    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = data => { console.log(data) };

    console.log(watch('example')) // watch input value by passing the name of it
    
    return (
    <div className="container">
    <form onSubmit ={handleSubmit(onSubmit)}>
        <h2><center>Sign up</center></h2>
            <label><b>Name</b></label>
                <input type="text" placeholder="Enter Name" className="form-control" name="name"
                    ref={register({ required: 'name required'})}/>
                        <span>{errors.name && errors.name.message}</span>

            <label><b>Email address</b></label>
                <input type="email" placeholder="Enter Email" className="form-control" name="email"
                    ref={register({ required: 'email required', pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Email is Invalid'}})}/>
                        <span>{errors.email && errors.email.message}</span>

            <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" className="form-control" name="password"
                    ref={register({ required: 'password required', minLength: {value: 4, message: 'password atleast 4 character'}})}/>
                        <span>{errors.password && errors.password.message}</span>

            <label><b>Password Confirm</b></label>
                <input type="password" placeholder="Enter Password Confirm" className="form-control" name="passwordConfirm"
                    ref={register({ required: 'passwordConfirm required', validate: value => value === watch().password || "password don't match"})}/>
                        <span>{errors.passwordConfirm && errors.passwordConfirm.message}</span>

            <button type="submit" className="btn btn-primary">Sign up</button>
            <input type="checkbox" defaultChecked/> Remember me

                <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot<a href="#">Password?</a></span>
                </div>   
        </form>
        </div>
    );
}
export default FormHook;
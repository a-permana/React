import React from 'react'
import { useForm } from 'react-hook-form'

function FormHook() {

    const { register, handleSubmit, watch, errors } = useForm()
    
    const onSubmit = data => { console.log(data) }

    console.log(watch('example')) // watch input value by passing the name of it
    
    return (
<form onSubmit ={handleSubmit(onSubmit)}>
    <h2>Sign up</h2>
        <div>
            <label>Name</label>
                <input type="text" className="form-control" name="name"
                    placeholder="Name"
                ref={register({ required: 'name required'})}/>
            <span>{errors.name && errors.name.message}</span>
        </div>
        <div>
            <label>Email address</label>
                <input type="email" className="form-control" name="email"
                    placeholder="Email"
                ref={register({ required: 'email required', pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Email is Invalid'}
                })}/>
            <span>{errors.email && errors.email.message}</span>
        </div>
        <div>
            <label>Password</label>
                <input type="password" className="form-control" name="password"
                    placeholder="Password"
                ref={register({ required: 'password required', minLength: {value: 4, message: 'password atleast 4 character'}
                })}/>
            <span>{errors.password && errors.password.message}</span>
        </div>
        <div>
            <label>Password Confirm</label>
                <input type="password" className="form-control" name="passwordConfirm"
                    placeholder="passwordConfirm"
                ref={register({ required: 'passwordConfirm required', validate: value => value === watch().password || "password don't match"
                })}/>
            <span>{errors.passwordConfirm && errors.passwordConfirm.message}</span>
            </div>
                <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
        )
    }
    export default FormHook;
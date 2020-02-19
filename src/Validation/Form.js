import React, { Component } from 'react';
import {FormErrors} from './FormErrors';
import '../index.css';

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',
            formErrors: {name: '', email: '', password: '', passwordConfirm: ''},
            nameValid: false,
            emailValid: false,
            passwordValid: false,
            passwordConfirm: '',
            formValid: false
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                        () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let passwordConfirmValid = this.state.passwordConfirmValid;

        switch(fieldName) {
            case 'name':
                emailValid = value.length < 3;
                fieldValidationErrors.name = nameValid ? '' : ' atleast 3 character required ';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            case 'passwordConfirm':
            passwordConfirmValid = value.match;
            fieldValidationErrors.passwordConfirm = passwordValid ? '': 'password dont match';
        default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        nameValid: nameValid,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        passwordConfirmValid: passwordConfirmValid
                    }, this.validateForm);
                }

                validateForm() {
                    this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.passwordValid && this.state.passwordConfirmValid});
                }
                errorClass(error) {
                    return(error.length === 0 ? '' : 'has-error');
                }
                
                render () {
                    return (
                        <form className="demoForm">
                            <h2>Sign up</h2>
                            <div className="panel panel-default">
                                <FormErrors formErrors={this.state.formErrors} />
                            </div>
                            <div className={`form-
                group ${this.errorClass(this.state.formErrors.name)}`}>
                        <label htmlFor="name">Name</label>
                        <input type="name" required className="form-control" name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleUserInput} />
                        </div>
                            <div className={`form-
                group ${this.errorClass(this.state.formErrors.email)}`}>
                        <label htmlFor="email">Email address</label>
                        <input type="email" required className="form-control" name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleUserInput} />
                        </div>
                        <div className={`form-
                group ${this.errorClass(this.state.formErrors.password)}`}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleUserInput} />
                        </div>
                        <div className={`form-
                group ${this.errorClass(this.state.formErrors.passwordConfirm)}`}>
                        <label htmlFor="passwordConfirm">Password Confirm</label>
                        <input type="passwordConfirm" className="form-control" name="passwordConfirm"
                            placeholder="passwordConfirm"
                            value={this.state.passwordConfirm}
                            onChange={this.handleUserInput} />
                        </div>

                        <button type="submit" className="btn btn-
                primary" disabled={!this.state.formValid}>Sign up</button>
                    </form>
                )
            }
        }
        export default Form;        
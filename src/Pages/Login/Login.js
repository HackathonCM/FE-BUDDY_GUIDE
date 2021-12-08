import React, { Component } from "react";


import {Button, Input, Label} from "reactstrap";
import {FormGroup} from "react-bootstrap";
import * as Login_API from "./login-api"
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            client: null,
            errorStatus: 0,
            error: null,

            formControls: {
                username: {
                    value: '',
                    placeholder: 'enter an username...'
                },
                password: {
                    value: '',
                    placeholder: 'enter a password...'
                }
            }

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {

        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = this.state.formControls;

        const updatedFormElement = updatedControls[name];

        updatedFormElement.value = value;
        updatedControls[name] = updatedFormElement;

        this.setState({
            formControls: updatedControls,
        });

    };

    handleSubmit(e) {

        e.preventDefault();
        let accountInfo = {
            username: this.state.formControls.username.value,
            password: this.state.formControls.password.value
        };

        window.sessionStorage.setItem('username',this.state.formControls.username.value);
        window.sessionStorage.setItem('password',this.state.formControls.password.value);
        console.log(accountInfo);
        this.checkData(accountInfo);
        return false;

    }
    checkData(accountInfo) {
        return Login_API.checkLoginData(accountInfo,(result, status, err) => {

            if(result === null)
            {
                alert("Username or password is not correct");
            }
            else
            {
                window.sessionStorage.setItem('username',this.state.formControls.username.value);
                window.sessionStorage.setItem('password',this.state.formControls.password.value);
                //this.props.history.push('/device', {from: '/device'});
            }

        });
    }

    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <FormGroup id='username'>
                    <Label for='usernameField'> Username: </Label>
                    <Input name='username' id='usernameField' placeholder={this.state.formControls.username.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.username.value}/>
                </FormGroup>

                <FormGroup id='password'>
                    <Label for='passwordField'>Password:</Label>
                    <Input name='password' type='password'  id='passwordField' placeholder={this.state.formControls.password.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.password.value}/>
                </FormGroup>
                {/*}
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                */}

                <Button type={"submit"} className={"btn-primary"} onClick={(e)=>{this.handleSubmit(e)}} >Submit</Button>
                {/*<p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                */}



            </form>
        );
    }
}

export default Login

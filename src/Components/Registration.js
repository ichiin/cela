import React, {Component} from 'react';
import '../Style/Registration.css';
import {Col, Input, InputGroup, Row} from 'reactstrap';
import {Button, IconButton, Snackbar} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Registration extends Component {
    constructor() {
        super();
        this.state = {
            Email: '',
            Password: '',
            RepeatedPassword: '',
            open : false,
            errorMessage: ''
        }

        this.Email = this.Email.bind(this);
        this.Password = this.Password.bind(this);
        this.RepeatedPassword = this.RepeatedPassword.bind(this)
        this.register = this.register.bind(this);
        this.handleAlert = this.handleAlert.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    Email(event) {
        this.setState({Email: event.target.value})
    }

    Password(event) {
        this.setState({Password: event.target.value})
    }

    RepeatedPassword(event) {
        this.setState({RepeatedPassword: event.target.value})
    }

    handleAlert(message){
        this.setState({open: true, errorMessage: message})
    }

    handleClose(event, reason){
        if (reason === 'clickaway') {
            return;
        }
        this.setState({open: false})
    }

    register(event) {
        fetch('http://localhost:3001/reg', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.Email,
                Password: this.state.Password,
                RepeatedPassword: this.state.RepeatedPassword,
            })
        }).then((Response) => Response.json())
            .then((Result) => {
                if (this.state.Email === "" || this.state.Password === "" || this.state.RepeatedPassword === "") {
                    this.handleAlert('You have to fill in all the fields');
                } else if (Result.errors !== undefined && Result.errors[0].msg === "Invalid form!") {
                    this.handleAlert('Entered mail is not valid');
                } else if (Result.errors !== undefined && Result.errors[0].msg === "Already registered!") {
                    this.handleAlert('This email is already registered!');
                } else if (Result.errors !== undefined && Result.errors[0].msg === "Passwords must be same" && this.state.Email !== "") {
                    this.handleAlert('Passwords must be the same!');
                } else
                    this.props.history.push({
                        pathname: "/Login",
                        state: { creation: true }
                    });
            })
    }

    render() {
        return (
            <div id={"pageBackgroundImage"}>
                <div id={"blackOverlay"}>
                    <h1>Registration</h1>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <InputGroup className="mb-3">
                                <br></br>
                                <Input type="text" id="email" name="email"
                                       onChange={this.Email} placeholder="Enter email"/>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <br></br>
                                <Input type="password"
                                       onChange={this.Password} placeholder="Enter password"/>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <br></br>
                                <Input type="password"
                                       onChange={this.RepeatedPassword} placeholder="Confirm password"/>
                            </InputGroup>
                            <br></br>
                            <div id={"buttonStartHolder"}>
                                <button onClick={this.register} id={"buttonStart"}>Register</button>
                            </div>
                        </Col>
                    </Row>
                    <a className="Link" href={'/Login'}>You already have an account? Log in!</a>
                    <div>
                        <Snackbar open={this.state.open} autoHideDuration={4000} onClose={this.handleClose}>
                            <Alert onClose={this.handleClose} severity="error">
                                {this.state.errorMessage}
                            </Alert>
                        </Snackbar>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;

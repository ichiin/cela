import React, { Component } from 'react';
import '../Style/Registration.css';
import { Col, Input, InputGroup, Row } from 'reactstrap';

class Registration extends Component {
  constructor() {
    super();
    this.state = {
        Email: '',
        Password: '',
        RepeatedPassword: '',
    }

    this.Email = this.Email.bind(this);
    this.Password = this.Password.bind(this);
    this.RepeatedPassword = this.RepeatedPassword.bind(this)
    this.register = this.register.bind(this);
  }

  Email(event) {
    this.setState({ Email: event.target.value })
  }

  Password(event) {
    this.setState({ Password: event.target.value })
  }

  RepeatedPassword(event) {
    this.setState({ RepeatedPassword: event.target.value })
  }
  
  register(event) {
    debugger;
    fetch('http://localhost:3001/reg', {
      method: 'post',
      headers : { 
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
        if (this.state.Email === "" || this.state.Password === "" || this.state.RepeatedPassword === ""){
          alert('You have to fill in all the fields')
        }
        else if(Result.errors != undefined && Result.errors[0].msg === "Invalid form!") {
          alert("Entered mail is not valid")
        }
        else if(Result.errors != undefined && Result.errors[0].msg === "Already registered!") {
          alert("This email is already registered!")
        }
        else if(Result.errors != undefined && Result.errors[0].msg === "Passwords must be same" && this.state.Email != "" ) {
          alert("Passwords must be the same!")  
        }
        else
          this.props.history.push("/Login");
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
                                onChange={this.Email} placeholder="Enter email" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <br></br>
                            <Input type="password"  
                            onChange={this.Password} placeholder="Enter password" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <br></br>
                            <Input type="password"  
                            onChange={this.RepeatedPassword} placeholder="Confirm password" />
                        </InputGroup>
                        <br></br>
                        <div id={"buttonStartHolder"}>
                    {/* <Button  onClick={this.register} className="gumbRegistracija"
                    color="danger" block>Registriraj se</Button> */}
                            <button  onClick={this.register} id={"buttonStart"}>Register</button>
                        </div>
                      </Col>
                    </Row>
                  <a className="Link" href={'/Login'}>You already have an account? Log in!</a>
              </div>
          </div>
        );
    }
}

export default Registration;

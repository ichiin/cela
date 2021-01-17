import React, { Component } from "react";
import "../Style/HomePage.css";
import "../Style/Registration.css";
import { Col, Input, InputGroup, Row } from "reactstrap";
import { Button, Grid, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      Email: "",
      Password: "",
      open: false,
      creation: props.location.state ? props.location.state.creation : false,
    };

    this.Password = this.Password.bind(this);
    this.Email = this.Email.bind(this);
    this.login = this.login.bind(this);
    this.handleAlert = this.handleAlert.bind(this);
    this.handleClose = this.handleClose.bind(this);
    localStorage.setItem("isLogged", "false");
  }

  handleAlert() {
    this.setState({ open: true });
  }

  handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  }

  Email(event) {
    this.setState({ Email: event.target.value });
  }

  Password(event) {
    this.setState({ Password: event.target.value });
  }

  login(event) {
    fetch("http://localhost:3001/getUser", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: this.state.Email,
        Password: this.state.Password,
      }),
    })
      .then((Response) => Response.json())
      .then((result) => {
        if (result.length !== 0) {
          localStorage.setItem("isLogged", "true");
          localStorage.setItem("email", this.state.Email);
          console.log(result);
          if (
            result[0].password !== this.state.Password ||
            result[0].email !== this.state.Email
          )
            alert("Incorrect password!");
          else this.props.history.push("/UserForm");
        } else {
          if (this.state.Password === "" && this.state.Email === "")
            alert("You have to fill in all the fields!");
          else
            alert("The email address you entered does not match any accounts");
        }
      });
  }

  componentDidMount() {
    if (this.state.creation === true) this.handleAlert();
  }

  render() {
    return (
      <Grid container id={"pageBackgroundImage"} spacing={8}>
        <Grid
          item
          xs={6}
          container
          id={"blackOverlay"}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item xs={10}>
            <h1>Login</h1>
          </Grid>
          <Grid container item xs={12} justify={"center"}>
            <Col md="9" lg="7" xl="6">
              <InputGroup className="mb-3">
                <br></br>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  onChange={this.Email}
                  placeholder="Enter email"
                />
              </InputGroup>
              <InputGroup>
                <br></br>
                <Input
                  type="password"
                  onChange={this.Password}
                  placeholder="Enter password"
                />
              </InputGroup>
              <br></br>
              <div id={"buttonStartHolder"}>
                <Button
                  variant={"contained"}
                  onClick={this.login}
                  id={"buttonStart"}
                >
                  Log in
                </Button>
              </div>
              <Link to={"/Registration"}>
                <p className={"link"}>You don't have an account? Register!</p>
              </Link>
              <Link to={"/userForm"}>
                <p className={"link"}>Continue as guest</p>
              </Link>
            </Col>
          </Grid>
          <Snackbar
            open={this.state.open}
            autoHideDuration={4000}
            onClose={this.handleClose}
          >
            <Alert onClose={this.handleClose} severity="success">
              Account created successfully
            </Alert>
          </Snackbar>
        </Grid>
      </Grid>
    );
  }
}

export default Login;

import {SubjectsList} from "./Components/SubjectsList";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import LaAgreement from "./Components/LaAgreement";
import Homepage from "./Components/HomePage";
import UserForm from "./Components/UserForm";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import React, {useState} from "react";
import "./Style/App.css";
import Header from "./Components/Header";

function App() {

  const [loggedEmail, setLoggedEmail] = useState("");

  const disconnect = () => {
    console.log("removing sessions")
    localStorage.removeItem("email")
    setLoggedEmail("")
  }
  return (
      <Router>
        <div className="App">
          <Header loggedEmail={loggedEmail} disconnect={disconnect}/>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/SubjectList" component={SubjectsList}/>
            <Route path="/LaAgreement" component={LaAgreement}/>
            <Route exact path="/UserForm" component={UserForm}/>
            <Route exact path="/Registration" component={Registration}/>
            <Route exact path="/Login" render={(props) => <Login {...props} setLoggedEmail={setLoggedEmail}/>}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;

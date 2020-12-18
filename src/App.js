
import {SubjectsList} from './Components/SubjectsList'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import LaAgreement from './Components/LaAgreement'
import Homepage from './Components/HomePage'
import UserForm from './Components/UserForm'
import React from 'react'
import './Style/App.css';

function App() {
  return (
    <div className="App">
     <Router>
        <Route exact path='/' component={Homepage}/>
        <Route  path='/SubjectList' component={SubjectsList}/>
        <Route  path='/LaAgreement' component={LaAgreement}/>
        <Route exact path='/userForm' component={UserForm} />
    </Router>
    </div>
  );
}

export default App;

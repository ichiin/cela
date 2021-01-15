
import {SubjectsList} from './Components/SubjectsList'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import LaAgreement from './Components/LaAgreement'
import Homepage from './Components/HomePage'
import UserForm from './Components/UserForm'
import Registration from './Components/Registration'
import Login from './Components/Login'
import React from 'react'
import './Style/App.css';

function App() {
  return (
    <div className="App">
     <Router>
         <Switch>
             <Route exact path='/' component={Homepage}/>
            <Route  path='/SubjectList' component={SubjectsList}/>
            <Route  path='/LaAgreement' component={LaAgreement}/>
            <Route exact path='/UserForm' component={UserForm} />
            <Route exact path='/Registration' component={Registration} />
            <Route exact path='/Login' component={Login} />
         </Switch>
    </Router>
    </div>
  );
}

export default App;

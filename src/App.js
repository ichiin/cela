
import {SubjectsList} from './Components/SubjectsList'
import UserForm from './Components/UserForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';  
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>    
        <Switch>  
        <Route path='/subjectsList' component={SubjectsList} />    
        </Switch>  
        <Switch>    
          <Route exact path='/userForm' component={UserForm} />    
        </Switch>  
      </Router>  
    </div>
  );
}

export default App;

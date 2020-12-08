
import {SubjectsList} from './Components/SubjectsList'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import LaAgreement from './Components/LaAgreement'
import Homepage from './Components/HomePage'

function App() {
  return (
    <Router>
      <div className="App">
    </div>
    <Route exact path='/' component={Homepage}/>
    <Route  path='/SubjectList' component={SubjectsList}/>
    <Route  path='/LaAgreement' component={LaAgreement}/>
    </Router>
    
  );
}

export default App;

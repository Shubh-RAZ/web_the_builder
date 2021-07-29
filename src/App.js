import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { Route } from 'react-router';
import { Switch } from 'react-router';

function App() {
  return (
    <div className="App">
    
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/reach" exact component={Homepage}></Route>
        <Route path="/bout" exact component={Homepage}></Route>
        <Route path="/projects" exact component={Homepage}></Route>
      </Switch>
    </div>
  );
}

export default App;

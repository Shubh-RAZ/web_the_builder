import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Animate from './Components/Animate/Animate';
import { Route } from 'react-router';
import { Switch } from 'react-router';
import ContactUs from './Components/Contact/Conatct';

function App() {
  return (
    <div className="App">
    
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/reach" exact component={ContactUs}></Route>
        <Route path="/bout" exact component={Homepage}></Route>
        <Route path="/projects" exact component={Homepage}></Route>
        <Route path="/animate" exact component={Animate} ></Route>
      </Switch>
    </div>
  );
}

export default App;

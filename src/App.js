import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Animate from './Components/Animate/Animate';
import { Route } from 'react-router';
import { Switch } from 'react-router';
import ContactUs from './Components/Contact/Conatct';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
    
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/reach" exact component={ContactUs}></Route>
        <Route path="/bout" exact component={About}></Route>
        <Route path="/projects" exact component={Projects}></Route>
        <Route path="/animate" exact component={Animate} ></Route>
      </Switch>
    </div>
  );
}

export default App;

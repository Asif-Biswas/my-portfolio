import { Route, Switch } from 'react-router';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Projects from './components/Projects';

function App() {
  return (
    <div className="hide-scrollbar" style={{height:'100vh', width:'100vw', overflowY:'scroll', overflowX:'hidden'}}>
      <Navigation/>
      
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/projects'>
          <Projects/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

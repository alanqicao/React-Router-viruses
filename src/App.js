import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Route, Switch} from 'react-router-dom'
import { Container } from 'semantic-ui-react';
import Home from './Components/Home';
import About from './Components/About';
import Viruses from './Components/Viruses';
import Navbar from './Components/Navbar';
import NoMatch from './Components/NoMatch';


function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path='/About' component={About} />
          <Route exact path ='/Viruses' component={Viruses} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;

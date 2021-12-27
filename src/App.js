import './App.css';
import React from 'react';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Falsies from './Falsies';
import Navbarmenu from './Navbarmenu';

import Cart from './components/Cart'

class App extends React.Component {
  render() {   
    return (
    <div>
      <Router>
          <Navbarmenu/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/falsies" component={Falsies} />
            <Route exact path="/cart" component={Cart} />
          </Switch>          
      </Router>      
    </div>)
  }
}

export default App;

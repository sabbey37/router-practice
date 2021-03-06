import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import './App.css';
import Calculator from "./Calculator.js";
import Marta from "./Marta.js";
import Clock from "./Clock.js";
import Home from "./Home.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <div>
                <div className="navbar">
                    <NavLink to="/" exact activeStyle={{color: '#F9CF00'}}>Home</NavLink>
                    <ul className="nav">
                        <li><NavLink to="/Worldclocks" activeStyle={{color: '#F9CF00'}}>World Clocks</NavLink></li>
                        <li><NavLink to="/Realculator" activeStyle={{color: '#F9CF00'}}>Realculator</NavLink></li>
                        <li><NavLink to="/MARTA" activeStyle={{color: '#F9CF00'}}>MARTA Train Tracker</NavLink></li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path = "/" component={Home} />
                    <Route path = "/Worldclocks" component={Clock} />
                    <Route path = "/Realculator" component={Calculator} />
                    <Route path = "/MARTA" component={Marta} />
                    <Route render={() => (
                        <p>Page not found: No Soup for you!</p>
                        )} />
                </Switch>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

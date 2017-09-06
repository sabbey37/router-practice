import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/Worldclocks">World Clocks</Link></li>
                    <li><Link to="/Realculator">React Calculator</Link></li>
                    <li><Link to="/Martah">Martah Train Tracker</Link></li>
                </ul>
                <Switch>
                    <Route exact path = "/Worldclocks" component={} />
                    <Route path = "/Realculator" component={} />
                    <Route path = "/Martah" component={} />
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

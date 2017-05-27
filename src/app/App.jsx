/* eslint react/prefer-stateless-function: "off" */

import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { Login } from './login';
import { Home } from './home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route component={Home} />
        </Switch>
      </Router>
    );
  }
}

/* eslint react/prefer-stateless-function: "off" */

import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { Login } from './login';
import { Home } from './home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </main>
      </Router>
    );
  }
}

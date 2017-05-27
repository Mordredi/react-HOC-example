/* eslint react/prefer-stateless-function: "off" */

import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { LoginValidation } from './login';
import { HomeValidation } from './home';

export default () => (
  <Router>
    <Switch>
      <Route path="/login" component={LoginValidation} />
      <Route component={HomeValidation} />
    </Switch>
  </Router>
);

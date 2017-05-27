/* eslint react/prop-types: "off" */

import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AuthRedirect = (Target, login) =>
  (props) => {
    if (login) {
      return props.loggedIn ? <Redirect to={{ pathname: '/' }} /> : <Target {...props} />;
    }
    return props.loggedIn ? <Target {...props} /> : <Redirect to={{ pathname: '/login' }} />;
  };

AuthRedirect.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

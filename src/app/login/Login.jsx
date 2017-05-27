import React from 'react';
import PropTypes from 'prop-types';

export const Login = ({ onSubmit }) => (
  <section className="login">
    <form onSubmit={onSubmit}>
      <input name="email" type="text" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Log in</button>
    </form>
  </section>
);

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

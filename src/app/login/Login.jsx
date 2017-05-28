import React from 'react';
import PropTypes from 'prop-types';

export const Login = ({ onSubmit, onChange, validations }) => (
  <section className="login">
    <form onSubmit={onSubmit} onChange={onChange} >
      <input name="email" type="text" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button
        type="submit"
        disabled={!validations.email.valid || !validations.password.valid}
      >
        Log in
      </button>
    </form>
  </section>
);

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  validations: PropTypes.shape({
    email: PropTypes.shape({
      required: PropTypes.bool.isRequired,
      value: PropTypes.string,
      valid: PropTypes.bool,
    }),
    password: PropTypes.shape({
      required: PropTypes.bool.isRequired,
      value: PropTypes.string,
      valid: PropTypes.bool,
    }),
  }).isRequired,
};

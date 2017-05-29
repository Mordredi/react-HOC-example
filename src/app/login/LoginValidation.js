import { connect } from 'react-redux';

import { logIn, Login } from '.';
import { AuthRedirect, FormValidation } from '..';

const mapStateToProps = ({ loggedIn }) => ({
  loggedIn,
});

const mapDispatchToProps = dispatch => ({
  onSubmit(ev) {
    ev.preventDefault();
    const { email, password } = ev.target.elements;
    dispatch(logIn(email.value, password.value));
  },
});

export const LoginValidation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthRedirect(
  FormValidation({
    email: {
      required: true,
    },
    password: {
      required: true,
    },
  }, Login),
  true,
));

import { connect } from 'react-redux';

import { Home } from '.';
import { AuthRedirect } from '../hoc';

const mapStateToProps = ({ loggedIn }) => ({
  loggedIn,
});

export const HomeValidation = connect(mapStateToProps)(AuthRedirect(Home));

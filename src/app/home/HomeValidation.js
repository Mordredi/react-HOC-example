import { connect } from 'react-redux';

import { Home } from '.';
import { AuthRedirect } from '..';

const mapStateToProps = ({ loggedIn }) => ({
  loggedIn,
});

export const HomeValidation = connect(mapStateToProps)(AuthRedirect(Home));

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loggedIn = (state = false, { type }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return true;
    default:
      return state;
  }
};

import { LOGIN_SUCCESS } from '..';

export const logIn = (email, password) => {
  console.log(email, password);
  return {
    type: LOGIN_SUCCESS,
  };
};

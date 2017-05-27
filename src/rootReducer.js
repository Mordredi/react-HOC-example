import { combineReducers } from 'redux';

import { loggedIn } from './app';

export const rootReducer = combineReducers({
  loggedIn,
});

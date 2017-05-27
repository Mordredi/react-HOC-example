/* eslint import/no-extraneous-dependencies: 'off' */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

import App from './app/App';

const root = document.getElementById('root');
const store = createStore(rootReducer);

const bootstrap = (Component) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    root,
  );
};

bootstrap(App);

if (module.hot) {
  module.hot.accept('./app/App', () => {
    bootstrap(App);
  });
}


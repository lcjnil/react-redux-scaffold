import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './lib/store';
import 'style!css!todomvc-app-css/index.css';
import Routes from './Routes';

if (__DEVELOPMENT__) {
  // babel export default...
  let DevTools = require('./lib/devTools');
  DevTools = DevTools.default;

  render(
    <Provider store={store}>
      <div>
        <DevTools />
        <Routes />
      </div>
    </Provider>, document.getElementById('container'));
} else {
  render(
    <Provider store={store}>
      <Routes />
    </Provider>, document.getElementById('container'));
}

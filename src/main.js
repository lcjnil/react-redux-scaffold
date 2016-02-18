import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import store from './lib/store';

if (__DEVTOOLS__) {
  const DevTools =  require('./lib/devTools');

  render(
      <Provider store={store}>
        <div>
          <ReduxRouter />
          <DevTools />
        </div>
      </Provider>
      ,
    document.getElementById('content')
  );
} else {
  render(
    <Provider store={store}>
      <ReduxRouter />
    </Provider>
    ,
    document.getElementById('content')
  );
}

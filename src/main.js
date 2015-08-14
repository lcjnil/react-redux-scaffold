import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import * as reducers from './reducers';
import Routes from './Routes.js';

let finalCreateStore;

if (__DEVTOOLS__) {
  const { devTools } = require('redux-devtools');
  finalCreateStore = compose(
    applyMiddleware(thunk),
    devTools(),
    createStore
  );
} else {
  finalCreateStore = compose(
    applyMiddleware(thunk),
    createStore
  );
}

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

export default class App extends Component {
  render() {
    let devtools = null;
    if (__DEVTOOLS__) {
      const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
      devtools = (
        <DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={LogMonitor} />
        </DebugPanel>
      );
    }
    return (
      <div>
        <Provider store={store}>
          {() => <Routes />}
        </Provider>
        {devtools}
      </div>
    );
  }
}

React.render(<App />, document.body);

import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
//for redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { provide } from 'react-redux';
import thunk from 'redux-thunk';

import { IndexPage, CounterPage } from './pages';
import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

@provide(store)
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={IndexPage}></Route>
        <Route path="/counter" component={CounterPage}></Route>
      </Router>
    );
  }
}

React.render(<App />, document.body);

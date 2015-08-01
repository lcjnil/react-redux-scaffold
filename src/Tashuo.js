/* eslint react/self-closing-comp:0 */

import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import { IndexPage, CounterPage } from './pages';

export default class Tashuo extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={IndexPage}></Route>
        <Route path="/counter" component={CounterPage}></Route>
      </Router>
    );
  }
}

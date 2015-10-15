/* eslint react/self-closing-comp:0 */

import React from 'react';
import { Route } from 'react-router';

import { IndexPage, TodosPage } from './pages';

export default (
  <div>
    <Route path="/" component={IndexPage}/>
    <Route path="/todos" component={TodosPage}/>
  </div>
);

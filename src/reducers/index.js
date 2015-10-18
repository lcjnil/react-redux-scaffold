import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import { todos, filter } from './todos.js';

const rootReducer = combineReducers({
  todos,
  filter,
  router
});

export default rootReducer;

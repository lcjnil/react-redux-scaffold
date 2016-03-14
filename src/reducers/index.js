import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { todos, filter } from './todos.js';

const rootReducer = combineReducers({
  todos,
  filter,
  routing: routerReducer
});

export default rootReducer;

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import DevTools from './devTools';

const enhancer = __DEVELOPMENT__ ?
  compose(
    applyMiddleware(thunk),
    DevTools.instrument()
  )
    :
  compose(
    applyMiddleware(thunk)
  );

function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers')));
  }

  return store;
}

const store = configureStore();

export default store;

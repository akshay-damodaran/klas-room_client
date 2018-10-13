// Store config

import 'babel-polyfill';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSageMiddleware from 'redux-saga';

import loadState from './localStorage';

import loginReducer from './Reducers/loginReducer';

import rootSaga from './Sagas/rootSaga';

const sagaMiddleware = createSageMiddleware();

const middleware = [
  sagaMiddleware,
  logger,
];

const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadState();

const rootReducer = combineReducers({
  loginReducer,
});

const store = createStore(
  rootReducer,
  persistedState,
  enhancer,
);

sagaMiddleware.run(rootSaga);

export default store;

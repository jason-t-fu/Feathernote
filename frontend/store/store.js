import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  return process.env.NODE_ENV === 'production' ? 
    createStore(RootReducer, preloadedState, applyMiddleware(thunk)
  ) : (
    createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
  );
};

export default configureStore;
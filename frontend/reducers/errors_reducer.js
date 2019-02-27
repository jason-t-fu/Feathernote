import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
});

/*
  State Slice:
  errors: {
    session: {
      0: ['Error 1'],
      1: ['Error 2']
    }
  }
*/
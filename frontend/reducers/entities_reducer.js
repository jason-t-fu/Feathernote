import { combineReducers } from 'redux';
import usersReducer from './users_reducer';

export default combineReducers({
  users: usersReducer
});


/*
  State Slice:
  {
    entities: {
      users: {
        1: {...}
        2: {...}
      }
    }
    session: {...}
    errors: {...}
    ui: {...}
  }
*/
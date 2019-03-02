import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import notesReducer from './notes_reducer';

export default combineReducers({
  users: usersReducer,
  notes: notesReducer
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
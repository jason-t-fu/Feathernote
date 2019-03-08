import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import notesErrorsReducer from './notes_errors_reducer';
import notebooksErrorsReducer from './notebooks_errors_reducer';
import tagsErrorsReducer from './tags_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  notes: notesErrorsReducer,
  notebooks: notebooksErrorsReducer,
  tags: tagsErrorsReducer
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
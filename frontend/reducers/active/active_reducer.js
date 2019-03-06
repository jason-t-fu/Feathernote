import { combineReducers } from 'redux';
import activeNoteReducer from './active_note_reducer';
import activeNotebookReducer from './active_notebook_reducer';

const activeReducer = combineReducers({
  activeNoteId: activeNoteReducer,
  activeNotebookId: activeNotebookReducer
});

export default activeReducer;
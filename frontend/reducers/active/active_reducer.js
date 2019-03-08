import { combineReducers } from 'redux';
import activeNoteReducer from './active_note_reducer';
import activeNotebookReducer from './active_notebook_reducer';
import activeTagReducer from './active_tag_reducer';

const activeReducer = combineReducers({
  activeNoteId: activeNoteReducer,
  activeNotebookId: activeNotebookReducer,
  activeTagId: activeTagReducer
});

export default activeReducer;
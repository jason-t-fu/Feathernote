import { RECEIVE_ALL_NOTES, 
         RECEIVE_NOTE, 
         REMOVE_NOTE } from '../../actions/notes_actions';
import { merge } from 'lodash'

const _nullNotes = { };

const notesReducer = (state = _nullNotes, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      return merge({}, state, {[action.note.id]: action.note});
    case REMOVE_NOTE:
      const newState = merge({}, state);
      delete newState[action.noteId];
      return newState;
    default:
      return state;
  }
};

export default notesReducer;

/*
  State Slice:
  entities: {
    notes: { null }
  }

  or

  entities: {
    notes: {
      1: {
        id: 1,
        title: "",
        body: "",
        notebookId: "",
        createdAt: "",
      }
      2: {
        id: 2,
        title: "",
        body: "",
        notebookId: "",
        createdAt: "",
      }
    }
  }
*/
import { RECEIVE_NOTE, MAKE_NOTE } from "../../actions/notes_actions";

const _nullActiveNote = null;

const activeNoteReducer = (state = _nullActiveNote, action) => {
  Object.freeze(state);

  switch (action.type) {
    case MAKE_NOTE:
      return _nullActiveNote;
    case RECEIVE_NOTE:
      debugger;
      return action.note.id;
    default: 
      return state;
  }
};

export default activeNoteReducer;
import { RECEIVE_NOTE, MAKE_NOTE } from "../../actions/notes_actions";

const _nullActiveNoteId = null;

const activeNoteReducer = (state = _nullActiveNoteId, action) => {
  Object.freeze(state);

  switch (action.type) {
    case MAKE_NOTE:
      return _nullActiveNoteId;
    case RECEIVE_NOTE:
      return action.note.id;
    default: 
      return state;
  }
};

export default activeNoteReducer;
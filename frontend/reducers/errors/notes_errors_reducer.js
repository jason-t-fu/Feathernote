import { RECEIVE_NOTES_ERRORS, RECEIVE_NOTE } from '../../actions/notes_actions';

const _nullErrors = [];

const notesErrorsReducer = (state = _nullErrors, action) => {
  //Make sure current state is not mutated
  Object.freeze(state);

  //On type of action, update state
  switch (action.type) {
    case RECEIVE_NOTES_ERRORS:
      return action.errors;
    case RECEIVE_NOTE:
      return _nullErrors;
    default:
      return state;
  }
};

export default notesErrorsReducer;

/*
  State Slice:
  {
    errors: { notes: [] }

    or

    errors: {
      notes: ["Error1", "Error2", ...]
    }


    entities: {...}
    session: {...}
    ui: {...}
  }
*/
import { RECEIVE_ERRORS, RECEIVE_USER, LOGOUT_USER } from '../actions/session_actions';
import { CLEAR_ERRORS } from '../actions/session_actions';

const _nullErrors = [];

const sessionErrorsReducer = (state = _nullErrors, action) => {
  //Make sure current state is not mutated
  Object.freeze(state);

  //On type of action, update state
  switch (action.type) {
    case RECEIVE_USER:
    case LOGOUT_USER:
      return _nullErrors;
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default sessionErrorsReducer;

/*
  State Slice:
  {
    errors: { session: [] }

    or 

    errors: {
      session: ["Error1", "Error2", ...]
    }


    entities: {...}
    session: {...}
    ui: {...}
  }
*/
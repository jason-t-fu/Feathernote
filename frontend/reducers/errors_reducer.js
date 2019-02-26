import { RECEIVE_ERRORS, RECEIVE_USER, LOGOUT_USER } from '../actions/session_actions';

const _nullErrors = {session: []};

const errorsReducer = (state = _nullErrors, action) => {
  //Make sure current state is not mutated
  Object.freeze(state);

  //On type of action, update state
  switch (action.type) {
    case RECEIVE_USER:
    case LOGOUT_USER:
      return _nullErrors;
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default errorsReducer;

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
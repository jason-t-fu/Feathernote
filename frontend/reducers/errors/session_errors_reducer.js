import { RECEIVE_SESSION_ERRORS, 
         RECEIVE_USER, 
         LOGOUT_USER, 
         CLEAR_ERRORS } from '../../actions/session_actions';

const _nullErrors = [];

const sessionErrorsReducer = (state = _nullErrors, action) => {
  //Make sure current state is not mutated
  Object.freeze(state);

  //On type of action, update state
  switch (action.type) {
    case RECEIVE_USER:
    case LOGOUT_USER:
      return _nullErrors;
    case RECEIVE_SESSION_ERRORS:
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
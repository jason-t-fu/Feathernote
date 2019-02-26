import { RECEIVE_USER, LOGOUT_USER } from '../actions/session_actions';

const _nullSession = {currentUserId: null};

const sessionReducer = (state = _nullSession, action) => {
  //Make sure current state is not mutated
  Object.freeze(state);

  //On type of action, update state
  switch (action.type) {
    case RECEIVE_USER:
      return {currentUserId: action.user.id};
    case LOGOUT_USER:
      return _nullSession;
    default:
      return state;
  }
};

export default sessionReducer;

/*
  State Slice:
  {
    session: { currentUserId: #/null }
    entities: {...}
    errors: {...}
    ui: {...}
  }
*/
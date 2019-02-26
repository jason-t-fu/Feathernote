import { RECEIVE_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = { };

const usersReducer = (state = _nullUser, action) => {
  //Make sure current state is not mutated
  Object.freeze(state);

  //On type of action, update state
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
};

export default usersReducer;

/*
  State Slice:
  entities: {
    users: { null }
  }

  or

  entities: {
    users: {
      1: {
        username: "",
        password: "",
      }
      2: {
        username: "",
        password: ""
      }
    }
  }
*/
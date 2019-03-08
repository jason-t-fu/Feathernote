import { RECEIVE_TAG_ERRORS } from '../../actions/tags_action';

const _nullErrors = [];

const tagsErrorsReducer = (state = _nullErrors, action) => {
  //Make sure current state is not mutated
  Object.freeze(state);

  //On type of action, update state
  switch (action.type) {
    case RECEIVE_TAG_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default tagsErrorsReducer;

/*
  State Slice:
  {
    errors: { tags: [] }

    or

    errors: {
      tags: ["Error1", "Error2", ...]
    }


    entities: {...}
    session: {...}
    ui: {...}
  }
*/
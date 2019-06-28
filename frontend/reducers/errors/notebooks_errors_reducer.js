import { RECEIVE_NOTEBOOK_ERRORS } from '../../actions/notebooks_actions';

const _nullErrors = [];

const notebooksErrorsReducer = (state = _nullErrors, action) => {
  //Make sure current state is not mutated
  Object.freeze(state);

  //On type of action, update state
  switch (action.type) {
    case RECEIVE_NOTEBOOK_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default notebooksErrorsReducer;

/*
  State Slice:
  {
    errors: { notebooks: [] }

    or

    errors: {
      notebooks: ["Error1", "Error2", ...]
    }


    entities: {...}
    session: {...}
    ui: {...}
  }
*/
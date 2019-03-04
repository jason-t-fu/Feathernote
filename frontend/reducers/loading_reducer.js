import { RECEIVE_ALL_NOTES, 
         START_LOADING_ALL_NOTES,
         RECEIVE_NOTES_ERRORS } from '../actions/notes_actions';

const _nullLoading = true;

const loadingReducer = (state = _nullLoading, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_NOTES:
    case RECEIVE_NOTES_ERRORS:
      return false;
    case START_LOADING_ALL_NOTES:
      return true;
    default:
      return state;
  }
};

export default loadingReducer;

/*
  State Slice:

  ui: {
    loading: true/false;
  }
*/
import {
  RECEIVE_ALL_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK
} from '../../actions/notebooks_actions';
import { merge } from 'lodash'

const _nullNotebooks = {};

const notebooksReducer = (state = _nullNotebooks, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_NOTEBOOKS:
      return action.notebooks;
    case RECEIVE_NOTEBOOK:
      return merge({}, state, { [action.notebook.id]: action.notebook });
    case REMOVE_NOTEBOOK:
      const newState = merge({}, state);
      delete newState[action.notebookId];
      return newState;
    default:
      return state;
  }
};

export default notebooksReducer;

/*
  State Slice:
  entities: {
    notebooks: { null }
  }

  or

  entities: {
    notebooks: {
      1: {
        id: 1,
        title: "",
        owner_id: "",
        notebookId: "",
        createdAt: "",
      }
      2: {
        id: 2,
        title: "",
        owner_id: "",
        notebookId: "",
        createdAt: "",
      }
    }
  }
*/
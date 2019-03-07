import { RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK } from "../../actions/notebooks_actions";
import { RECEIVE_ALL_NOTES } from '../../actions/notes_actions';

const _nullActiveNotebookId = null;

const activeNotebookReducer = (state = _nullActiveNotebookId, action) => {
  Object.freeze(state);

  switch (action.type) {
    // case RECEIVE_TAG:
    // case MAKE_NOTEBOOK:
    case REMOVE_NOTEBOOK:
      return (state === action.notebookId) ? _nullActiveNotebookId : state;
    case RECEIVE_ALL_NOTES:
      return _nullActiveNotebookId;
    case RECEIVE_NOTEBOOK:
      return action.notebook.id;
    default: 
      return state;
  }
};

export default activeNotebookReducer;
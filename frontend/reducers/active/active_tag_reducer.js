import { RECEIVE_TAG, RECEIVE_ALL_TAGS, REMOVE_TAG } from "../../actions/tags_actions";

const _nullActiveTagId = null;

const activeTagReducer = (state = _nullActiveTagId, action) => {
  Object.freeze(state);

  switch (action.type) {
    case REMOVE_TAG:
      return (state === action.TagId) ? _nullActiveTagId : state;
    case RECEIVE_ALL_TAGS:
      return _nullActiveTagId;
    case RECEIVE_TAG:
      return action.tag.id;
    default:
      return state;
  }
};

export default activeTagReducer;
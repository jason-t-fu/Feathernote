import { RECEIVE_ALL_TAGS, RECEIVE_TAG, REMOVE_TAG } from '../../actions/tags_action';
import { merge } from 'lodash';

const _nullTag = {};

const tagReducer = (state = _nullTag, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      return merge({}, state, { [action.tag.id]: action.tag });
    case REMOVE_TAG:
      const newState = merge({}, state);
      delete newState[action.tagId];
      return newState;
    default:
      return state;
  }
};

export default tagReducer;

/*
  State Slice:
  entities: {
    tags: { null }
  }

  or

  entities: {
    tags: {
      1: {
        id: 1,
        name: ""
      }
      2: {
        id: 2,
        name: ""
      }
    }
  }
*/
import * as TagsApiUtil from '../util/tags_api_util';

export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const RECEIVE_TAG_ERRORS = "RECEIVE_TAG_ERRORS";
export const START_LOADING_ALL_TAGS = "START_LOADING_ALL_TAGS";

const receiveAllTags = tags => {
  return {
    type: RECEIVE_ALL_TAGS,
    tags
  };
};

const receiveTag = tag => {
  return {
    type: RECEIVE_TAG,
    tag
  };
};

const removeTag = tagId => {
  return {
    type: RECEIVE_ALL_TAGS,
    tagId
  };
};

const receiveTagErrors = errors => {
  return {
    type: RECEIVE_TAG_ERRORS,
    errors
  };
};

const startLoadingAllTags = () => {
  return {
    type: START_LOADING_ALL_TAGS
  };
};

export const fetchAllTags = () => {
  return dispatch => {
    dispatch(startLoadingAllTags());
    return TagsApiUtil.fetchAllTags().then(
      tags => dispatch(receiveAllTags(tags)),
      errors => dispatch(receiveTagErrors(errors.responseJSON))
    );
  };
};

export const fetchTag = tagId => {
  return dispatch => {
    return TagsApiUtil.fetchTag(tagId).then(
      resTag => dispatch(receiveTag(resTag)),
      errors => dispatch(receiveTagErrors(errors.responseJSON))
    );
  };
};

export const createTag = tag => {
  return dispatch => {
    return TagsApiUtil.createTag(tag).then(
      resTag => dispatch(receiveTag(resTag)),
      errors => dispatch(receiveTagErrors(errors.responseJSON))
    );
  };
};

export const updateTag = tag => {
  return dispatch => {
    return TagsApiUtil.updateTag(tag).then(
      resTag => dispatch(receiveTag(resTag)),
      errors => dispatch(receiveTagErrors(errors.responseJSON))
    );
  };
};

export const deleteTag = tagId => {
  return dispatch => {
    return TagsApiUtil.deleteTag(tagId).then(
      () => dispatch(removeTag(tagId)),
      errors => dispatch(receiveTagErrors(errors.responseJSON))
    );
  };
};
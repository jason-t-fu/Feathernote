import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const signup = user => {
  return dispatch => {
    return SessionApiUtil.signup(user).then( 
      resUser => dispatch(receiveUser(resUser)),
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    );
  };
};

export const login = user => {
  return dispatch => {
    return SessionApiUtil.login(user).then(
      resUser => dispatch(receiveUser(resUser)),
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    );
  };
};

export const logout = () => {
  return dispatch => {
    return SessionApiUtil.logout().then( 
      () => dispatch(logoutUser()),
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    );
  };
};
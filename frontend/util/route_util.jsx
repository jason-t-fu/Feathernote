import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return <Route path={path} exact={exact} render={ props => {
    return !loggedIn? (
      <Component {...props} />
    ) : (
      <Redirect to="/notes" />
    )
  }} />
};

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return <Route path={path} exact={exact} render={ props => {
    return loggedIn? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  }} />
};

const ValidNote = ({ component: Component, path, validNote, exact }) => {
  return <Route path={path} exact={exact} render={props => {
    return validNote ? (
      <Component {...props} />
    ) : (
      <Redirect to="/notes/new" />
    )
  }} />
};

const sessionMapStateToProps = state => {
  return { loggedIn: Boolean(state.session.currentUserId) };
};

const noteMapStateToProps = (state, ownProps) => {
  const regex = /^\/notes\/(.*)/;
  const currentPath = ownProps.location.pathname;
  const noteId = currentPath.match(regex)[1];

  return { validNote: Boolean(Object.keys(state.entities.notes).includes(noteId)) }
}

export const AuthRoute = withRouter(connect(sessionMapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(sessionMapStateToProps)(Protected));
export const ValidNoteRoute = withRouter(connect(noteMapStateToProps)(ValidNote));

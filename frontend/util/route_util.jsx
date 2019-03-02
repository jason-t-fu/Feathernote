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

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.currentUserId) };
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

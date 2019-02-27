import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import setCurrentUser from './util/set_current_user';
import Root from './root';
import * as SessionActions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = setCurrentUser(configureStore);
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.SessionActions = SessionActions;
});
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import SessionFormContainer from './components/session/session_form_container';
import UserFormContainer from './components/session/user_form_container';
import SplashContainer from './components/splash_container';
import NotesIndexContainer from './components/notes/notes_index_container';

const App = () => {  
  return (
    <div className="app">
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={UserFormContainer} />
        <ProtectedRoute path="/notes" component={NotesIndexContainer} />
        <Route exact path="/" component={SplashContainer} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, SplashRoute } from './util/route_util';
import SessionFormContainer from './components/session/session_form_container';
import UserFormContainer from './components/session/user_form_container';
import NotesContainer from './components/notes/notes_container';

const App = () => {  
  return (
    <div className="app">
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={UserFormContainer} />
        <ProtectedRoute path="/:noteId" component={NotesContainer} />
        <SplashRoute exact path="/" />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
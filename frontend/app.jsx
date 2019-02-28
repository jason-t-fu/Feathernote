import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import SessionFormContainer from './components/session_form_container';
import UserFormContainer from './components/user_form_container';
import SplashContainer from './components/splash_container';

const App = () => {  
  return (
    <div className="app">
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={UserFormContainer} />
        <Route exact path="/" component={SplashContainer} />
      </Switch>
    </div>
  );
};

export default App;
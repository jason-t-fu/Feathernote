import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './components/session_form_container';
import UserFormContainer from './components/user_form_container';

const App = () => {
  return (
    <div>
      <h1>Do you work now?</h1>

      <Route path="/login" component={SessionFormContainer} /> 
      <Route path="/signup" component={UserFormContainer} /> 
    </div>
  );
};

export default App;
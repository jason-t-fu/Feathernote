import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SessionForm = props => {
  const [email, setEmail] = useState(props.user.email);
  const [password, setPassword] = useState(props.user.password);

  useEffect(() => {
    if (props.errors.length !== 0) {
      props.clearErrors();
    }
  }, []);

  let formType;
  let linkToOtherForm;
  if (props.formType === "signup") {
    formType = "Sign Up";
    linkToOtherForm =
      <label>Already have an account?
        <Link to="/login">Log In</Link>
      </label>
  }
  else {
    formType = "Log In";
    linkToOtherForm = 
      <label>Don't have an account?
        <Link to="/signup">Sign Up</Link>
      </label>
  }
  let emailErrors = [];
  let credentialErrors = [];
  props.errors.forEach( error => {
    let formattedError = <span key={error}>{error}</span>;
    if (error.includes("Email")) {
      emailErrors.push(formattedError);
    }
    else {
      credentialErrors.push(formattedError);
    }
  })

  function handleSubmit(event){
    event.preventDefault();
    const user = {email, password};
    props.action(user);
  }

  return (
    <div className="user-form">
      <form onSubmit={handleSubmit}>
        <input type="text"
               value={email}
               placeholder="Email"
               onChange={event => setEmail(event.target.value)} />
        {emailErrors}
        <input type="password"
               placeholder="Password"
               onChange={event => setPassword(event.target.value)} />
        {credentialErrors}
        <button>{formType}</button>
        {linkToOtherForm}
      </form>
    </div>
  )
}

export default SessionForm;
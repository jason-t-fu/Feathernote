import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SessionForm = props => {
  const [email, setEmail] = useState(props.user.email);
  const [password, setPassword] = useState(props.user.password);

  useEffect(() => {
    if (props.errors.length !== 0) {
      props.clearErrors();
    }

    if (props.demo) {
      fillField('email', setEmail)
        .then(() => fillField('password', setPassword))
        .then(() => handleSubmit(props.demo));
    }
  }, []);

  let emailErrors = [];
  let credentialErrors = [];
  props.errors.forEach( error => {
    let formattedError = <span className="errors" key={error}>{error}</span>;
    if (error.includes("Email")) {
      emailErrors.push(formattedError);
    }
    else {
      credentialErrors.push(formattedError);
    }
  })

  function handleSubmit(user) {
    props.action(user);
  }

  // fillUsername.then(fillPassword).then(handleSubmit);
  // fillUsername returns a promise, calls fillPassword.
  // fillPassword also returns a promise, then calls handleSubmit.

  const fillField = (fieldName, setCallback) => {
    return new Promise( (resolve, reject) => {
      let i = 0;
      let intervalId = window.setInterval(fillInterval, 100);
      function fillInterval() {
        i++;
        setCallback(props.demo[fieldName].slice(0, i));
        if (i > props.demo[fieldName].length) {
          intervalId = window.clearInterval(intervalId);
          resolve();
        }
      }
    });
  }

  return (
    <div className="form-wrapper">
      <div className="form-frame">
        <div className="form-header">
          <img className="feathernote-logo" src={window.images.logo} />
          <div className="feathernote-title">Feathernote</div>
          <div className="feathernote-tagline">Remember everything important.</div>
        </div>

        <form className={`session-form`} disabled={props.demo}>
          <button className="demo-form-submit">
            <Link to={{ pathname: "/login", state: true }} >
              Demo Login
            </Link>
          </button>
          
          <div className="horizontal-text">or</div>
          
          <input type="text"
                value={email}
                placeholder="Email"
                id="email-input"
                onChange={event => setEmail(event.currentTarget.value)} />
          {emailErrors}
          <input type="password"
                value={password}
                placeholder="Password"
                id="password-input"
                onChange={event => setPassword(event.currentTarget.value)} />
          {credentialErrors}
          <button className="session-form-submit" 
                  onClick={() => handleSubmit({email, password})}
                  disabled={props.demo} >
            Continue
          </button>
          <div className="link-to">{props.formType}</div>
        </form>
      </div>
    </div>
  )
}

export default SessionForm;
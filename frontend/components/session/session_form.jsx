import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SessionForm = props => {
  const [email, setEmail] = useState(props.user.email);
  const [password, setPassword] = useState(props.user.password);
  const [demoDisabled, setDemoDisabled] = useState(false);
  const demoUser = {
    email: "admin@feathernote.com",
    password: "password"
  };

  useEffect(() => {
    const demoButton = document.getElementById('demo');
    if (demoButton) {
      demoButton.onclick = startDemo;
    }

    if (props.demo) {
      demoButton.click();
    }

    return () => {
      props.clearErrors();
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

  const handleSubmit = user => {
    props.action(user);
  }

  // fillUsername.then(fillPassword).then(handleSubmit);
  // fillUsername returns a promise, calls fillPassword.
  // fillPassword also returns a promise, then calls handleSubmit.

  const startDemo = () => {
    setDemoDisabled(true);
    fillField('email', setEmail)
      .then(() => fillField('password', setPassword))
      .then(() => handleSubmit(demoUser));
  }

  const fillField = (fieldName, setCallback) => {
    setDemoDisabled(true);
    return new Promise( (resolve, reject) => {
      let i = 0;
      let intervalId = window.setInterval(fillInterval, 60);
      function fillInterval() {
        i++;
        setCallback(demoUser[fieldName].slice(0, i));
        if (i > demoUser[fieldName].length) {
          intervalId = window.clearInterval(intervalId);
          resolve();
        }
      }
    });
  }

  //if on signup link to login
  //if on login do demologin
  return (
    <div className="form-wrapper">
      <div className="form-frame">
        <div className="form-header">
          <Link className="to-splash" to="/">
            <img className="unselectable feathernote-logo" src={window.images.logo} />
            <div className="unselectable feathernote-title">Feathernote</div>
          </Link>
          <div className="unselectable feathernote-tagline">Remember everything important.</div>
        </div>

        <form className={`session-form`} 
              disabled={demoDisabled}
              onSubmit={() => handleSubmit({email, password})}>
          
          {props.demoLink}
          
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
          <button className="session-form-submit">
            Continue
          </button>
          <div className="link-to">{props.formType}</div>
        </form>
      </div>
    </div>
  )
}

export default SessionForm;
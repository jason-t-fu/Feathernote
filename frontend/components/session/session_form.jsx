import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SwitchSession from './switch_session';
import DemoButton from './demo-button';

const SessionForm = ({ user, formType, errors, demo, action, clearErrors }) => {
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [demoDisabled, setDemoDisabled] = useState(false);

  const demoUser = {
    email: "admin@feathernote.com",
    password: "password"
  };

  useEffect(() => {
    if (demo) {
      startDemo();
    }

    return () => {
      clearErrors();
    };
  }, [demo]);

  const handleSubmit = user => {
    action(user);
  };

  const startDemo = () => {
    setDemoDisabled(true);
    fillField('email', setEmail)
      .then(() => fillField('password', setPassword))
      .then(() => handleSubmit(demoUser));
  };

  const fillField = (fieldName, setCallback) => {
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
  };

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
          
          <DemoButton startDemo={startDemo} formType={formType} />
          
          <div className="horizontal-text">or</div>
          
          <input type="text"
                value={email}
                placeholder="Email"
                id="email-input"
                onChange={event => setEmail(event.currentTarget.value)} />
          {errors.email ? 
            errors.email.map(error => {
              <span className="errors" key={error}>{error}</span>
            }) : null
          }
          <input type="password"
                value={password}
                placeholder="Password"
                id="password-input"
                onChange={event => setPassword(event.currentTarget.value)} />
          {errors.password ?
            errors.password.map(error => {
              <span className="errors" key={error}>{error}</span>
            }) : null
          }
          <button className="session-form-submit">
            Continue
          </button>
          <SwitchSession formType={formType} />
        </form>
      </div>
    </div>
  )
}

export default SessionForm;
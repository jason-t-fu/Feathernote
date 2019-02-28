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
      debugger;
      handleSubmit();
    }
  }, []);

  let linkToOtherForm;
  if (props.formType === "signup") {
    linkToOtherForm =
      <>
        <label name="link-to">Already have an account?</label>
        <Link name="link-to" to="/login">Log In</Link>
      </>
  }
  else {
    linkToOtherForm =
      <>
        <label name="link-to">Don't have an account?</label>
        <Link name="link-to" to="/signup">Sign Up</Link>
      </>
  }
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

  function handleSubmit(){
    const user = {email, password};
    props.action(user);
  }

  return (
    <div className="form-wrapper">
      <div className="form-frame">
        <div className="form-header">
          <img className="feathernote-logo" src={window.images.logo} />
          <div className="feathernote-title">Feathernote</div>
          <div className="feathernote-tagline">Remember everything important.</div>
        </div>

        <form className={`session-form`}>
          <Link to={{ pathname: "/login", state: true }} 
                      className="demo-form-submit">
            Demo Login
          </Link>
          
          <div className="horizontal-text">or</div>
          
          <input type="text"
                value={email}
                placeholder="Email"
                id="email-input"
                onChange={event => setEmail(event.target.value)} />
          {emailErrors}
          <input type="password"
                placeholder="Password"
                id="password-input"
                onChange={event => setPassword(event.target.value)} />
          {credentialErrors}
          <button className="session-form-submit" onClick={handleSubmit} >
            Continue
          </button>
          <div className="link-to">{linkToOtherForm}</div>
        </form>
      </div>
    </div>
  )
}

export default SessionForm;
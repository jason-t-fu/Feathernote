import React from 'react';
import { Link } from 'react-router-dom';

const SwitchSession = ({ formType }) => {

  if (formType === "login") {
    return (
      <div className="link-to">
        <label name="link-to">Don't have an account?</label>
        <Link name="link-to" to="/signup">Sign Up</Link>
      </div>
    );
  }
  else {
    return (
      <div className="link-to">
          <label name="link-to">Already have an account?</label>
        <Link name="link-to" to="/login">Log In</Link>
      </div>
    )
  }
}

export default SwitchSession;
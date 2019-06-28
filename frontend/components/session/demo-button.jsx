import React from 'react';
import { Link } from 'react-router-dom';

const DemoButton = ({ formType, startDemo }) => {

  return (
    formType === "signup" ? 
      <Link className="demo-form-submit"
        to={{ pathname: "/login", state: true }} 
      >
        Demo Login
      </Link>
      :
      <button type="button"
        id="demo"
        className="demo-form-submit"
        onClick={startDemo}
      >
        Demo Login
      </button>
  )
};

export default DemoButton;
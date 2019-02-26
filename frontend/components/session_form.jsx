import React, { useState, useEffect } from 'react';


const SessionForm = props => {
  const [email, setEmail] = useState(props.user.email);
  const [password, setPassword] = useState(props.user.password);

  useEffect(() => {
    setPassword("");
  }, []);

  const formType = props.formType === "signup" ? "Sign Up" : "Log In";

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
        <input type="password"
               placeholder="Password"
               onChange={event => setPassword(event.target.value)} />
        <button>{formType}</button>
      </form>
    </div>
  )
}

export default SessionForm;
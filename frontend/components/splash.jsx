import React from 'react';

const Splash = props => {

  return(
    <div>I'm the splash!
      <button onClick={() => props.logout()}>Placeholder Logout</button>
    </div>

  );
};

export default Splash;
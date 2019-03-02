import React from 'react';
import { Link } from 'react-router-dom';

const Splash = props => {

  const header = () => {

    return (
      <header className="splash-header-container">
        <header className="splash-header limit-width">
          <Link to="/">
            <div className="splash-header-logo">
              <img className="splash-header-img" src={window.images.logo} />
              <div className="splash-header-title">Feathernote</div>
            </div>
          </Link>

          <nav className="splash-header-nav">
            <ul>
              <li>Plans</li>
              <li>Features</li>
              <li>Help & Learning</li>
              <li>About Us</li>
            </ul>
          </nav>

          <nav className="splash-header-session">
            <ul>
              <li><Link className="signup-link"
                        to="/signup">Sign up</Link></li>
              <li><Link className="login-link"
                        to="/login">Log in</Link></li>
              <li><Link className="login-link"
                        to={{ pathname: "/login", state: true }}>
                        Demo Login</Link></li>
            </ul>
          </nav>

        </header>
      </header>
    )
  }

  const main = () => {

    return (
      <main className="splash-main">
        <div className="full-width-hero">
          <div className="hero limit-width">
            <div className="content">
              <h1>Feel organized without the effort</h1>
              <div className="description">
                Evernote helps you capture and prioritize ideas, 
                projects, and to-do lists, 
                so nothing falls through the cracks.
              </div>
              <Link to="/signup" >Sign up for free</Link>
            </div>
            <div className="hero-image">
              <img src={window.images.hero} />
            </div>
          </div>
        </div>
        <div className="full-width-cards">
          <div className="info-cards limit-width">
            <img className="focus-icon" src={window.images.focus} />
            <h2>Focus on what matters most</h2>
            <div className="cards">
              <div>
                Manage everything from big projects to personal moments.
                </div>
              <div>
                Capture ideas and inspiration in notes, voice, and pictures.
                </div>
              <div>
                Never lose track of your tasks and deadlines.
                </div>
            </div>
          </div>
        </div>
      </main>
    ) 
  }

  const footer = () => {

    return (
      <footer className="splash-footer limit-width">
        <div className="splash-footer-logo bottom-logo">
          <img className="splash-footer-img" src={window.images.logo} />
          <div className="splash-footer-title">Feathernote</div>
        </div>
        <nav className="splash-footer-info">
          <ul className="footer-info-links">
            <li><a href="https://github.com/jason-t-fu">
              <i className="fab fa-3x fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/fujasont">
              <i className="fab fa-3x fa-linkedin-in"></i></a></li>
            <li><a href="#">
              <i className="fas fa-3x fa-at"></i></a></li>
          </ul>
          <ul className="footer-session-links">
            <li><Link className="signup-link"
                      to="/signup">Sign up</Link></li>
            <li><Link className="login-link"
                      to="/login">Log in</Link></li>
            <li><Link className="login-link"
                      to={{ pathname: "/login", state: true }}>
                      Demo Login</Link></li>
          </ul>
        </nav>
      </footer>
    )
  }

  return(
    <div className="splash-container">
      {header()}
      {main()}
      {footer()}
    </div>

  );
};

export default Splash;
import React from 'react';
import { Link } from 'react-router-dom';

const Splash = props => {

  const header = () => {

    return (
      <header className="splash-header-container">
        <header className="splash-header limit-width">
          <div className="splash-header-logo">
            <img className="splash-header-img" src={window.images.logo} />
            <div className="splash-header-title">Feathernote</div>
          </div>

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
              <Link to="/signup"><li>Sign up</li></Link>
              <li>or</li>
              <Link to="/login"><li>Log in</li></Link>
            </ul>
          </nav>

        </header>
      </header>
    )
  }

  const main = () => {

    return (
      <main className="splash-main">
        <div className="full-width">
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

        <nav className="footer-nav">
          <div className="nav-section">
            <div className="nav-section-header">
              Product
            </div>
            <ul>
              <li>Why Evernote</li>
              <li>Evernote Basic</li>
              <li>Everote Premium</li>
              <li>Evernote Business</li>
              <li>Compare Plans</li>
              <li>Student Discount</li>
              <li>Download App</li>
            </ul>
          </div>
          <div className="nav-section">
            <div className="nav-section-header">
              Features
            </div>
            <ul>
              <li>Web Clipper</li>
              <li>Template</li>
              <li>Spaces</li>
              <li>Integrations</li>
              <li>Notes Sync</li>
              <li>PDF & Doc Search</li>
              <li>Search Handwriting</li>
              <li>Document Scanning</li>
              <li>Notebooks & Tags</li>
            </ul>
          </div>
          <div className="nav-section">
            <div className="nav-section-header">
              Community
            </div>
            <ul>
              <li>Our Community</li>
              <li>Certified Consultants</li>
              <li>Developers</li>
              <li>Events</li>
              <li>Forum</li>
            </ul>
          </div>
          <div className="nav-section">
            <div className="nav-section-header">
              Support
            </div>
            <ul>
              <li>Help & Learning</li>
              <li>Troubleshooting</li>
              <li>Blong</li>
            </ul>
          </div>
          <div className="nav-section">
            <div className="nav-section-header">
              Company
            </div>
            <ul>
              <li>About Us</li>
              <li>Press</li>
              <li>Careers</li>
              <li>Inclusion & Diversity</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="nav-section">
            <div className="footer-signup-login">
              <ul>
                <Link to="/signup"><li>Sign up</li></Link>
                <li>or</li>
                <Link to="/login"><li>Log in</li></Link>
                <Link to={{pathname: "/login", state: true}} >
                  <li>Demo</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="footer-info">
          <ul>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Email</li>
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
      <button onClick={() => props.logout()}>Placeholder Logout</button>
    </div>

  );
};

export default Splash;
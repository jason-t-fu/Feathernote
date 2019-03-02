import React from 'react';

const NotesNavbar = () => {

  return (
    <nav className="notes-navbar">
      <div className="notes-navbar-inner">
        <img src={window.images.logo_gray} />
      </div>
      <div className="notes-navbar-inner">
        <div className="new-note icon-container">
          <i className="fas fa-plus"></i>
        </div>
      </div>
      <div className="notes-navbar-inner">
        <div className="index icon-container">
          <i className="fas fa-file-alt"></i>
        </div>
        <div className="index icon-container">
          <i className="fas fa-book"></i>
        </div>
        <div className="index icon-container">
          <i className="fas fa-tag"></i>
        </div>
      </div>
      <div className="notes-navbar-inner">
        <div className="profile icon-container">
          <i className="fas fa-user"></i>
        </div>
      </div>
    </nav>
  )
};

export default NotesNavbar;
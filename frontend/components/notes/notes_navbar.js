import React from 'react';

const NotesNavbar = ({ logout, push }) => {

  return (
    <nav className="notes-navbar">
      <div className="notes-navbar-inner">
        <img src={window.images.logo_gray} />
      </div>
      <div className="notes-navbar-inner tooltip">
        <div className="new-note icon-container" 
             onClick={() => push('/notes/new')}>
          <i className="fas fa-plus"></i>
        </div>
        <div class="right">
            <p>New Note</p>
            <i></i>
          </div>
      </div>
      <div className="notes-navbar-inner tooltip">
        <div className="index icon-container"
             onClick={() => push('/notes')}>
          <i className="fas fa-file-alt"></i>
        </div>
        <div class="right">
          <p>New Note</p>
          <i></i>
        </div>
        <div className="index icon-container">
          <i className="fas fa-book"></i>
        </div>
        <div className="index icon-container">
          <i className="fas fa-tag"></i>
        </div>
      </div>
      <div className="notes-navbar-inner">
        <div className="profile icon-container"
             onClick={logout}>
          <i className="fas fa-user"></i>
        </div>
      </div>
    </nav>
  )
};

export default NotesNavbar;
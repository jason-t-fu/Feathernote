import React from 'react';

const NotesNavbar = ({ push, logout, numNotes }) => {

  const pushToValidLocation = () => {
    if (numNotes === 0) {
      push('/notes/new');
    }
  };

  return (
    <nav className="notes-navbar">

      <div className="notes-navbar-inner">
        <img src={window.images.logo_gray} />
      </div>

      <div className="notes-navbar-inner">

        <div className="new-note icon-container" onClick={() => push('/notes/new')}>
          <div className="tooltip">

            <i className="fas fa-plus"></i>
            <div className="right">
              <p>New Note</p>
              <i></i>
            </div>

          </div>
        </div>
      </div>

      <div className="notes-navbar-inner">

        <div className="index icon-container" onClick={pushToValidLocation}>
          <div className="tooltip">
            <i className="fas fa-file-alt"></i>
            <div className="right">
              <p>Notes</p>
              <i></i>
            </div>
          </div>
        </div>

        <div className="index icon-container">
          <div className="tooltip">
            <i className="fas fa-book"></i>
            <div className="right">
              <p>Notebooks</p>
              <i></i>
            </div>
          </div>
        </div>

        <div className="index icon-container">
          <div className="tooltip">
            <i className="fas fa-tag"></i>
            <div className="right">
              <p>Tags</p>
              <i></i>
            </div>
          </div>
        </div>

      </div>

      <div className="notes-navbar-inner">

        <div className="profile icon-container" onClick={logout}>
          <div className="tooltip">
            <i className="fas fa-user"></i>
            <div className="right">
              <p>Logout</p>
              <i></i>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
};

export default NotesNavbar;
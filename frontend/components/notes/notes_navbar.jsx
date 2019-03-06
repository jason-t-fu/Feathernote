import React from 'react';

const NotesNavbar = ({ makeNote, receiveNote, logout, numNotes }) => {

  const ensureValidLocation = () => {
    if (numNotes === 0) {
      makeNote();
    }
  };

  return (
    <nav className="notes-navbar">

      <div className="notes-navbar-inner">
        <img src={window.images.logo_gray} />
      </div>

      <div className="notes-navbar-inner">

        <div className="new-note icon-container" onClick={() => makeNote()}>
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

        <div className="index icon-container" onClick={ensureValidLocation}>
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
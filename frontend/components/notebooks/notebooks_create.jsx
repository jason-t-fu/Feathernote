import React from 'react';

const NotebooksCreate = props => {

  const handleSubmit = (event) => {
    
    event.preventDefault();
  };

  return (
    <div className="create-form">
      <i className="fas fa-book"></i>
      <h1 className="create-form-title">Create Notebook</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <div className="create-form-buttons">
          <button type="button"></button>
          <button type="submit"></button>
        </div>
      </form>
    </div>
  )
};

export default NotebooksCreate;
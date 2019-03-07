import React, { useState } from 'react';

const NotebooksCreate = ({ notebook, 
                           errors, 
                           ownerId, 
                           createNotebook,
                           closeModal,
                           makeNote }) => {
  const [title, setTitle] = useState(notebook.title);

  const handleSubmit = (event) => {
    createNotebook({ title, ownerId });
    closeModal();
    makeNote();
    event.preventDefault();
  };

  return (
    <div className="create-form">
      <i className="fas fa-book"></i>
      <h1 className="create-form-title">Create Notebook</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
               value={title}
               onChange={(e) => setTitle(e.currentTarget.value)} />
        {errors}
        <div className="create-form-buttons">
          <button type="button">Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
};

export default NotebooksCreate;
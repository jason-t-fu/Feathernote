import React, { useState, useEffect } from 'react';

const NotebooksCreate = ({ notebook, 
                           errors, 
                           ownerId, 
                           createNotebook,
                           closeModal,
                           makeNote }) => {

  const [title, setTitle] = useState(notebook.title);

  useEffect(() => {
    const createButton = document.getElementsByClassName('create-notebook')[0];
    if (title === "") {
      createButton.disabled = true;
      createButton.classList.add('invalid');
    }
    else {
      createButton.disabled = false;
      createButton.classList.remove('invalid');
    }
  });

  const handleSubmit = (event) => {
    createNotebook({ title, ownerId }).then(
      () => makeNote()
    );
    closeModal();
    event.preventDefault();
  };

  return (
    <div className="notebook-create">
      <i className="fas fa-book"></i>
      <h1 className="create-notebook-title">Create Notebook</h1>
      <div className="horizontal-text"></div>
      <form className="create-form" onSubmit={handleSubmit}>
        <input className="create-form-input"
               type="text"
               value={title}
               onChange={(e) => setTitle(e.currentTarget.value)}
               placeholder="Title your notebook"
               autoFocus={true} />
        {errors}
        <div className="create-form-buttons">
          <button className="cancel" type="button">Cancel</button>
          <button className="create-notebook" type="submit">Create notebook</button>
        </div>
      </form>
    </div>
  )
};

export default NotebooksCreate;
import React from 'react';

const NotebooksIndexItem = props => {

  const handleDelete = (e) => {
    e.stopPropagation();
    props.deleteNotebook(props.notebook.id).then(
      () => props.receiveAllNotes()
    );
  };

  const displayNotebook = () => {
    props.receiveNotebook(props.notebook.id);
  };

  return (
    <div className="notebooks-index-item-container"
      onClick={displayNotebook}>
      <div className="notebooks-index-item">
        <div className="notebooks-index-row">
          <div className="notebooks-index-item-title">{props.notebook.title}</div>
          <i className="far fa-trash-alt"
            onClick={handleDelete}></i>
        </div>
        <div className="notebooks-index-item-count">
          {`${props.notesCount} notes`}
        </div>
      </div>
    </div>
  );
};

export default NotebooksIndexItem;
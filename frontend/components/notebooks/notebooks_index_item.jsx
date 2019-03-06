import React from 'react';

const NotebooksIndexItem = props => {

  const handleDelete = (e) => {
    e.stopPropagation();
    props.deleteNotebook(props.notebook.id).then(
      () => props.push('/notes')
    );
  };

  const displayNotebook = () => {
    props.push(`/notebooks/${props.notebook.id}`);
  };

  return (
    <div className="notes-index-item-container"
      onClick={displayNotebook}>
      <div className="notes-index-item">
        <div className="notes-index-row">
          <div className="notes-index-item-title">{props.note.title}</div>
          <i className="far fa-trash-alt"
            onClick={handleDelete}></i>
        </div>
        <div className="notes-index-item-date">{lastUpdated}</div>
        <div className="notes-index-item-body">{bodySnippet}</div>
      </div>
    </div>
  );
};

export default NotebooksIndexItem;
import React from 'react';
import timeSince from './timeSince';

const NotesIndexItem = props => {

  const lastUpdated = timeSince(props.note.updatedAt);
  const bodySnippet = props.note.body.slice(0, 137);

  return (
    <aside className="notes-index-item-container">
      <div className="notes-index-item">
        <div className="notes-index-row">
          <div className="notes-index-item-title">{props.note.title}</div>
          <i className="far fa-trash-alt"></i>
        </div>
        <div className="notes-index-item-date">{lastUpdated}</div>
        <div className="notes-index-item-body">{bodySnippet}</div>
      </div>
    </aside>
  );
};

export default NotesIndexItem;
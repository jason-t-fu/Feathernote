import React from 'react';
import timeSince from './timeSince';

const NotesIndexItem = props => {

  const parseBodyToText = () => {
    let text = "";
    const bodyObject = JSON.parse(props.note.body);
    
    bodyObject.forEach( entry => {
      text = text.concat(entry.insert);
    });

    return text;
  };

  const displayNote = () => {
    props.push(`/notes/${props.note.id}`);
  };

  const lastUpdated = timeSince(props.note.updatedAt);
  const bodySnippet = parseBodyToText().slice(0, 137);

  return (
    <div className="notes-index-item-container"
         onClick={displayNote}>
      <div className="notes-index-item">
        <div className="notes-index-row">
          <div className="notes-index-item-title">{props.note.title}</div>
          <i className="far fa-trash-alt"></i>
        </div>
        <div className="notes-index-item-date">{lastUpdated}</div>
        <div className="notes-index-item-body">{bodySnippet}</div>
      </div>
    </div>
  );
};

export default NotesIndexItem;
import React from 'react';
import timeSince from './timeSince';

const NotesIndexItem = props => {
  const parseBodyToText = () => {
    let text = "";
    const bodyObject = JSON.parse(props.note.body);

    for (let i = 0; i < bodyObject.ops.length; i++) {
      let insert = bodyObject.ops[i].insert;
      if (typeof insert === 'object') {
        continue;
      }
      else {
        text = text.concat(insert);
      }
    }

    return text;
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    props.deleteNote(props.note.id).then(
      () => {
        if (props.notes.length === 1) {
          props.makeNote();
        }
        else {
          let deletedNoteIndex = props.notes.findIndex(
            note => note.id === props.note.id
          );
          if (props.notes[deletedNoteIndex - 1]) {
            props.receiveNote(props.notes[deletedNoteIndex - 1]);
          }
          else {
            props.receiveNote(props.notes[deletedNoteIndex + 1]);
          }
        }
      }
    );
  };

  const displayNote = () => {
    props.receiveNote(props.note);
  };

  const lastUpdated = timeSince(props.note.updatedAt);
  const bodySnippet = parseBodyToText().slice(0, 140);

  return (
    <div className={`notes-index-item-container ${
                    props.activeNoteId === props.note.id ?
                    'selected-note' : ''}`}
         onClick={displayNote} >
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

export default NotesIndexItem;
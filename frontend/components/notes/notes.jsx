import React, { useEffect } from 'react';
import NotesNavbar from './notes_navbar';
import ActiveNote from './active_note';
import NotesIndexContainer from './notes_index_container';

const Notes = props => {
  useEffect(() => {
    props.fetchAllNotebooks().then(
      resNotebooks => props.fetchAllNotes().then(
        res => {
          const notesKeys = Object.keys(res.notes);
          const postId = notesKeys[notesKeys.length - 1];
          if (postId) {
            debugger;
            props.receiveNote(res.notes[postId]);
          }
          else {
            props.makeNote();
          }
        }
      )
    );

  }, []);

  if (props.loading) {
    return (<div className="loading"></div>);
  }

  return (
    <main className="notes">
      <NotesNavbar logout={props.logout}
        makeNote={props.makeNote}
        receiveNote={props.receiveNote}
        numNotes={props.notes.length} />

      <NotesIndexContainer notes={props.notes} />
      <ActiveNote />
    </main>
  )
};


export default Notes;
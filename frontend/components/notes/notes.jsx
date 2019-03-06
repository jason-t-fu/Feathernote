import React, { useEffect } from 'react';
import NotesNavbarContainer from './notes_navbar_container';
import ActiveNote from './active_note';
import NotesIndexContainer from './notes_index_container';
import Modal from '../modal/modal';

const Notes = props => {
  useEffect(() => {
    props.fetchAllNotebooks().then(
      resNotebooks => props.fetchAllNotes().then(
        res => {
          const notesKeys = Object.keys(res.notes);
          const postId = notesKeys[notesKeys.length - 1];
          if (postId) {
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
      <NotesNavbarContainer />
      <Modal />
      {/* Threading in notes as a prop here since it's already sorted*/}
      <NotesIndexContainer notes={props.notes} />
      <ActiveNote />
    </main>
  )
};


export default Notes;
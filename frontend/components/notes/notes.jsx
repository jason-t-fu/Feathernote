import React, { useEffect } from 'react';
import NotesNavbarContainer from './notes_navbar_container';
import ActiveNote from './active_note';
import NotesIndexContainer from './notes_index_container';
import Modal from '../modal/modal';
import ReactLoading from 'react-loading';

const Notes = props => {
  useEffect(() => {
    props.fetchAllNotebooks().then(
      resNotebooks => props.fetchAllNotes().then(
        res => {
          debugger;
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
    return (
      <div className="loading-icon-wrapper">
        <ReactLoading className="loading-icon"
                      type="bubbles"
                      color="#58d177"
                      height={"10%"}
                      width={"10%"} />
      </div>
    );
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
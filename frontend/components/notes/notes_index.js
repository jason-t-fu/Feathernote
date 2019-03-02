import React, { useEffect } from 'react';
import NotesIndexItem from './notes_index_item';
import { Route } from 'react-router-dom';
import NotesNavbar from './notes_navbar';
import NotesDetail from './notes_detail';

const NotesIndex = props => {

  useEffect(() => {
    props.fetchAllNotes().then(
      res => {
        const notes = Object.keys(res.notes);
        const postId = notes[notes.length - 1];
        props.history.push(`/notes/${postId}`);
      }
    );

    
  }, []);

  return (
    <main className="notes">
      <NotesNavbar logout={props.logout}/>
   
      <aside className="notes-index">
        <div className="notes-header">
          <h3 className="notes-title">Notes</h3>
          <div className="notes-header-row">
            <div className="notes-count">{Object.keys(props.notes).length} notes</div>
            <div className="sort-by">Options<i className="fas fa-caret-down"></i></div>
          </div>
        </div>
        <ul className="notes-list">
          {props.notes.map(note => <NotesIndexItem key={note.id} note={note}/>)}
        </ul>
      </aside>
      <Route
        path="/notes/:noteId"
        component={NotesDetail}
      />
    </main>
  )
};


export default NotesIndex;
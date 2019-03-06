import React, { useEffect } from 'react';
import NotesIndexItemContainer from './notes_index_item_container';
import { Switch, Route } from 'react-router-dom';
import { ValidNoteRoute } from '../../util/route_util';
import NotesNavbar from './notes_navbar';
import NotesDetailContainer from './notes_detail_container';
import NotesCreateContainer from './notes_create_container';

const NotesIndex = props => {
  useEffect(() => {
    props.fetchAllNotebooks().then(
      resNotebooks => props.fetchAllNotes().then(
        res => {
          const notes = Object.keys(res.notes);
          const postId = notes[notes.length - 1];
          if (postId) {
            props.history.push(`/notes/${postId}`);
          }
          else {
            props.history.push('/notes/new');
          }
        }
      )
    );
    
  }, []);

  if (props.loading){
    return (<div className="loading"></div>);
  }

  return (
    <main className="notes">
      <NotesNavbar logout={props.logout} 
                   push={props.history.push}
                   numNotes={props.notes.length} />
   
      <aside className="notes-index">
        <div className="notes-header">
          <h3 className="notes-title">Notes</h3>
          <div className="notes-header-row">
            <div className="notes-count">{Object.keys(props.notes).length} notes</div>
            <div className="sort-by">Options<i className="fas fa-caret-down"></i></div>
          </div>
        </div>
        <ul className="notes-list">
          {props.notes.map(note => {
              return <NotesIndexItemContainer key={note.id} 
                                     note={note}
                                     notes={props.notes}
                                     push={props.history.push} />
            }
          )}
        </ul>
      </aside>
      <Switch>
        <Route exact path="/notes/new" component={NotesCreateContainer} />
        <ValidNoteRoute path="/notes/:noteId" component={NotesDetailContainer} />
      </Switch>
    </main>
  )
};


export default NotesIndex;
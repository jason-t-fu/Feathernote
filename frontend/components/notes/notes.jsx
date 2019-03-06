import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ValidNoteRoute } from '../../util/route_util';
import NotesNavbar from './notes_navbar';
import NotesDetailContainer from './notes_detail_container';
import NotesCreateContainer from './notes_create_container';
import NotesIndex from './notes_index';

const Notes = props => {
  useEffect(() => {
    props.fetchAllNotebooks().then(
      resNotebooks => props.fetchAllNotes().then(
        res => {
          const notes = Object.keys(res.notes);
          const postId = notes[notes.length - 1];
          if (postId) {
            props.history.push(`/${postId}`);
          }
          else {
            props.history.push('/new');
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
        push={props.history.push}
        numNotes={props.notes.length} />

      <NotesIndex notes={props.notes} push={props.history.push}/>
      <Switch>
        <Route exact path="/new" component={NotesCreateContainer} />
        <ValidNoteRoute path="/:noteId" component={NotesDetailContainer} />
      </Switch>
    </main>
  )
};


export default Notes;
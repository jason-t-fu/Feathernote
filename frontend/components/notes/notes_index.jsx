import React from 'react';
import NotesIndexItemContainer from './notes_index_item_container';
import NotesIndexHeaderContainer from './notes_index_header_container';

const NotesIndex = props => {
  return (
    <aside className="notes-index">
      <NotesIndexHeaderContainer notes={props.notes} />
      <ul className="notes-list">
        {props.notes.map(note => {
            return <NotesIndexItemContainer key={note.id} 
                                    note={note}
                                     />
          }
        )}
      </ul>
    </aside>
  )
};


export default NotesIndex;
import React from 'react';
import NotesIndexItemContainer from './notes_index_item_container';


const NotesIndex = props => {
  return (
    <aside className="notes-index">
      <div className="notes-index-header">
        <h3 className="notes-title">Notes</h3>
        <div className="notes-index-header-row">
          <div className="notes-count">{Object.keys(props.notes).length} notes</div>
          <div className="sort-by">Options<i className="fas fa-caret-down"></i></div>
        </div>
      </div>
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
import React, { useState } from 'react';
import NotesIndexItemContainer from './notes_index_item_container';
import NotesIndexHeaderContainer from './notes_index_header_container';

const NotesIndex = props => {
  const [search, setSearch] = useState("");

  const searchFilter = (notes) => {
    return notes.filter( note => {
      return note.title.toLocaleLowerCase()
             .startsWith(search.toLocaleLowerCase());
    });
  };

  const headerTitle = () => {
    if (props.activeNotebook) {
      return `Notebook: ${props.activeNotebook.title}`;
    }
    // else if (props.active.activeTag) {
    //  return `Tag: ${tags[props.active.activeTagId].name}`;
    // }
    else {
      return "Notes";
    }
  };

  return (
    <aside className="notes-index">
      
      <div className="notes-index-header">
        <h3 className="notes-title">{headerTitle()}</h3>
        <form>
          <input className="notes-search-bar"
            type="text"
            placeholder="Find a note"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)} />
        </form>
        <div className="notes-count">{searchFilter(props.notes).length} notes</div>
      </div>

      <ul className="notes-list">
        {searchFilter(props.notes).map(note => {
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
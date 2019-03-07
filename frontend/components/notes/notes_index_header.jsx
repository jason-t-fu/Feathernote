import React from 'react';

const NotesIndexHeader = props => {

  const headerTitle = () => {
    if (props.activeNotebookId) {
      return `Notebook: ${props.notebooks[props.activeNotebookId].title}`;
    }
    // else if (props.active.activeTagId) {
    //  return `Tag: ${tags[props.active.activeTagId].name}`;
    // }
    else {
      return "Notes";
    }
  };

  return (
    <div className="notes-index-header">
      <h3 className="notes-title">{headerTitle()}</h3>
      <div className="notes-index-header-row">
        <div className="notes-count">{Object.keys(props.notes).length} notes</div>
        {/* <div className="sort-by">Options<i className="fas fa-caret-down"></i></div> */}
      </div>
    </div>
  )
};

export default NotesIndexHeader
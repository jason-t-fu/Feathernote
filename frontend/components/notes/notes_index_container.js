import { connect } from 'react-redux';
import NotesIndex from './notes_index';

/*
  Notes are passed down through the NotesIndexContainer invoker in notes.jsx.
  If neither notebooks nor tags are active, NotesIndex will render all notes.
  If notebooks are active, filterNotes will filter notes that have the active notebook id.
  If tags are active, same for tag id.
  Reducers will ensure that only activeNotebook or activeTag is non-null at a 
  single point in time.
*/

const filterNotes = (active, ownProps) => {
  if (active.activeNotebookId) {
    return ownProps.notes.filter(note => {
      return note.notebookId === active.activeNotebookId;
    });
  }
  // else if (active.activeTagId) {
  //   return ownProps.notes.filter(note => {
  //     return note.tagId === active.activeTagId;
  //   });  
  // }
  else {
    return ownProps.notes;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    notes: filterNotes(state.active, ownProps),
    activeNotebook: state.entities.notebooks[state.active.activeNotebookId],
    // activeTag: state.entities.tags[state.active.activeTag]
  };
};

export default connect(mapStateToProps, null)(NotesIndex);
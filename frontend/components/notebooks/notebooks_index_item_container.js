import { connect } from 'react-redux';
import NotebooksIndexItem from './notebooks_index_item';
import { deleteNotebook, receiveNotebook, updateNotebook } from '../../actions/notebooks_actions';
import { receiveAllNotes, receiveNote, makeNote } from '../../actions/notes_actions';
import { closeModal } from '../../actions/modal_action';

const filterAndSortNotesInNotebook = (allNotes, notebookId) => {
  return allNotes.filter( note => {
    return note.notebookId === notebookId;
  }).sort(
    (a, b) => (Date.parse(b.updatedAt) - Date.parse(a.updatedAt))
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    notes: filterAndSortNotesInNotebook(Object.values(state.entities.notes), 
                                 ownProps.notebook.id),
    activeNotebookId: state.active.activeNotebookId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId)),
    receiveNotebook: notebookId => dispatch(receiveNotebook(notebookId)),
    updateNotebook: notebook => dispatch(updateNotebook(notebook)),
    receiveAllNotes: () => dispatch(receiveAllNotes()),
    receiveNote: (note) => dispatch(receiveNote(note)),
    makeNote: () => dispatch(makeNote()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksIndexItem);
import { connect } from 'react-redux';
import NotebooksIndexItem from './notebooks_index_item';
import { deleteNotebook, receiveNotebook, updateNotebook } from '../../actions/notebooks_actions';
import { receiveAllNotes, receiveNote, makeNote } from '../../actions/notes_actions';
import { closeModal } from '../../actions/modal_actions';
import { filterAndSortNotesInNotebook } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    notes: filterAndSortNotesInNotebook(state, ownProps.notebook.id),
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
import { connect } from 'react-redux';
import NotebooksIndexItem from './notebooks_index_item';
import { deleteNotebook } from '../../actions/notebooks_actions';
import { receiveAllNotes } from '../../actions/notes_actions';

const filterNotesInNotebook = (allNotes, notebookId) => {
  const filteredNotes = allNotes.filter( note => {
    return note.notebookId === notebookId;
  });

  return filteredNotes.length;
};

const mapStateToProps = (state, ownProps) => {
  return {
    notesCount: filterNotesInNotebook(Object.values(state.entities.notes), 
                                      ownProps.notebook.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId)),
    receiveNotebook: notebookId => dispatch(receiveNotebook(notebookId)),
    receiveAllNotes: () => dispatch(receiveAllNotes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksIndexItem);
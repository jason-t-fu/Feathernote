import { connect } from 'react-redux';
import NotesIndexHeader from './notes_index_header';

const mapStateToProps = state => {
  return {
    activeNotebookId: state.active.activeNotebookId,
    notebooks: state.entities.notebooks
  };
};

export default connect(mapStateToProps, null)(NotesIndexHeader);
import { connect } from 'react-redux';
import NotesIndexHeader from './notes_index_header';

const mapStateToProps = state => {
  return {
    activeNotebookId: state.active.activeNotebookId,
    notebooks: state.entities.notebooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndexHeader);
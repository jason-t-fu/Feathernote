import { connect } from 'react-redux';
import NotesIndexItem from './notes_index_item';
import { deleteNote } from '../../actions/notes_actions';

const mapDispatchToProps = dispatch => {
  return {
    deleteNote: noteId => dispatch(deleteNote(noteId))
  };
};

export default connect(null, mapDispatchToProps)(NotesIndexItem);
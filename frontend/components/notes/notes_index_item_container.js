import { connect } from 'react-redux';
import NotesIndexItem from './notes_index_item';
import { deleteNote, makeNote, receiveNote } from '../../actions/notes_actions';

const mapStateToProps = state => {
  return {
    activeNoteId: state.active.activeNoteId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteNote: noteId => dispatch(deleteNote(noteId)),
    makeNote: () => dispatch(makeNote()),
    receiveNote: note => dispatch(receiveNote(note))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndexItem);
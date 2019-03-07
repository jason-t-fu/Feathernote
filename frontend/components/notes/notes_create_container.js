import { connect } from 'react-redux';
import NotesCreate from './notes_create';
import { createNote } from '../../actions/notes_actions';

const _nullNote = {
  title: '',
  body: '{"ops":[{"insert":"\\n"}]}'
};

const mapStateToProps = (state, ownProps) => {
  return {
    note: _nullNote,
    errors: state.errors.notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNote: note => dispatch(createNote(note)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesCreate);
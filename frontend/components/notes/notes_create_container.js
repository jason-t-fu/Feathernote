import { connect } from 'react-redux';
import NotesCreate from './notes_create';
import { createNote } from '../../actions/notes_actions';
import { selectAllNotebooks } from '../../reducers/selectors';

const _nullNote = {
  title: '',
  body: '{"ops":[{"insert":"\\n"}]}'
};

const mapStateToProps = (state, ownProps) => {
  return {
    note: _nullNote,
    errors: state.errors.notes,
    activeNotebookId: state.active.activeNotebookId,
    notebooks: selectAllNotebooks(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNote: note => dispatch(createNote(note)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesCreate);
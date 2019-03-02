import { connect } from 'react-redux';
import { fetchAllNotes } from '../../actions/notes_actions';
import NotesIndex from './notes_index';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    notes: Object.values(state.entities.notes)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllNotes: () => dispatch(fetchAllNotes()),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
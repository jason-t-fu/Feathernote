import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllNotes } from '../../actions/notes_actions';
import NotesIndex from './notes_index';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    notes: Object.values(state.entities.notes),
    loading: state.ui.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllNotes: () => dispatch(fetchAllNotes()),
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotesIndex));
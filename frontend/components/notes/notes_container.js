import { connect } from 'react-redux';
import { fetchAllNotes, makeNote, receiveNote } from '../../actions/notes_actions';
import { fetchAllNotebooks } from '../../actions/notebooks_actions';
import Notes from './notes';
import { logout } from '../../actions/session_actions';
import { sortAllNotes } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    notes: sortAllNotes(state),
    loading: state.ui.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
    fetchAllNotes: () => dispatch(fetchAllNotes()),
    logout: () => dispatch(logout()),
    makeNote: () => dispatch(makeNote()),
    receiveNote: note => dispatch(receiveNote(note))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
import { connect } from 'react-redux';
import { fetchAllNotes } from '../../actions/notes_actions';
import NotesIndex from './notes_index';

const mapStateToProps = state => {
  return {
    notes: Object.values(state.entities.notes)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllNotes: () => dispatch(fetchAllNotes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
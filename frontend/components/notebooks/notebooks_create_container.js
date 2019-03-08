import { connect } from 'react-redux';
import NotebooksCreate from './notebooks_create';
import { createNotebook } from '../../actions/notebooks_actions';
import { closeModal } from '../../actions/modal_actions';
import { makeNote } from '../../actions/notes_actions';

const _nullNotebook = {
  title: ''
};

const mapStateToProps = (state, ownProps) => {
  return {
    notebook: _nullNotebook,
    errors: state.errors.notebooks,
    ownerId: state.session.currentUserId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNotebook: notebook => dispatch(createNotebook(notebook)),
    closeModal: () => dispatch(closeModal()),
    makeNote: () => dispatch(makeNote())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksCreate);
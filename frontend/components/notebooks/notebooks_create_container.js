import { connect } from 'react-redux';
import NotebooksCreate from './notebooks_create';
import { createNotebook } from '../../actions/notebooks_actions';

const _nullNotebook = {
  title: ''
};

const mapStateToProps = (state, ownProps) => {
  return {
    notebook: _nullNotebook,
    errors: state.errors.notebooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNotebook: notebook => dispatch(createNotebook(notebook)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksCreate);
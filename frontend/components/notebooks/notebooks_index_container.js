import { connect } from 'react-redux';
import NotebookIndex from './notebooks_index';
import { closeModal } from '../../actions/modal_action';

const mapStateToProps = state => {
  return {
    notebooks: state.entities.notebooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex);
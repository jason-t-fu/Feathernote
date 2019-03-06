import { connect } from 'react-redux';
import NotebooksIndexItem from './notebooks_index_item';
import { deleteNotebook } from '../../actions/notebooks_actions';

const mapDispatchToProps = dispatch => {
  return {
    deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId))
  };
};

export default connect(null, mapDispatchToProps)(NotebooksIndexItem);
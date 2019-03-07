import { connect } from 'react-redux';
import NotebookSelector from './notebook_selector';
import { selectAllNotebooks } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    notebooks: selectAllNotebooks(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookSelector)
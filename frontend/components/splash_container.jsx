import { connect } from 'react-redux';
import Splash from './splash';
import { logout } from '../actions/session_actions';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Splash);
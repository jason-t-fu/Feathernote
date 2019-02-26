import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../actions/session_actions';

const mapStateToProps = state => {
  return {
    user: {
      email: "",
      password: ""
    },
    formType: "login"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
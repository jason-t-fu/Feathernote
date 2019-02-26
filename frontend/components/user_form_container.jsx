import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../actions/session_actions';

const mapStateToProps = state => {
  return {
    user: {
      email: "",
      password: ""
    },
    formType: "signup"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
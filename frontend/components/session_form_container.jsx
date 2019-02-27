import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../actions/session_actions';

const mapStateToProps = state => {
  return {
    user: {
      email: "",
      password: ""
    },
    formType: "login",
    errors: Object.values(state.errors.session)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
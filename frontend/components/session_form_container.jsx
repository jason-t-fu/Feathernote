import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: {
      email: "",
      password: ""
    },
    formType: "login",
    errors: Object.values(state.errors.session),
    demo: Boolean(ownProps.location.state)
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
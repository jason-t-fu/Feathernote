import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../actions/session_actions';

const mapStateToProps = state => {
  return {
    user: {
      email: "",
      password: ""
    },
    formType: "signup", 
    errors: Object.values(state.errors.session),
    demo: false
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
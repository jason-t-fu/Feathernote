import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';
import { selectAllSessionErrors } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    user: {
      email: "",
      password: ""
    },
    formType: "signup",
    errors: selectAllSessionErrors(state),
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
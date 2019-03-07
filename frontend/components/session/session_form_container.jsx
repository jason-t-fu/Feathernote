import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';
import { selectAllSessionErrors } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    user: {
      email: "",
      password: ""
    },
    formType: "login",
    errors: selectAllSessionErrors(state),
    demo: ownProps.location.state,
    demoLink: <button type="button"
                      id="demo"
                      className="demo-form-submit"
                      >
                Demo Login
              </button>
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
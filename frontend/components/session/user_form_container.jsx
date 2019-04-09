import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    demo: false,
    demoLink: <Link className="demo-form-submit"
                    to={{ pathname: "/login", state: true }} >
                Demo Login
              </Link>
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
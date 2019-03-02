import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    user: {
      email: "",
      password: ""
    },
    formType: (<>
                <label name="link-to">Already have an account?</label>
                <Link name="link-to" to="/login">Log In</Link>
              </>
    ),
    errors: Object.values(state.errors.session),
    demo: false,
    demoLink: <Link id="demo" 
                    className="demo-form-submit"
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
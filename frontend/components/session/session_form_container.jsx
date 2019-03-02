import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const demoUser = ownProps.location.state ? 
    (
      { email: "admin@feathernote.com", password: "password" }
    ) : (
      null
    );

  return {
    user: {
      email: "",
      password: ""
    },
    formType: (<>
                <label name="link-to">Don't have an account?</label>
                <Link name="link-to" to="/signup">Sign Up</Link>
              </>
    ),
    errors: Object.values(state.errors.session),
    demo: demoUser
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
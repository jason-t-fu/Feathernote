import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
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
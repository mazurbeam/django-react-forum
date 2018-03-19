import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from '../services/actions/auth';
import { getUserProfile } from '../services/actions/profiles';
import { authErrors, isAuthenticated } from '../services/reducers';

import Header from './Header';
import LoginForm from '../components/LoginForm';

const Login = props => {
  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Header />
      <LoginForm onSubmit={props.onSubmit} />
    </div>
  );
};

const mapStateToProps = state => ({
  errors: authErrors(state),
  isAuthenticated: isAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) => {
    dispatch(login(username, password));
    dispatch(getUserProfile(username));
    // dispatch(fetchDiscussions());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React from 'react';
import { connect } from 'react-redux';
import styled, { extend } from 'styled-components'; // eslint-disable-line

import { Container, Heading, BackgroundImage } from 'rebass'
import { Redirect } from 'react-router';
import { login } from '../services/actions/auth';
import { getUserProfile } from '../services/actions/profiles';
import { authErrors, isAuthenticated } from '../services/reducers';

import LoginForm from '../components/LoginForm';

const MyHeading = Heading.extend`
padding-top: 30%;
text-align: center;
`

const Login = props => {
  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <BackgroundImage src='https://i.imgur.com/5yeVW1I.jpg'>
        <Container bg='' color='primary'>
        <MyHeading>Login</MyHeading>
          <LoginForm onSubmit={props.onSubmit} />
        </Container>
      </BackgroundImage>
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

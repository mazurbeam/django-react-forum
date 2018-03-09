import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { login } from '../services/actions/auth'
import { authErrors, isAuthenticated } from '../services/reducers'

import Header from './Header'
import LoginForm from '../components/LoginForm'

const Login = props => {
  if (props.isAuthenticated) {
    return <Redirect to='/' />
  }
  return (
    <div>
      <Header />
      <LoginForm {...props} />
    </div>
  )
}

const mapStateToProps = state => ({
  errors: authErrors(state),
  isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) => {
    dispatch(login(username, password))
    // dispatch(fetchForumList());
    // dispatch(fetchDiscussions());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as reducers from '../services/reducers'

// import * as reducers from '../services/reducers'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)
const mapStateToProps = state => ({
  isAuthenticated: reducers.isAuthenticated(state)
})

export default connect(mapStateToProps, null)(PrivateRoute)

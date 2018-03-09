import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux'

// STYLED COMPONENTS AND UI IMPORTS
import styled from 'styled-components';

import Home from './containers/Home';
import Forum from './containers/Forum';
import Login from './containers/Login';

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    font-weight: bold;
  }

  nav {
    width: 100%;
    background: ${props => props.theme.colors.primary};

    a {
      color: ${props => props.theme.colors.dark};
      padding: 1rem;
      display: inline-block;
      &:hover {
        color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.secondary};
      }
    }
  }

  img {
    max-width: 100%;
  }
`;

class App extends Component {
  state = {};
  render() {
    return (
      <AppStyles>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/forum" component={Forum} />
            <Route exact path="/login/" component={Login} />
          </Switch>
        </BrowserRouter>
      </AppStyles>
    );
  }
}

const mapStateToProps = state => ({
  // errors: authErrors(state),
  // isAuthenticated: isAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  // onSubmit: (username, password) => {
  //   dispatch(login(username, password));
  //   // dispatch(fetchForumList());
  //   // dispatch(fetchDiscussions());
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Home from './containers/Home';
import Forum from './containers/Forum';
import Events from './containers/Events';
import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';
import EventPage from './containers/EventPage';

const AppStyles = styled.div`
  font-family: 'Nova Square', cursive;
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

const App = () => (
  <AppStyles>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/events" component={Events} />
        <PrivateRoute path='/event/:id' component={EventPage} />
        <PrivateRoute path="/forum" component={Forum} />
      </Switch>
    </BrowserRouter>
  </AppStyles>
);

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(App);

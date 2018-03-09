import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import styled, { extend, injectGlobal, ThemeProvider }from 'styled-components';
// import logo from './logo.svg';
import theme from './theme'

import Home from './containers/Home'
import Forum from './containers/Forum'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #108db8;
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

  .content {
    padding: 1rem;
  }

  img {
    max-width: 100%;
  }
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppStyles>
          <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/forum' component={Forum}/>
            </Switch>
          </BrowserRouter>
        </AppStyles>
      </ThemeProvider>
    );
  }
}

export default App;

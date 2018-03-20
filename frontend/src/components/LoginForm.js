import React, { Component } from 'react';

import styled, { extend } from 'styled-components'; // eslint-disable-line

import {
  Input,
  Label,
  Panel,
  // Message,
  Button,
  PanelHeader,
  PanelFooter
} from 'rebass';


const LoginButton = Button.extend`
 
`
class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  };

  handleInputChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [event.target.name]: value
    });
  };

  render() {
    // const errors = this.props.errors || {};
    return (
      <Panel bg='secondary' mx="auto" mt={2} width={1 / 2}>
        <PanelHeader>Login</PanelHeader>

        <form onSubmit={this.onSubmit}>
          <Label>Username</Label>
          <Input is="input" m={1} name="username" placeholder="username" onChange={this.handleInputChange} />
          <Label>password</Label>

          <Input m={1} name="password" type="password" placeholder="password" onChange={this.handleInputChange} />

          <PanelFooter>
            <LoginButton bg='secondary'textAlign='center' type="submit">login</LoginButton>
          </PanelFooter>
        </form>
      </Panel>
    );
  }
}

export default LoginForm;

import React, { Component } from 'react';

import {
  Input,
  Label,
  Panel,
  // Message,
  Button,
  PanelHeader,
  PanelFooter
} from 'rebass';

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
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    this.setState({
      [event.target.name]: value
    });
  };

  render() {
    // const errors = this.props.errors || {};
    return (
      <Panel mx="auto" mt={2} width={1 / 2}>
        <PanelHeader>Login</PanelHeader>

        <form onSubmit={this.onSubmit}>
          <Label>Username</Label>
          <Input
            is="input"
            m={1}
            name="username"
            placeholder="username"
            onChange={this.handleInputChange}
          />
          <Label>password</Label>

          <Input
            m={1}
            name="password"
            placeholder="password"
            onChange={this.handleInputChange}
          />

          <PanelFooter>
            <Button type="submit">Submit</Button>
          </PanelFooter>
        </form>
      </Panel>
    );
  }
}

export default LoginForm;

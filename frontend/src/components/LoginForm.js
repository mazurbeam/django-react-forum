import React, { Component } from 'react';

import { Input, Label, Panel, Button, PanelHeader, PanelFooter } from 'rebass';

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
    const target = event.target,
      value = target.type === 'checkbox' ? target.checked : target.value,
      name = target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    const errors = this.props.errors || {};
    return (
      <Panel mx="auto" mt={2} width={1 / 2}>
        <PanelHeader>Login</PanelHeader>
        <form onSubmit={this.onSubmit}>
          <Input m={1} placeholder="username" />
          <Input m={1} placeholder="password" />
        </form>
        <PanelFooter>
          <Button>Submit</Button>
        </PanelFooter>
      </Panel>
    );
  }
}

export default LoginForm;

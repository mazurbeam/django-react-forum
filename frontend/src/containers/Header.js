import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, NavLink } from 'rebass';

class Header extends Component {
  state = {};
  render() {
    return (
      <Toolbar bg="secondary">
        <NavLink is={Link} to="/">
          Home
        </NavLink>
        <NavLink is={Link} to="/forum">
          The Forum
        </NavLink>
      </Toolbar>
    );
  }
}

export default Header;

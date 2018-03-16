import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { extend } from 'styled-components'; // eslint-disable-line
import { Toolbar, NavLink } from 'rebass';

const NavItem = NavLink.extend`
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

class Header extends Component {
  state = {};
  render() {
    return (
      <Toolbar bg="dark">
        <NavItem is={Link} to="/">
          Home
        </NavItem>

        <NavItem is={Link} to="/events">
          Events
        </NavItem>
        <NavItem ml="auto" is={Link} to="/login">
          Login
        </NavItem>
      </Toolbar>
    );
  }
}

export default Header;

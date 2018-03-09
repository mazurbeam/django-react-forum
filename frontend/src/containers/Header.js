import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { extend } from 'styled-components'; // eslint-disable-line
import { Toolbar, NavLink } from 'rebass';

const NavItem = NavLink.extend`
  width: 5%;
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

class Header extends Component {
  state = {};
  render() {
    return (
      <Toolbar bg="secondary">
        <NavItem is={Link} to="/">
          Home
        </NavItem>
        <NavItem is={Link} to="/forum">
          The Forum
        </NavItem>
      </Toolbar>
    );
  }
}

export default Header;

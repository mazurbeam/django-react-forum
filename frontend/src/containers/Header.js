import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { extend } from 'styled-components'; // eslint-disable-line
import { Toolbar, NavLink } from 'rebass';
import * as reducers from '../services/reducers';


const NavItem = NavLink.extend`
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const Header = (props) => {
    const { isAuthenticated } = props;
    return (
      <Toolbar bg="secondary">
        <NavItem is={Link} to="/">
          Home
        </NavItem>
        {isAuthenticated ? 
          <NavItem is={Link} to="/events">
          Events
        </NavItem> :
        <NavItem ml="auto" is={Link} to="/login">
          Login
        </NavItem>
        }
        
        
      </Toolbar>
    );
}

const mapStateToProps = state => ({
  isAuthenticated: reducers.isAuthenticated(state)
});
export default connect(mapStateToProps, null)(Header);

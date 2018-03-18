import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { extend } from 'styled-components'; // eslint-disable-line
import { Toolbar, NavLink } from 'rebass';
import * as reducers from '../services/reducers';


const NavItem = NavLink.extend`
  font-family: 'Nosifer', cursive;
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const Header = (props) => {
    const { isAuthenticated } = props;
    return (
      <div>
      {isAuthenticated ? 
      <Toolbar bg="secondary">
        <NavItem ml="auto" is={Link} to="/">
          Home
        </NavItem>
          <NavItem mr='auto' is={Link} to="/events">
          Events
        </NavItem> 
        <NavItem mr='auto' is={Link} to="/login">
          Logout
        </NavItem>
      </Toolbar> :
      <Toolbar bg="third">
        <NavItem ml='auto' is={Link} to="/login">
          Login
        </NavItem>
      </Toolbar> 
    }
    </div>
    );
}

const mapStateToProps = state => ({
  isAuthenticated: reducers.isAuthenticated(state)
});
export default connect(mapStateToProps, null)(Header);

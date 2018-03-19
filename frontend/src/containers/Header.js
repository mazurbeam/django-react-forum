import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { extend } from 'styled-components'; // eslint-disable-line
import { Avatar, Toolbar, NavLink , Text} from 'rebass';
import * as reducers from '../services/reducers';

const Navbar = Toolbar.extend`
    font-family: ${props => props.theme.fonts.navbar};

`
const NavItem = NavLink.extend`
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const Header = (props) => {
    const { isAuthenticated , profile} = props;
    return (
      <div>
      {isAuthenticated ? 
      <Navbar bg="secondary">
        <Text>SGC Loves You!</Text>
        <NavItem ml="auto" is={Link} to="/">
          Home
        </NavItem>
          <NavItem mr='auto' is={Link} to="/events">
          Events
        </NavItem> 
        <NavItem is={Link} to='/profile'>
        <Avatar size={32} src={profile.avatar}/>Profile
        </NavItem>
        <Text onClick={props.onLogout}>
          Logout
        </Text>
        
      </Navbar> :
      <Navbar bg="third">
        <NavItem ml='auto' is={Link} to="/login">
          Login
        </NavItem>
      </Navbar> 
    }
    </div>
    );
}

const mapStateToProps = state => ({
  isAuthenticated: reducers.isAuthenticated(state),
  profile: state.profiles.profile 
});

const mapDispatchToProps = dispatch => ({
  onLogout() {
    dispatch({ type: 'LOG_OUT' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

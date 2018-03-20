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
      <Navbar bg="dark">
        <Text>Smoking Gun Collective</Text>
          <NavItem ml='auto'  is={Link} to="/events">
          Events
        </NavItem> 
        <NavItem mr='auto'>
          Discussions/Wall/Feed
        </NavItem>
        <NavItem is={Link} to='/profile'>
        {profile.avatar ? 
          <Avatar size={64} src={profile.avatar}/> : 
          
          <Text>Profile</Text>
        }
        
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

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, NavLink } from 'rebass';

class Header extends Component {
  state = {}
  render() { 
    return (
        <Toolbar bg='secondary'>
          <NavLink is={Link} to='/' children='Home'/>
          <NavLink is={Link} to='/forum' children='The Forum'/>
        </Toolbar>
      )
  }
}
 
export default Header;

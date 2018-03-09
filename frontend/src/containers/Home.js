import React, { Component } from 'react';

import { Heading } from 'rebass'
import Header from './Header'

class Home extends Component {
  state = {}
  render() { 
    return ( 
      <div>
        <Header/>
        <Heading>Home</Heading>
      </div>
     )
  }
}
 
export default Home;

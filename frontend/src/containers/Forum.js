import React, { Component } from 'react';
import { Flex, Box } from 'rebass';

import Header from './Header';

class Forum extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Flex>
          <Box>
            <h1>Forum</h1>
          </Box>
        </Flex>
      </div>
    );
  }
}

export default Forum;

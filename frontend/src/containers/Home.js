import React, { Component } from 'react';
import { extend } from 'styled-components';  // eslint-disable-line
import { Heading, Container, Box, Text } from 'rebass';
import Header from './Header';

const PageContainer = Container.extend` 
  margin: 0;
`;

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <PageContainer>
        <Heading>Welcome!</Heading>
        <Box>
          <Text>Something about stuff here</Text>
        </Box>
        </PageContainer>
      </div>
    );
  }
}

export default Home;

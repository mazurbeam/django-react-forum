import React, { Component } from 'react';
import { extend } from 'styled-components'; // eslint-disable-line
import { Heading, Banner, Container, Text } from 'rebass';
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
        <Banner
          color="white"
          bg="gray8"
          backgroundImage="https://i.imgur.com/5yeVW1I.jpg"
        >
          <Heading f={[4, 5, 6, 7]} color='primary' bg='secondary'>Welcome :)</Heading>
        </Banner>
        <PageContainer>
 
            <Text>Something about stuff here</Text>
 
        </PageContainer>
      </div>
    );
  }
}

export default Home;

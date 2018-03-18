import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled, { extend } from 'styled-components'; // eslint-disable-line

import { Box, Container, Heading } from 'rebass';

import { fetchEventList } from '../services/actions/events';
import Header from './Header';

import EventPanel from '../components/EventPanel';

const PageContainer = Container.extend`

`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.third};
`

const EventList = Box.extend`

`

class Events extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return (
    <Wrapper>
        <Header />
        <PageContainer my='auto' bg='secondary'>
          <Heading color='primary' >Upcoming Events</Heading>
          <EventList p={2} >
          {this.props.events.map(event => <Link key={event.id} to={`event/${event.id}`}><EventPanel key={event.id} event={event} /></Link>)} 
          </EventList>
          <Container>
            
          </Container>
        </PageContainer>
    </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  user_id: state.auth.access.user_id,
  events: state.events.events
});

const mapDispatchToProps = dispatch => ({
  getEvents() {
    dispatch(fetchEventList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { extend } from 'styled-components'; // eslint-disable-line

import { Box, Button, Container, Heading } from 'rebass';

import { fetchEventList } from '../services/actions/events';
import Header from './Header';

import EventPanel from '../components/EventPanel';
import Event from '../components/EventPanel';

const PageContainer = Box.extend`
  border: 10px solid ${props => props.theme.colors.third};
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  background-color: black;
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
        <PageContainer mx='auto' bg='dark'>
          {this.props.profile.is_staff ? 
            <div><Button is={Link} to='/create_event'>Add Event</Button> </div>:
            <Heading color='primary' >Upcoming Events</Heading>
          }
          <EventList p={2} >
          {this.props.events.map(event => <EventPanel key={event.id} event={event} />)} 
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
  events: state.events.events,
  profile: state.profiles.profile
});

const mapDispatchToProps = dispatch => ({
  getEvents() {
    dispatch(fetchEventList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);

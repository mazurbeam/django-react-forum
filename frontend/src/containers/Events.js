import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { extend } from 'styled-components'; // eslint-disable-line

import { Box, Container, Heading } from 'rebass';

import { fetchEventList } from '../services/actions/events';
import Header from './Header';

import EventPanel from '../components/EventPanel';

const PageContainer = Container.extend`
  margin: 0;
  padding: 0;
  padding-bottom: 70%;
`;

const EventList = Box.extend`

`

class Events extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <PageContainer width={1} bg='secondary'>
        <Header />
        
          <Heading color='primary' >Events</Heading>
          <EventList p={2} >
          {this.props.events.map(event => <Link key={event.id} to={`event/${event.id}`}><EventPanel key={event.id} event={event} /></Link>)} 
          </EventList>
     </PageContainer>
    
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

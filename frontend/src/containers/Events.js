import React, { Component } from 'react';
import { connect } from 'react-redux';
import { extend } from 'styled-components'; // eslint-disable-line

import { Container, Heading } from 'rebass';

import { fetchEventList } from '../services/actions/events';
import Header from './Header';

import EventDetails from '../components/EventDetails';

const PageContainer = Container.extend`
  margin: 0;
`;

class Events extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <div>
        <Header />
        <PageContainer>
          <Heading>Events</Heading>
          {this.props.events.map(event => <EventDetails key={event.id} event={event} />)}
        </PageContainer>
      </div>
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

import React from 'react';
import { connect } from 'react-redux';
import styled, { extend } from 'styled-components'; // eslint-disable-line
import { Container, Box, Subhead } from 'rebass'

import * as reducers from '../services/reducers';

import Header from './Header'
import EventDetails from '../components/EventDetails';

// import EventDetails from '../components/EventDetails'
const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.light};
`

const PageContainer = Box.extend`
width: 100%;
`;

const EventDetailsContainer = Box.extend`
  margin: 0;
  padding: 0;
`
const DiscussionContainer = Container.extend`

`

const EventPage = (props) => {

    console.log(props) // eslint-disable-line
    return ( 
      <Wrapper>
     
        <Header userId={props.user_id}/>
        <PageContainer >
        <EventDetailsContainer >
          <EventDetails event={props.event}/>
        </EventDetailsContainer>
        <DiscussionContainer bg='primary'>
          <Subhead>discussions coming soon :)</Subhead>
        </DiscussionContainer>
      </PageContainer>
      </Wrapper>
     )
}

 
const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  console.log("eventId",eventId) // eslint-disable-line
  return(
    {
      user_id: state.auth.access.user_id,
      event: reducers.getEventDetails(state , eventId)
    }
  );
}


export default connect(mapStateToProps, null)(EventPage);
import React from 'react';
import { connect } from 'react-redux';
import styled, { extend } from 'styled-components'; // eslint-disable-line
import { Container, Subhead } from 'rebass'

import * as reducers from '../services/reducers';

import Header from './Header'
import EventDetails from '../components/EventDetails';

// import EventDetails from '../components/EventDetails'
const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.third};
`

const PageContainer = Container.extend`
padding: 0;
`;

const EventDetailsContainer = Container.extend`
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
        <PageContainer my={[0, 'auto']} bg='secondary'>
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
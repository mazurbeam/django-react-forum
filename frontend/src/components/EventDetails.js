import React from 'react';

import styled, { extend } from 'styled-components'; // eslint-disable-line
import Moment from 'react-moment'

import { Box, BackgroundImage, Heading, Text, Subhead, Card } from 'rebass';


const EventCard = Card.extend`
  border: 1px solid black;
`;

const EventDetails = props => {
  const { event } = props

  return(
  <EventCard width={1} bg='third' color='secondary'>
  
    <Heading bg='fourth' m='auto'><BackgroundImage
    ratio={1/8}
    src={event.banner}
  />{event.name}</Heading>
    <Subhead bg='fifth'>
      <Moment format="MMMM Do">{event.start_date}</Moment> - 
      <Moment format="MMMM Do">{event.end_date}</Moment>
    </Subhead>
    <Box bg='white'>
    <Text>
    <div dangerouslySetInnerHTML={{ __html: event.description }} /> { // eslint-disable-line
    }
    </Text>
    </Box>
  </EventCard>
)};

export default EventDetails;

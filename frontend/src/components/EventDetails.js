import React from 'react';

import styled, { extend } from 'styled-components'; // eslint-disable-line
import Moment from 'react-moment'

import { Box, Image, Heading, Subhead, Card, Text } from 'rebass';


const EventCard = Card.extend`
  border: 1px solid black;
`;

const EventDetails = props => {
  const { event } = props

  return(
  <EventCard width={1} bg='third' color='secondary'>
  <Image
  width={1}
  ratio={1/2}
  src={event.flyer_url}
/>
    <Heading bg='fourth' m='auto'>{event.name}</Heading>
    <Subhead bg='fifth'>
      <Moment format="MMMM Do">{event.start_date}</Moment> - 
      <Moment format="MMMM Do">{event.end_date}</Moment>
    </Subhead>
    <Box>
      <Text p={1} fontSize={[3]}bg='fifth'>{props.event.description}</Text>
    </Box>
  </EventCard>
)};

export default EventDetails;

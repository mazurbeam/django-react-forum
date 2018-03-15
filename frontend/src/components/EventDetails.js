import React from 'react';

import styled, { extend } from 'styled-components'; // eslint-disable-line

import { Box, Heading, Subhead, Card } from 'rebass';

const EventCard = Card.extend`
  border: 1px solid black;
`;
const EventDetails = props => (
  <EventCard width={1}>
    <Heading>{props.event.name}</Heading>
    <Subhead>
      {props.event.start_date} - {props.event.end_date}
    </Subhead>
    <Box>
      <p>{props.event.description}</p>
    </Box>
  </EventCard>
);

export default EventDetails;

import React from 'react';
import { Link } from 'react-router-dom';

import { extend } from 'styled-components' // eslint-disable-line
import { Panel, Button, PanelHeader, Text, BackgroundImage } from 'rebass';
import Moment from 'react-moment'

const EventText = Text.extend`
  font-family: 'Nova Square', cursive;
`
const EventPanel = (props) => {
  const { event } = props

  return(
    <Panel bg='fifth' color='secondary' m={1} >
    
      <PanelHeader bg=''> <EventText><Moment format="MMMM Do">{event.start_date}</Moment> - {' '}
      <Moment format="MMMM Do">{event.end_date}</Moment></EventText><BackgroundImage src={event.banner} ratio={1/4}/>{event.name}</PanelHeader>
     
      <EventText>Location: {event.address}</EventText>
      <Button is={Link} key={event.id} to={`event/${event.id}`}>Details</Button>
    </Panel>
  )

}

export default EventPanel;
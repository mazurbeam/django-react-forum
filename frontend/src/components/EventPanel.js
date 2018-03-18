import React from 'react';
import { extend } from 'styled-components' // eslint-disable-line
import { Panel,  PanelHeader, Text, BackgroundImage } from 'rebass';
import Moment from 'react-moment'

const EventText = Text.extend`
  font-family: 'Nova Square', cursive;
`
const EventPanel = (props) => {
  const { event } = props

  return(
    <Panel bg='fifth' color='secondary' m={1} >
    
      <PanelHeader bg='primary'><BackgroundImage src={event.flyer_url} ratio={1/4}/>{event.name}</PanelHeader>
      <EventText><Moment format="MMMM Do">{event.start_date}</Moment> - 
      <Moment format="MMMM Do">{event.end_date}</Moment></EventText>
      <EventText>Location: {event.address}</EventText>
      <EventText>Suggested Donation: $</EventText>
    </Panel>
  )

}

export default EventPanel;
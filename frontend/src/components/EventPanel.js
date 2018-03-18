import React from 'react';

import { Panel,  PanelHeader, BackgroundImage } from 'rebass';
import Moment from 'react-moment'

const EventPanel = (props) => {
  const { event } = props

  return(
    <Panel bg='fifth' color='secondary' m={1} >
    
      <PanelHeader bg='primary'><BackgroundImage src={event.flyer_url} ratio={1/4}/>{event.name}</PanelHeader>
      <Moment format="MMMM Do">{event.start_date}</Moment> - 
      <Moment format="MMMM Do">{event.end_date}</Moment>
    </Panel>
  )

}

export default EventPanel;
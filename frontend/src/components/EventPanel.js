import React from 'react';

import { Panel,  PanelHeader } from 'rebass';
import Moment from 'react-moment'

const EventPanel = (props) => {
  const { event } = props

  return(
    <Panel bg='fourth' m={1} >
    
      <PanelHeader bg='primary' >{event.name}</PanelHeader>
      <Moment format="MMMM Do">{event.start_date}</Moment> - 
      <Moment format="MMMM Do">{event.end_date}</Moment>
    </Panel>
  )

}

export default EventPanel;
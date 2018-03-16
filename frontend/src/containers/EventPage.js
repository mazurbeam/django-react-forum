import React from 'react';
import { connect } from 'react-redux';
import { extend } from 'styled-components'; // eslint-disable-line
import * as reducers from '../services/reducers';

import Header from './Header'
import EventDetails from '../components/EventDetails';

// import EventDetails from '../components/EventDetails'

const EventPage = (props) => {

    console.log(props) // eslint-disable-line
    return ( 
      <div>
      <Header/>
        <EventDetails event={props.event}/>
      </div>
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
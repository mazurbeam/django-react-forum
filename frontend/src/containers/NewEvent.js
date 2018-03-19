import React, {Component} from 'react';
import { connect } from 'react-redux';

import styled, { extend } from 'styled-components'; // eslint-disable-line
import { Text } from 'rebass';
import { createEvent } from '../services/actions/events'
import { refreshProfile } from '../services/reducers'
import Header from './Header'
import EventForm from '../components/EventForm'

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.third};
  padding-bottom: 100px;
`

class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  postEvent = (name, address, startDate, endDate, description, banner) => {
    this.props.onSubmit(name, address, startDate, endDate, description, banner);
  };

  render() { 
  const { profile } = this.props;


    return (  
      <Wrapper>
      <Header/>
      <Text>{profile.username}</Text>
      <EventForm onSubmit={this.postEvent}/>
    </Wrapper>
  )
  }
}

const mapStateToProps = state => ({
  user_id: state.auth.access.user_id,
  profile: refreshProfile(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, address, startDate, endDate, description, banner) => {
    dispatch(createEvent(name, address, startDate, endDate, description, banner));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEvent);
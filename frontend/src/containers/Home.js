import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { extend } from 'styled-components'; // eslint-disable-line
import {  Heading, Button, Container, Subhead, BackgroundImage } from 'rebass';

  /** LOCAL IMPORTS  * */
import { fetchEventList } from '../services/actions/events';
// import { getUserProfile } from '../services/actions/profiles';
import { isAuthenticated, } from '../services/reducers';

// import Header from './Header';

// const PageContainer = Container.extend`
//   margin: 0;
// `;

const HomeContainer = Container.extend`
  width: 80%:
`

const MySubhead = Subhead.extend`
  margin-top: 30%;
  text-align: center;
`
const MyHeading = Heading.extend`
padding-top: 40%;
text-align: center;
`
class Home extends Component {
  state = {};

  componentDidCatch() {
    if(this.props.isAuthenticated) {
      this.props.onLoginSuccess();
    }
  }
  render() {
    return (
      <div>
       <BackgroundImage
          color="white"
          bg="gray8"
          src="https://i.imgur.com/5yeVW1I.jpg"
        >  
        <HomeContainer>
          <MyHeading f={[5,6, 7]} color='primary' bg=''>Smoking Gun Collective</MyHeading>
          <MySubhead justify='center' bg=''>{this.props.isAuthenticated ? <Link to='events/'>Events</Link> : <Button is={Link} to='/login'>Login</Button>}</MySubhead>
          </HomeContainer>
        </BackgroundImage>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoginSuccess: () => {
    dispatch(fetchEventList());
    // dispatch(fetchDiscussions());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
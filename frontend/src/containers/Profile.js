import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const Profile = props => {
  const { profile } = props;
  console.log(profile) // eslint-disable-line
  return ( 
    <div>
    <Header />
    {profile.username}
    </div> 
  )

}
 
const mapStateToProps = state => ({
  user_id: state.auth.access.user_id,
  profile: state.profiles.profile,
});



export default connect(mapStateToProps, null)(Profile);
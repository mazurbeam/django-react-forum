import React, { Component } from 'react';
import { connect } from 'react-redux';
// Redux
import {
  fetchDiscussions,
  createDiscussion
} from '../services/actions/discussions';
import { refreshDiscussions } from '../services/reducers';
import { Flex, Box } from 'rebass';

import Header from './Header';

class Forum extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Flex>
          <Box>
            <h1>Forum</h1>
          </Box>
        </Flex>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user_id: state.auth.access.user_id,
  profile: state.users.profile,
  forums: state.discussions.forums,
  discussions: refreshDiscussions(state)
});

const mapDispatchToProps = dispatch => ({
  getDiscussions() {
    dispatch(fetchDiscussions());
  },
  createNewDiscussion(forum, user, title, content) {
    dispatch(createDiscussion(forum, user, title, content));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Forum);

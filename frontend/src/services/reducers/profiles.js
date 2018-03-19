// src/reducers/users.js

import * as users from '../actions/profiles';

const initialState = {
  profiles: [],
  profile: {},
  errors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case users.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload[0]
      };
    default:
      return state;
  }
};


export function refreshProfile(state) {
  if (state.profile) {
    return state.profile;
  }
  return null;
}
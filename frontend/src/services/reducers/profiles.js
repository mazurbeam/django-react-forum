// src/reducers/users.js

import * as users from '../actions/profiles'

const initialState = {
  profile: { user: {} },
  errors: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case users.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        profile: action.payload
      }
    default:
      return state
  }
}

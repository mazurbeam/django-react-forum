// src/services/reducers/events.js

import * as events from '../actions/events';

const initialState = {
  events: [],
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case events.EVENT_LIST_SUCCESS:
      return {
        ...state,
        events: action.payload
      };
    case events.EVENT_LIST_FAILURE:
    default:
      return state;
  }
};

export function refreshEvents(state) {
  if (state.events) {
    return state.events;
  }
}

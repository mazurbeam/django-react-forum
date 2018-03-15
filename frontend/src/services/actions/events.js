// src/services/actions/events.js

import { RSAA } from 'redux-api-middleware'
import { withAuth } from '../reducers'

export const EVENT_LIST_REQUEST = '@@events/EVENT_LIST_REQUEST'
export const EVENT_LIST_SUCCESS = '@@events/EVENT_LIST_SUCCESS'
export const EVENT_LIST_FAILURE = '@@events/EVENT_LIST_FAILURE'

export const fetchEventList = () => ({
  [RSAA]: {
    endpoint: '/api/rest/events',
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      EVENT_LIST_REQUEST,
      EVENT_LIST_SUCCESS,
      EVENT_LIST_FAILURE
    ]
  }
})
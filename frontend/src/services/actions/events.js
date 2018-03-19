// src/services/actions/events.js

import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers';

export const EVENT_LIST_REQUEST = '@@events/EVENT_LIST_REQUEST';
export const EVENT_LIST_SUCCESS = '@@events/EVENT_LIST_SUCCESS';
export const EVENT_LIST_FAILURE = '@@events/EVENT_LIST_FAILURE';

export const CREATE_EVENT_REQUEST = '@@events/CREATE_EVENT_REQUEST';
export const CREATE_EVENT_SUCCESS = '@@events/CREATE_EVENT_SUCCESS';
export const CREATE_EVENT_FAILURE = '@@events/CREATE_EVENT_FAILURE';

export const fetchEventList = () => ({
  [RSAA]: {
    endpoint: '/api/rest/events',
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [EVENT_LIST_REQUEST, EVENT_LIST_SUCCESS, EVENT_LIST_FAILURE]
  }
});

export const createEvent = (name, address, start_date, end_date, description, banner=null) => ({
  [RSAA]: {
    endpoint: '/api/rest/events/',
    method: 'POST',
    body: JSON.stringify({
      name: name,
      banner: banner,
      address: address,
      start_date: start_date,
      end_date: end_date,
      description: description
    }),
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, CREATE_EVENT_FAILURE]
  }
});
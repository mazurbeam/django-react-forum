// src/actions/users.js

import { RSAA } from 'redux-api-middleware'
import { withAuth } from '../reducers'

export const GET_CURRENT_USER_REQUEST = '@@users/GET_CURRENT_USER_REQUEST'
export const GET_CURRENT_USER_SUCCESS = '@@users/GET_CURRENT_USER_SUCESS'
export const GET_CURRENT_USER_FAILURE = '@@users/GET_CURRENT_USER_FAILURE'

export const getCurrentUserProfile = id => ({
  [RSAA]: {
    endpoint: `/api/rest/profiles/${id}`,
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      GET_CURRENT_USER_REQUEST,
      GET_CURRENT_USER_SUCCESS,
      GET_CURRENT_USER_FAILURE
    ]
  }
})

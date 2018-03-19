// src/actions/users.js

import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers';

export const GET_PROFILE_REQUEST = '@@users/GET_CURRENT_USER_REQUEST';
export const GET_PROFILE_SUCCESS = '@@users/GET_CURRENT_USER_SUCESS';
export const GET_PROFILE_FAILURE = '@@users/GET_CURRENT_USER_FAILURE';

export const getUserProfile = username => ({
  [RSAA]: {
    endpoint: `/api/rest/profiles/?username=${username}`,
    method: 'GET',
    // headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE]
  }
});

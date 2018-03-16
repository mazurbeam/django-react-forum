import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth, * as fromAuth from './auth';
import discussions, * as fromDiscussions from './discussions';
import profiles, * as fromProfiles from './profiles';
import events, * as fromEvents from './events';

export default combineReducers({
  auth,
  discussions,
  events,
  router: routerReducer
});

export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth);
export const accessToken = state => fromAuth.accessToken(state.auth);
export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state.auth);
export const refreshToken = state => fromAuth.refreshToken(state.auth);
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth);
export const authErrors = state => fromAuth.errors(state.auth);
export const refreshDiscussions = state => fromDiscussions.refreshDiscussions(state.discussions);
export const refreshComments = state => fromDiscussions.refreshComments(state.discussions);
export const getSingleComment = (state, id) => fromDiscussions.getSingleComment(state.discussions, id);
export const refreshEvents = state => fromEvents.refreshEvents(state.events);
export const getEventDetails = (state, id) => fromEvents.getEventDetails(state.events, id);

export function withAuth(headers = {}) {
  return state => ({
    ...headers, // eslint-disable-line
    Authorization: `Bearer ${accessToken(state)}`
  });
}

// src/reducers/discussion.js

import * as discussions from '../actions/discussions';

const initialState = {
  forums: null,
  discussions: null,
  comments: [],
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case discussions.FETCHING_FORUMLIST_SUCCESS:
      return {
        ...state,
        forums: action.payload
      };
    case discussions.FETCHING_DISCUSSIONS_SUCCESS:
      return {
        ...state,
        discussions: action.payload,
        errors: {}
      };
    case discussions.FETCHING_DISCUSSIONS_FAILURE:
    case discussions.FETCHING_DISCUSSION_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload
      };
    case discussions.FETCHING_DISCUSSION_COMMENTS_FAILURE:
    case discussions.CREATE_DISCUSSION_SUCCESS:
      break;
    case discussions.POST_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case discussions.EDIT_COMMENT_SUCCESS:
    case discussions.EDIT_COMMENT_FAILURE:
      break;
    case discussions.DELETE_COMMENT_SUCCESS:
    default:
      return state;
  }
};

export function refreshDiscussions(state) {
  if (state.discussions) {
    return state.discussions;
  }
}

export function refreshComments(state) {
  if (state.comments) {
    return state.comments;
  }
}

export function getSingleComment(state, id) {
  const comment = state.comment.find(comment => comment.id === id);
  if (comment) {
    return comment;
  }
}

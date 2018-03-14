// src/actions/discussion.js

import { RSAA } from 'redux-api-middleware'
import { withAuth } from '../reducers'

// ForumList
export const FETCHING_FORUMLIST_REQUEST =
  '@@discussions/REQUEST_FORUMLIST_REQUEST'
export const FETCHING_FORUMLIST_SUCCESS =
  '@@discussions/REQUEST_FORUMLIST_SUCCESS'
export const FETCHING_FORUMLIST_FAILURE =
  '@@discussions/REQUEST_FORUMLIST_FAILURE'

// Discussions
export const FETCHING_DISCUSSIONS_REQUEST =
  '@@discussions/REQUEST_DISCUSSIONS_REQUEST'
export const FETCHING_DISCUSSIONS_SUCCESS =
  '@@discussions/REQUEST_DISCUSSIONS_SUCCESS'
export const FETCHING_DISCUSSIONS_FAILURE =
  '@@discussions/REQUEST_DISCUSSIONS_FAILURE'

export const CREATE_DISCUSSION_REQUEST =
  '@@discussions/CREATE_DISCUSSION_REQUEST'
export const CREATE_DISCUSSION_SUCCESS =
  '@@discussions/CREATE_DISCUSSION_SUCCESS'
export const CREATE_DISCUSSION_FAILURE =
  '@@discussions/CREATE_DISCUSSION_FAILURE'

// Discussion Comments GET
export const FETCHING_DISCUSSION_COMMENTS_REQUEST =
  '@@discussions/REQUEST_DISCUSSION_COMMENTS_REQUEST'
export const FETCHING_DISCUSSION_COMMENTS_SUCCESS =
  '@@discussions/REQUEST_DISCUSSION_COMMENTS_SUCCESS'
export const FETCHING_DISCUSSION_COMMENTS_FAILURE =
  '@@discussions/REQUEST_DISCUSSION_COMMENTS_FAILURE'

// Discussion Comments POST
export const POST_COMMENT_REQUEST = '@@discussions/POST_COMMENTS_REQUEST'
export const POST_COMMENT_SUCCESS = '@@discussions/POST_COMMENTS_SUCCESS'
export const POST_COMMENT_FAILURE = '@@discussions/POST_COMMENTS_FAILURE'

// EDIT Comment
export const EDIT_COMMENT_REQUEST = '@@discussions/EDIT_COMMENTS_REQUEST'
export const EDIT_COMMENT_SUCCESS = '@@discussions/EDIT_COMMENTS_SUCCESS'
export const EDIT_COMMENT_FAILURE = '@@discussions/EDIT_COMMENTS_FAILURE'

export const DELETE_COMMENT_REQUEST = '@@discussions/DELETE_COMMENTS_REQUEST'
export const DELETE_COMMENT_SUCCESS = '@@discussions/DELETE_COMMENTS_SUCCESS'
export const DELETE_COMMENT_FAILURE = '@@discussions/DELETE_COMMENTS_FAILURE'

export const fetchForumList = () => ({
  [RSAA]: {
    endpoint: '/api/rest/forums',
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      FETCHING_FORUMLIST_REQUEST,
      FETCHING_FORUMLIST_SUCCESS,
      FETCHING_FORUMLIST_FAILURE
    ]
  }
})

export const fetchDiscussions = () => ({
  [RSAA]: {
    endpoint: '/api/rest/discussions',
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      FETCHING_DISCUSSIONS_REQUEST,
      FETCHING_DISCUSSIONS_SUCCESS,
      FETCHING_DISCUSSIONS_FAILURE
    ]
  }
})

export const createDiscussion = (
  forum,
  user,
  title,
  content,
  pinned = false
) => ({
  [RSAA]: {
    endpoint: '/api/rest/discussion/',
    method: 'POST',
    body: JSON.stringify({
      forum: forum,
      created_by: user,
      title: title,
      content: content,
      pinned: pinned
      // created_at: post_time,
      // updated_at: post_time
    }),
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      CREATE_DISCUSSION_REQUEST,
      CREATE_DISCUSSION_SUCCESS,
      CREATE_DISCUSSION_FAILURE
    ]
  }
})

export const fetchDiscussionComments = discussion_id => ({
  [RSAA]: {
    endpoint: `/api/rest/comments/?discussion=${discussion_id}`,
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      FETCHING_DISCUSSION_COMMENTS_REQUEST,
      FETCHING_DISCUSSION_COMMENTS_SUCCESS,
      FETCHING_DISCUSSION_COMMENTS_FAILURE
    ]
  }
})

export const postDiscussionComment = (comment, discussion, user) => ({
  [RSAA]: {
    endpoint: '/api/rest/comment/',
    method: 'POST',
    body: JSON.stringify({
      comment: comment,
      discussion: discussion,
      user: user
      // created_at: post_time,
      // updated_at: post_time
    }),
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [POST_COMMENT_REQUEST, POST_COMMENT_SUCCESS, POST_COMMENT_FAILURE]
  }
})

export const editDiscussionComment = (id, comment, user, discussion) => ({
  [RSAA]: {
    endpoint: `/api/rest/comment/${id}/`,
    method: 'PUT',
    body: JSON.stringify({
      user: user,
      discussion: discussion,
      comment: comment
    }),
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [EDIT_COMMENT_REQUEST, EDIT_COMMENT_SUCCESS, EDIT_COMMENT_FAILURE]
  }
})

export const deleteDiscussionComment = id => ({
  [RSAA]: {
    endpoint: `/api/rest/comment/${id}/`,
    method: 'DELETE',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      DELETE_COMMENT_REQUEST,
      DELETE_COMMENT_SUCCESS,
      DELETE_COMMENT_FAILURE
    ]
  }
})

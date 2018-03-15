import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
/**
 * feed apis
 */
export const fetchDiscussions = forum_id => {
  axios.get(`/api/rest/discussions/?forum=${forum_id}`);
};

export const login = (username, password) => {
  axios.post('/api/auth/token/obtain');
};

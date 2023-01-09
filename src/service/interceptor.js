import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://notes-api.dicoding.dev/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/';
    } else {
      return error.response;
    }
  }
);

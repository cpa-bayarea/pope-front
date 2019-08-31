import axios from 'axios';

const api = axios.create({
  baseURL: 'http://apipope.com',
});

export default api;

import axios from 'axios';

const api = axios.create({
  baseURL: 'localhost',
});

export default api;

import axios from 'axios';

const Api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:8000/',
  timeout: 3000,
});

export default Api;
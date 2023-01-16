import axios from 'axios';

const challengeApi = axios.create({
  baseURL: 'http://localhost:3000',
});

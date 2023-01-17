import axios from 'axios';

const httpCatsApi = axios.create({
  baseURL: 'https://http.cat/',
});

export default httpCatsApi;

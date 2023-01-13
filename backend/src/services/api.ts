import axios from 'axios';

export const randomUsersApi = axios.create({
  baseURL: 'https://randomuser.me/api/',
});

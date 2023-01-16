import axios from 'axios';

export interface BackendUserResponse {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  birthdate?: string;
  profilePictureUrl?: string;
}

export const backendApi = axios.create({ baseURL: 'http://localhost:3000/' });

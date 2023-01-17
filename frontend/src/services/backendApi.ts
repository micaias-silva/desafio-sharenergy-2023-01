import axios from 'axios';

export const backendApi = axios.create({ baseURL: 'http://localhost:3000/' });

export interface BackendUserResponse {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  birthdate?: string;
  profilePictureUrl?: string;
}

export interface BackendClientResponse {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  cpf: string;
  address: {
    id: string;
    zipcode: string;
    number: string;
    country: string;
    neighborhood?: string;
    state?: string;
    city?: string;
    street?: string;
  };
}

export interface PaginationResponse {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface PaginatedUserResponse extends PaginationResponse {
  docs: BackendUserResponse[];
}

export interface PaginatedClienResponse extends PaginationResponse {
  docs: BackendClientResponse[];
}

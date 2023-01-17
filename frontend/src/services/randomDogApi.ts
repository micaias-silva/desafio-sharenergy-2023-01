import axios from 'axios';

const randomDogApi = axios.create({
  baseURL: 'https://random.dog/',
});

export default randomDogApi;

import axios from 'axios';

const apiAxios = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default apiAxios;

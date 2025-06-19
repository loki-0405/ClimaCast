import axios from 'axios';

const API_URL = process.env.REACT_APP_API_BASE_URL;

export const getweather = (city) =>
  axios.get(`${API_URL}/weather`, city);

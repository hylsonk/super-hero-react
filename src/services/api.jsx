import axios from 'axios';

export const API = axios.create({
  baseURL: `${process.env.REACT_APP_SUPER_HERO_API}/10223200377814540`,
  withCredentials: false,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

export default API;
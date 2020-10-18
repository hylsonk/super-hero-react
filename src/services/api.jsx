import axios from 'axios';

export const API = axios.create({
      baseURL: "https://superheroapi.com/api.php/10223200377814540/",
      headers: {
        "Content-Type": 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

export default API;
const prod = process.env.NODE_ENV === 'production';

export const API_URL = prod ? 'https://world-countries-astral.herokuapp.com/api' : 'http://localhost:5000/api';

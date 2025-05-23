import axios from 'axios';
import { isTokenExpired } from '../utils/auth';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
});

api.interceptors.request.use((config) => {

  if (config.url.includes('/auth/local')) {
    return config;
  }

  const token = localStorage.getItem('token');

  if (token) {
    if (isTokenExpired(token)) {
      localStorage.removeItem('token');
      window.location.href = '/login';
      return Promise.reject(new Error('Token expirado'));
    }

    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;

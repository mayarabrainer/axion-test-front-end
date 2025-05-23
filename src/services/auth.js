import api from './api';

export const login = async (identifier, password) => {
  try {
    const response = await api.post('/auth/local', { identifier, password });

    const { jwt } = response.data; 
    localStorage.setItem('token', jwt);

    return response.data;
  } catch (error) {
    throw new Error('Falha no login', error);
  }
};

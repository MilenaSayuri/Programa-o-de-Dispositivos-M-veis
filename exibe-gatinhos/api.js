import axios from 'axios';

const API_KEY = process.env.API_KEY;

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: { 'x-api-key': API_KEY },
});

export const getCatImages = async (limit = 5) => {
  try {
    const response = await api.get(`/images/search?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar imagens:', error);
    return [];
  }
};

import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchDishes = async () => {
  const response = await axios.get(`${API_URL}/dishes`);
  return response.data;
};

export const togglePublished = async (id) => {
  const response = await axios.post(`${API_URL}/dishes/toggle/${id}`);
  return response.data;
};


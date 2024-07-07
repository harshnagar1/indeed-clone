import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const savePost = async (payload) => {
  try {
    return await axios.post(`${API_URL}/post`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log('Error: ', error.message);
    return error.response.data;
  }
};

export const getAllPost = async () => {
  try {
    return await axios.get(`${API_URL}/posts`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log('Error: ', error.message);
    return error.response.data;
  }
};

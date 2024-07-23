import axios from 'axios';

const server_url = import.meta.env.VITE_SERVER_URL;

export const savePost = async (payload) => {
  try {
    return await axios.post(`${server_url}/post`, payload, {
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
    return await axios.get(`${server_url}/posts`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log('Error: ', error.message);
    return error.response.data;
  }
};

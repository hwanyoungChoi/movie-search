import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
  params: {
    apiKey: import.meta.env.VITE_API_KEY,
  },
});

export default axiosInstance;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://run.mocky.io/v3/',
});

export default axiosInstance;

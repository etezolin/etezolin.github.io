import axios from 'axios';
import history from './history';

const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    const newConfig = { ...config };
    newConfig.headers.Authorization = `Bearer ${token}`;
    return newConfig;
  }
  return config;
});

const handleLogout = () => {
  const logOutUrl = process.env.REACT_APP_LOGOUT;

  localStorage.clear();

  window.location.href = logOutUrl;
};

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      handleLogout();

      history.push('/login');

      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

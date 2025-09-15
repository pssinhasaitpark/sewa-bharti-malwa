import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("Authorization");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle token expiration or unauthorized access
    if (error.response?.status === 401) {
      // Remove expired token
      localStorage.removeItem('Authorization');
      delete axiosInstance.defaults.headers.common['Authorization'];
      // You might want to redirect to login or dispatch a logout action here
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
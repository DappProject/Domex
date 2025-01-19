import axios from 'axios';

// Create an Axios instance
const apiUrl = import.meta.env.API_URL; // Replace with your API base URL


const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json', // Default to JSON
  },
});

// Add a request interceptor to add the token and set headers based on data type
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
  

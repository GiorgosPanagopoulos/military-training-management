import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authService = {
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },
  logout: () => {
    localStorage.removeItem('token');
  }
};

export const personnelService = {
  getAll: () => api.get('/personnel'),
  getById: (id) => api.get(`/personnel/${id}`),
  create: (data) => api.post('/personnel', data),
  update: (id, data) => api.put(`/personnel/${id}`, data),
  delete: (id) => api.delete(`/personnel/${id}`)
};

export const serviceService = {
  getAll: () => api.get('/services'),
  getById: (id) => api.get(`/services/${id}`),
  create: (data) => api.post('/services', data),
  update: (id, data) => api.put(`/services/${id}`, data),
  delete: (id) => api.delete(`/services/${id}`)
};

export const trainingService = {
  getAll: () => api.get('/trainings'),
  getById: (id) => api.get(`/trainings/${id}`),
  create: (data) => api.post('/trainings', data),
  update: (id, data) => api.put(`/trainings/${id}`, data),
  delete: (id) => api.delete(`/trainings/${id}`)
};

export const personnelTrainingService = {
  getAll: () => api.get('/personnelTrainings'),
  getById: (id) => api.get(`/personnelTrainings/${id}`),
  create: (data) => api.post('/personnelTrainings', data),
  update: (id, data) => api.put(`/personnelTrainings/${id}`, data),
  delete: (id) => api.delete(`/personnelTrainings/${id}`)
};

export default api;

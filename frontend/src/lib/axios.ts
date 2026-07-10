import axios from 'axios';

const TOKEN_KEY = 'ovgs_token';

export const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const isLoginRoute = error.config?.url?.includes('/auth/login');
    if (error.response?.status === 401 && !isLoginRoute) {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem('ovgs_user');
      const next = encodeURIComponent(window.location.pathname + window.location.search);
      window.location.href = `/login?next=${next}`;
    }
    const message =
      error.response?.data?.message ?? error.message ?? 'Erro inesperado';
    return Promise.reject(new Error(Array.isArray(message) ? message.join(', ') : message));
  }
);
// client/src/api.js
import axios from "axios";

// Backend base URL from .env
const base = (process.env.REACT_APP_API_URL || "http://localhost:5000") + "/api";

const api = axios.create({ baseURL: base });

// Interceptor to attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
import axios from "axios";
import { useAuthStore } from "../store/authStore";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    const clientId = localStorage.getItem("clientId");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["x-client-id"] = clientId;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    const token = localStorage.getItem("accessToken");
    const clientId = localStorage.getItem("clientId");
    if (error.response.status === 401) {
      if (token && clientId) {
        http
          .post("/auth/logout", {
            clientId,
            token,
          })
          .then((res) => {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("clientId");
            localStorage.removeItem("user");
            localStorage.removeItem("refreshToken");
          });
      }
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default http;

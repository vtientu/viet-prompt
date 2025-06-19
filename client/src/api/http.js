import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
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
    if (error.response.status === 401) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("clientId");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default http;

import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user, token) => {
    set({ isAuthenticated: true, user });
    localStorage.setItem("accessToken", token);
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("clientId");
    localStorage.removeItem("user");
  },
  setUser: (user) => {
    set({ user });
  },
  setIsAuthenticated: (isAuthenticated) => {
    set({ isAuthenticated });
  },
}));

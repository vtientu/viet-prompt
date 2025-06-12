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
  },
  setUser: (user) => {
    set({ user });
  },
  setIsAuthenticated: (isAuthenticated) => {
    set({ isAuthenticated });
  },
}));

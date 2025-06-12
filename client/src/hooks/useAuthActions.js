import http from "../api/http";
import { useAuthStore } from "../store/authStore";
import { toast } from "react-toastify";

export function useAuthActions() {
  const { setUser, setIsAuthenticated } = useAuthStore();
  const fetchProfile = async () => {
    try {
      const response = await http.get("/user/profile");
      if (response.status === 200) {
        setUser(response.data.metadata);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      toast.error(
        error.response.data.message || "Lỗi khi lấy thông tin người dùng"
      );
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  return { fetchProfile };
}

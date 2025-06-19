import http from "../api/http";
import { useAuthStore } from "../store/authStore";
import { toast } from "react-toastify";

export function useAuthActions() {
  const { setUser, logout: logoutStore } = useAuthStore();
  const fetchProfile = async () => {
    try {
      const response = await http.get("/user/profile");
      if (response.status === 200) {
        setUser(response.data.metadata);
      } else {
        logoutStore();
      }
    } catch (error) {
      console.log(error);
      logoutStore();
    }
  };

  const logout = async () => {
    try {
      const response = await http.post("/auth/logout");
      if (response.status === 200) {
        toast.success("Đăng xuất thành công");
        logoutStore();
        navigate("/login");
      } else {
        toast.error(response.data.message || "Lỗi khi đăng xuất");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || "Lỗi khi đăng xuất");
    }
  };

  return { fetchProfile, logout };
}

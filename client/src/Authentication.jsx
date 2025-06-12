import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import http from "./api/http";
import { useAuthStore } from "./store/authStore";
import { PublicRoute } from "./App";
import { useAuthActions } from "./hooks/useAuthActions";

const Authentication = () => {
  const { fetchProfile } = useAuthActions();
  const { logout } = useAuthStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchValidToken = async () => {
      try {
        const response = await http.get("/auth/verify-token");
        if (response.status === 200) {
          await fetchProfile();
        } else {
          logout();
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        logout();
        navigate("/login");
      }
    };

    if (!token) {
      if (PublicRoute.every((route) => route.path !== pathname)) {
        navigate("/login");
      }
    } else {
      fetchValidToken();
    }
  }, [token, pathname]);

  // useEffect(() => {
  //   if (user) {
  //     if (
  //       user?.roles?.some((role) => role.name === "ADMIN") &&
  //       !PRIVATE_ROUTES.some((route) => route.path === pathname)
  //     ) {
  //       navigate("/user-manager");
  //     } else if (
  //       user?.roles?.some((role) => role.name === "USER") &&
  //       PRIVATE_ROUTES.some((route) => route.path === pathname)
  //     ) {
  //       navigate("/");
  //     }
  //   }
  // }, [user, pathname]);

  return <Outlet />;
};

export default Authentication;

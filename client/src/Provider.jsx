import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuthActions } from "./hooks/useAuthActions";

const Provider = () => {
  const { pathname } = useLocation();
  const { fetchProfile } = useAuthActions();
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      fetchProfile();
    }
  }, [token, pathname]);

  return <Outlet />;
};

export default Provider;

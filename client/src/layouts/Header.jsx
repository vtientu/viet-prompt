import React from "react";
import "./header.css";
import usePayment from "../hooks/usePayment";
import { useAuthStore } from "../store/authStore";
import { useAuthActions } from "../hooks/useAuthActions";

const Header = () => {
  const { handleCreatePayment } = usePayment();
  const { user } = useAuthStore();
  const { logout } = useAuthActions();

  return (
    <header className="main-header d-flex align-items-center p-3">
      <div className="logo me-3">
        <img src="/img/logo.png" alt="VietPrompt" height="60" />
      </div>
      <nav className="nav-menu d-flex flex-grow-1 gap-2">
        <div className="nav-item active">
          <a href="#">Giới thiệu</a>
        </div>
        <div className="nav-item">
          <a href="#">Thư viện</a>
        </div>
        <div className="nav-item dropdown">
          <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
            Tính năng
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Tính năng 1
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-item">
          <a href="#">Dịch vụ</a>
        </div>
        <div className="nav-item dropdown">
          <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
            Đăng ký
          </a>
          <ul className="dropdown-menu">
            <li
              className="dropdown-item"
              onClick={() =>
                handleCreatePayment(100000, "6847b4add6f07e889ea0fb2d")
              }
            >
              Gói A (100.000đ)
            </li>
          </ul>
        </div>
        {user ? (
          <div className="nav-item dropdown">
            <a
              href="/profile"
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              {user.fullName}
            </a>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <a href="/profile">Hồ sơ cá nhân</a>
              </li>
              <li className="dropdown-item" onClick={logout}>
                Đăng xuất
              </li>
            </ul>
          </div>
        ) : (
          <div className="nav-item">
            <a href="/login">Đăng nhập</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

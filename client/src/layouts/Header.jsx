import React from "react";
import "./header.css";
import usePayment from "../hooks/usePayment";
import { useState } from "react";

const Header = () => {
  const { handleCreatePayment } = usePayment();
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
          <a href="#" onClick={() => handleCreatePayment(100000)}>
            Dịch vụ
          </a>
        </div>
        <div className="nav-item dropdown">
          <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
            Đăng ký
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Gói A
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-item">
          <a href="/profile">Thông tin cá nhân</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

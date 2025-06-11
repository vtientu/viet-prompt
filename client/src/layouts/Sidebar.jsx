import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside class="sidebar col-md-2 p-3">
      <div class="sidebar__header">
        <div class="avatar"></div>
        <div>
          <div class="sidebar__name">Admin</div>
          <div class="sidebar__status">Online</div>
        </div>
      </div>

      <hr class="sidebar__divider" />

      <div class="sidebar__section-title">Tiện ích</div>
      <ul class="sidebar__menu">
        <li>
          <img src="/img/search.svg" /> Tìm kiếm
          <button class="btn_click">Click</button>
        </li>
        <li>
          <img src="/img/credit-card.svg" /> Gói dịch vụ
        </li>
      </ul>

      <hr class="sidebar__divider" />

      <div class="sidebar__section-title">Danh mục</div>
      <ul class="sidebar__menu">
        <li onClick={() => navigate("/admin")}>
          <img src="/img/square (1).svg" />
          Forum
        </li>
        <li onClick={() => navigate("/favourite")}>
          <img src="/img/triangle.svg" /> List prompt yêu thích
        </li>
        <li onClick={() => navigate("/transaction")}>
          <img src="/img/square.svg" />
          Lịch sử giao dịch
        </li>
        <li onClick={() => navigate("/profile")}>
          <img src="/img/octagon.svg" /> Cài đặt tài khoản
        </li>
      </ul>
      <div class="sidebar__spacer"></div>

      <div class="sidebar__account">
        <div class="avatar small">
          <img src="/img/Status.svg" />
        </div>
        <div>
          <div class="sidebar__account-type">Loại tài khoản</div>
          <div class="sidebar__account-badge">Premium</div>
        </div>
        <div class="settings-icon">
          <img src="/img/cog.svg" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

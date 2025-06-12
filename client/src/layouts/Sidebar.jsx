import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Sidebar = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  return (
    <aside className="sidebar col-md-2 p-3">
      <div className="sidebar__header">
        <div
          className="avatar"
          style={{
            backgroundImage: `url(${
              user?.avatar || "/img/avatar-default.svg"
            })`,
            backgroundColor: "white",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div>
          <div className="sidebar__name">
            {user?.firstName + " " + user?.lastName}
          </div>
          <div className="sidebar__status">Online</div>
        </div>
      </div>

      <hr className="sidebar__divider" />

      <div className="sidebar__section-title">Tiện ích</div>
      <ul className="sidebar__menu">
        <li>
          <img src="/img/search.svg" /> Tìm kiếm
          <button className="btn_click">Click</button>
        </li>
        <li>
          <img src="/img/credit-card.svg" /> Gói dịch vụ
        </li>
      </ul>

      <hr className="sidebar__divider" />

      <div className="sidebar__section-title">Danh mục</div>
      <ul className="sidebar__menu">
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
      <div className="sidebar__spacer"></div>

      <div className="sidebar__account">
        <div className="avatar small">
          <img src="/img/Status.svg" />
        </div>
        <div>
          <div className="sidebar__account-type">Loại tài khoản</div>
          <div className="sidebar__account-badge">Premium</div>
        </div>
        <div className="settings-icon">
          <img src="/img/cog.svg" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

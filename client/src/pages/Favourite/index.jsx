import { useEffect, useState } from "react";
import "./favourite.css";
import http from "../../api/http";
import { toast } from "react-toastify";

const FavouritePage = () => {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await http.get("/prompt/favourite");
        if (response.status === 200) {
          setPrompts(response.data.metadata);
        } else {
          toast.error(response.data.message || "Lỗi khi lấy dữ liệu");
        }
      } catch (error) {
        toast.error(error.response.data.message || "Lỗi khi lấy dữ liệu");
      }
    };
    fetchPrompts();
  }, []);

  return (
    <section class="favourite-section ">
      <div class="container-fluid">
        <div class="row">
          <aside class="sidebar col-md-2 p-3">
            <div class="sidebar__header">
              <div class="avatarSide"></div>
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
              <li>
                <img src="/img/square (1).svg" />
                Forum
              </li>
              <li>
                <img src="/img/triangle.svg" /> List prompt yêu thích
              </li>
              <li>
                <img src="/img/square.svg" />
                Lịch sử giao dịch
              </li>
              <li>
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

          <main class="dashboard__main col-md-10">
            <span class="name">Bộ lọc</span>
            <div class="filter-buttons">
              <div class="group-filter-buttons">
                <img
                  src="/img/select.svg"
                  style={{ width: "28.8px", height: "28.8px" }}
                />
                <label class="filter-option">
                  <span>Hoạt hình</span>
                </label>
              </div>
              <div class="group-filter-buttons">
                <img
                  src="/img/select.svg"
                  style={{ width: "28.8px", height: "28.8px" }}
                />
                <label class="filter-option">
                  <span>Semi</span>
                </label>
              </div>
              <div class="group-filter-buttons">
                <img
                  src="/img/select.svg"
                  style={{ width: "28.8px", height: "28.8px" }}
                />
                <label class="filter-option">
                  <span>Tác giả ABC</span>
                </label>
              </div>
              <div class="group-filter-buttons">
                <img
                  src="/img/select.svg"
                  style={{ width: "28.8px", height: "28.8px" }}
                />
                <label class="filter-option">
                  <span>Công nghệ</span>
                </label>
              </div>
              <div class="group-filter-buttons">
                <img
                  src="/img/select.svg"
                  style={{ width: "28.8px", height: "28.8px" }}
                />
                <label class="filter-option">
                  <span>Sự kiện</span>
                </label>
              </div>
              <div class="group-filter-buttons">
                <img
                  src="/img/select.svg"
                  style={{ width: "28.8px", height: "28.8px" }}
                />
                <label class="filter-option">
                  <span>Động vật</span>
                </label>
              </div>
            </div>
            <div class="swiper mySwiper mt-4">
              <div class="swiper-wrapper">
                {prompts.map((prompt, index) => (
                  <div class="swiper-slide" key={index}>
                    <img src={prompt.thumbnail.url} alt="Prompt 1" />
                    <div class="image-caption">
                      <img
                        src={prompt.thumbnail.url}
                        class="avatar"
                        alt="Avatar"
                      />
                      <span class="username">{prompt.username}</span>\
                    </div>
                  </div>
                ))}
              </div>
              <div class="swiper-pagination mt-3"></div>
            </div>

            <div class="carousel-controls text-center mt-3">
              <button class="btn  me-2">Thêm yêu thích</button>
              <button class="btn me-2">Xem chi tiết</button>
              <button class="btn ">Tạo prompt mới</button>
            </div>
          </main>
        </div>

        <div class="dashboard__partners py-3 text-center">
          <div class="container-fluid">
            <div class="row justify-content-between align-items-center">
              <div class="col-auto">
                <img src="/img/waverio.svg" alt="weavio" class="img-fluid" />
              </div>
              <div class="col-auto">
                <img
                  src="/img/squareStore.svg"
                  alt="squarestone"
                  class="img-fluid"
                />
              </div>
              <div class="col-auto">
                <img src="/img/martino.svg" alt="martino" class="img-fluid" />
              </div>
              <div class="col-auto">
                <img src="/img/virogan.svg" alt="virogen" class="img-fluid" />
              </div>
              <div class="col-auto">
                <img src="/img/vertex.svg" alt="vertex" class="img-fluid" />
              </div>
              <div class="col-auto">
                <img src="/img/aromix.svg" alt="aromix" class="img-fluid" />
              </div>
              <div class="col-auto">
                <img src="/img/fireli.svg" alt="freli" class="img-fluid" />
              </div>
              <div class="col-auto text-white">Natroma</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavouritePage;

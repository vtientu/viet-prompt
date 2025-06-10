import React from "react";
import "./admin.css";

const AdminPage = () => {
  return (
    <section class="dashboard">
      <div class="container-fluid">
        <div class="row">
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

          <main class="dashboard__main col-md-10 p-3">
            <div class="dashboard__stats row text-center mb-4">
              <div class="col-md-3 mb-3">
                <div class="dashboard__card1 card p-3 d-flex flex-column align-items-center">
                  <div class="icon_card mb-2">
                    <img
                      src="/img/Image 15.png"
                      style={{ width: "26px", height: "25px" }}
                    />
                  </div>
                  <div class="so_card mb-1">
                    <p>$3.456K</p>
                  </div>
                  <div class="title_card d-flex justify-content-between w-100 px-2">
                    <p class="mb-0 text-start">Total views</p>
                    <p class="mb-0 text-end">0.43%</p>
                  </div>
                </div>
              </div>

              <div class="col-md-3 mb-3">
                <div class="dashboard__card1 card p-3 d-flex flex-column align-items-center">
                  <div class="icon_card mb-2">
                    <img
                      src="/img/giohang.png"
                      style={{ width: "26px", height: "25px" }}
                    />
                  </div>
                  <div class="so_card mb-1">
                    <p>$45,2K</p>
                  </div>
                  <div class="title_card d-flex justify-content-between w-100 px-2">
                    <p class="mb-0 text-start">Total Profit</p>
                    <p class="mb-0 text-end">4.35%</p>
                  </div>
                </div>
              </div>

              <div class="col-md-3 mb-3">
                <div class="dashboard__card1 card p-3 d-flex flex-column align-items-center">
                  <div class="icon_card mb-2">
                    <img
                      src="/img/tui.png"
                      style={{ width: "26px", height: "25px" }}
                    />
                  </div>
                  <div class="so_card mb-1">
                    <p>2.450</p>
                  </div>
                  <div class="title_card d-flex justify-content-between w-100 px-2">
                    <p class="mb-0 text-start">Total Product</p>
                    <p class="mb-0 text-end">2.59%</p>
                  </div>
                </div>
              </div>

              <div class="col-md-3 mb-3">
                <div class="dashboard__card1 card p-3 d-flex flex-column align-items-center">
                  <div class="icon_card mb-2">
                    <img
                      src="/img/nguoi.png"
                      style={{ width: "26px", height: "25px" }}
                    />
                  </div>
                  <div class="so_card mb-1">
                    <p>3.456</p>
                  </div>
                  <div class="title_card d-flex justify-content-between w-100 px-2">
                    <p class="mb-0 text-start">Total Users</p>
                    <p class="mb-0 text-end">0.95%</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="dashboard__charts row mb-4">
              <div class="col-md-7">
                <div class="dashboard__card2 card p-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="chartType"
                          checked
                        />
                        <label class="form-check-label text-primary fw-bold">
                          Total Revenue
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="chartType"
                        />
                        <label class="form-check-label text-info fw-bold">
                          Total Sales
                        </label>
                      </div>
                    </div>
                    <div class="btn-group">
                      <button class="btn btn-sm">Day</button>
                      <button class="btn btn-sm">Week</button>
                      <button class="btn btn-sm">Month</button>
                    </div>
                  </div>
                  <canvas id="chartStatistics"></canvas>
                </div>
              </div>

              <div class="col-md-5">
                <div class="dashboard__card2 card p-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <h6 class="mb-0 fw-bold">Profit this week</h6>
                    <select class="form-select form-select-sm w-auto">
                      <option selected>This Week</option>
                      <option>Last Week</option>
                    </select>
                  </div>
                  <canvas id="chartProfit"></canvas>
                </div>
              </div>
            </div>

            <div class="dashboard__watched row text-center">
              <div class="col-md-4 mb-3">
                <div class="dashboard__card3 p-3">
                  <div class="icon_card3">
                    <img src="/img/notification.svg" />
                  </div>
                  <div>
                    <p>2/8 Watched</p>
                    <p>Product Design</p>
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src="/img/more.svg" />
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="dashboard__card3 p-3">
                  <div class="icon_card3">
                    <img src="/img/notification.svg" />
                  </div>
                  <div>
                    <div>
                      <p>2/8 Watched</p>
                    </div>
                    <div>
                      <p>Product Design</p>
                    </div>
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src="/img/more.svg" />
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="dashboard__card3 p-3">
                  <div class="icon_card3">
                    <img src="/img/notification.svg" />
                  </div>
                  <div>
                    <p>2/8 Watched</p>
                    <p>Product Design</p>
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src="/img/more.svg" />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div class="dashboard__partners py-3 text-center">
          <div class="container-fluid">
            <div class="row justify-content-between align-items-center">
              <div class="col-auto d-flex align-items-center justify-content-center">
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

export default AdminPage;

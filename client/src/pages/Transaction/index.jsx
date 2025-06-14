import "./transaction.css";

const Transaction = () => {
  return (
    <section className="transaction-history-section">
      <div className="container-fluid">
        <main className="transaction-history__main p-3">
          <div className="transaction-wrapper">
            <div className="search-bar">
              <input type="text" placeholder="🔍 Search your course here..." />
              <span className="filter-icon">⚙️</span>
            </div>

            <div className="d-flex justify-content-between">
              <span className="title">Lịch sử giao dịch</span>
              <div className="section-header">
                <a href="#">See All</a>
              </div>
            </div>
            <div className="transaction-history">
              <table>
                <thead>
                  <tr>
                    <th>HỌ TÊN & NGÀY GIAO DỊCH</th>
                    <th>TRẠNG THÁI</th>
                    <th>TÊN GÓI DỊCH VỤ</th>
                    <th>GHI CHÚ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="user-info">
                        <div className="avatar"></div>
                        <div className="text">
                          <div className="name">TÊN TÀI KHOẢN</div>
                          <div className="date">25/2/2023</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="status frontend">FRONTEND</span>
                    </td>
                    <td>Understanding Concept Of React</td>
                    <td>
                      <button className="details-btn">SHOW DETAILS</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-between">
              <span className="title">Thống Kê Hoạt Động</span>
              <div className="section-header">
                <a href="#">See All</a>
              </div>
            </div>

            <div className="activity-stats">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="icondd">
                    <img
                      src="/img/giohang.png"
                      style={{ borderRadius: "28px" }}
                    />
                  </div>
                  <div className="value ">85,246</div>
                  <div className="label">Orders</div>
                </div>
                <div className="stat-item">
                  <div className="icondd">
                    <img src="/img/in.png" style={{ borderRadius: "28px" }} />
                  </div>
                  <div className="value">$96,147</div>
                  <div className="label">Income</div>
                </div>
                <div className="stat-item">
                  <div className="icondd">
                    <img src="/img/Bell.png" style={{ borderRadius: "28px" }} />
                  </div>
                  <div className="value">846</div>
                  <div className="label">Notifications</div>
                </div>
                <div className="stat-item">
                  <div className="icondd">
                    <img
                      src="/img/Credit card.png"
                      style={{ borderRadius: "28px" }}
                    />
                  </div>
                  <div className="value">$84,472</div>
                  <div className="label">Payment</div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="dashboard__partners py-3 text-center">
          <div className="container-fluid">
            <div className="row justify-content-between align-items-center">
              <div className="col-auto">
                <img
                  src="/img/waverio.svg"
                  alt="weavio"
                  className="img-fluid"
                />
              </div>
              <div className="col-auto">
                <img
                  src="/img/squareStore.svg"
                  alt="squarestone"
                  className="img-fluid"
                />
              </div>
              <div className="col-auto">
                <img
                  src="/img/martino.svg"
                  alt="martino"
                  className="img-fluid"
                />
              </div>
              <div className="col-auto">
                <img
                  src="/img/virogan.svg"
                  alt="virogen"
                  className="img-fluid"
                />
              </div>
              <div className="col-auto">
                <img src="/img/vertex.svg" alt="vertex" className="img-fluid" />
              </div>
              <div className="col-auto">
                <img src="/img/aromix.svg" alt="aromix" className="img-fluid" />
              </div>
              <div className="col-auto">
                <img src="/img/fireli.svg" alt="freli" className="img-fluid" />
              </div>
              <div className="col-auto text-white">Natroma</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transaction;

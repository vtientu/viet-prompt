import { toast } from "react-toastify";
import "./transaction.css";
import { useEffect, useState } from "react";
import http from "../../api/http";

const Transaction = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await http.get("/payment/owner");
        if (response.status === 200) {
          setPayments(response.data.metadata);
        } else {
          toast.error(
            response.data.message || "Lỗi khi lấy danh sách giao dịch"
          );
        }
      } catch (error) {
        toast.error(
          error.response.data.message || "Lỗi khi lấy danh sách giao dịch"
        );
      }
    };

    fetchPayments();
  }, []);

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
                  {payments.map((payment) => (
                    <tr key={payment._id}>
                      <td>
                        <div className="user-info">
                          <div className="avatar"></div>
                          <div className="text">
                            <div
                              className="name"
                              style={{
                                margin: 0,
                              }}
                            >
                              {payment.user.fullName}
                            </div>
                            <div className="date">
                              {payment.paidAt
                                ? new Date(payment.paidAt).toLocaleDateString(
                                    "vi-VN",
                                    {
                                      day: "2-digit",
                                      month: "2-digit",
                                      year: "numeric",
                                    }
                                  )
                                : ""}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="status frontend">
                          {payment.status.toUpperCase()}
                        </span>
                      </td>
                      <td>{payment.package.name}</td>
                      <td>
                        <button className="details-btn">
                          {payment.note || "Không có ghi chú"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-between">
              <span className="title">Thống Kê Hoạt Động</span>
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

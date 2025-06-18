import { useParams } from "react-router-dom";
import "./packageDetails.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import http from "../../api/http";
import { useAuthStore } from "../../store/authStore";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PackageDetails = () => {
  const user = useAuthStore((state) => state.user);
  const { id } = useParams();
  const [packageDetail, setPackageDetail] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = async () => {
    try {
      const response = await http.put(`/package/favorite/${id}`);
      if (response.status === 200) {
        toast.success(
          isFavorite
            ? "Bỏ khỏi danh sách yêu thích thành công"
            : "Thêm vào danh sách yêu thích thành công"
        );
        setIsFavorite(!isFavorite);
      } else {
        toast.error(response.data.message || "Lỗi khi yêu thích gói dịch vụ");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Lỗi khi yêu thích gói dịch vụ"
      );
    }
  };

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await http.get(`/package/detail/${id}`);
        if (response.status === 200) {
          setPackageDetail(response.data.metadata.package);
        } else {
          toast.error(
            response.data.message || "Lỗi khi lấy thông tin gói dịch vụ"
          );
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Lỗi khi lấy thông tin gói dịch vụ"
        );
      }
    };
    fetchPackage();
  }, [id]);

  useEffect(() => {
    if (user && packageDetail) {
      setIsFavorite(user?.favorites?.includes(packageDetail?._id));
    }
  }, [user, packageDetail]);

  return (
    <section className="detail-prompt-section p-5">
      <div className="container-fluid">
        <div className="main-content-block">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-white mb-2">{packageDetail?.name}</h4>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center gap-2">
              <div className="main-content-block-button">
                <span className="badge2 rounded-pill badge-style p-2">
                  {packageDetail?.category?.name}
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              {packageDetail?.tags?.map((tag, index) => (
                <div className="button-title" key={index}>
                  <span className="badge badge-category p-2">{tag}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="row g-3 mb-4">
            <div className="col-lg-8">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                {packageDetail?.images?.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      width: "100%",
                      position: "relative",
                      aspectRatio: "16/9",
                    }}
                  >
                    <img
                      src={image.url}
                      key={index}
                      alt={packageDetail?.name}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-lg-4">
              <div className="artist-info-block text-white h-100">
                <div className="group-info d-flex align-items-center">
                  <img
                    src={
                      packageDetail?.user?.avatar || "/img/avatar-default.svg"
                    }
                    className="rounded-circle me-3"
                    alt={packageDetail?.user?.name}
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  />
                  <div>
                    <span
                      className="mb-0"
                      style={{ color: "#000", fontWeight: "bold" }}
                    >
                      {packageDetail?.user?.fullName}
                    </span>
                    <div
                      className=" small"
                      style={{ color: "#64656D", fontWeight: "bold" }}
                    >
                      @{packageDetail?.user?.email}
                    </div>
                  </div>
                </div>
                {user && (
                  <div className="d-flex flex-column">
                    <button
                      className="btn btn-add-favorite mb-3"
                      onClick={handleFavorite}
                    >
                      {isFavorite
                        ? "Bỏ khỏi danh sách yêu thích"
                        : "Thêm vào danh sách yêu thích"}
                    </button>
                    <button className="btn btn-create-prompt mb-3">
                      Tạo Prompt tương tự
                    </button>
                  </div>
                )}
                <div className="group-Exclusive-Version-Details">
                  <div className="verified-text">
                    Created:{" "}
                    {packageDetail?.createdAt
                      ? new Date(packageDetail.createdAt).toLocaleDateString(
                          "vi-VN",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          }
                        )
                      : "N/A"}
                  </div>
                  <div className="exclusive-details-block">
                    <div className="exclusive-title">
                      Exclusive Version Details
                    </div>
                    <div className="content-grid">
                      <div></div>
                      <div className="value">
                        <span className="lora-badge">PRICE</span>
                        <div>
                          {packageDetail?.price?.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </div>
                      </div>

                      <div>Category</div>
                      <div className="value">
                        {packageDetail?.category?.name}
                      </div>

                      <div>Description</div>
                      <div className="value">{packageDetail?.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="title-botom">
            <span className="mb-2">Crystalpunk Anime by ChronoKnight</span>
            <p className="background-p-style">Use at Strength: 0.8</p>
          </div>
        </div>

        <div className="press-section text-white text-center">
          <div className="d-flex justify-content-center flex-wrap gap-5 align-items-center">
            <img
              src="/img/loginAdmin/tnyt.png"
              alt="New York Times"
              height="24"
            />
            <img
              src="/img/loginAdmin/twpt.png"
              alt="Washington Post"
              height="24"
            />
            <img
              src="/img/loginAdmin/buni.png"
              alt="Business Insider"
              height="24"
            />
            <img src="/img/loginAdmin/abc.png" alt="ABC" height="24" />
            <img
              src="/img/loginAdmin/politico.png"
              alt="Politico"
              height="24"
            />
            <img src="/img/loginAdmin/tec.png" alt="TechCrunch" height="24" />
            <img
              src="/img/loginAdmin/fast.png"
              alt="Fast Company"
              height="24"
            />
          </div>
        </div>

        <div className="dashboard__partners py-3 text-center">
          <div className="container-fluid">
            <div className="row justify-content-between align-items-center">
              <div className="col-auto d-flex align-items-center justify-content-center">
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

export default PackageDetails;

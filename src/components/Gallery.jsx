import { useState } from "react";

const Gallery = () => {
  const images = [
    {
      url: "https://i1-vnexpress.vnecdn.net/2012/12/19/sam-2-1355844890.jpg?w=500&h=0&q=100&dpr=1&fit=crop&s=_6reB5QxfYjB8wEXl4wgSg",
      caption: "Tên lửa phòng không Việt Nam khai hỏa",
    },
    {
      url: "https://img.cand.com.vn/resize/800x800/NewFiles/Images/2022/12/19/may_bay-1671458134828.jpg",
      caption: "B-52 bị bắn rơi trên bầu trời Hà Nội",
    },
    {
      url: "https://nhandan.vn/special/HaNoi12ngaydem/assets/XnUhJ4vceO/a33-900x1252.webp",
      caption: "Phi công Mỹ bị bắt sau khi nhảy dù",
    },
    {
      url: "https://vnanet.vn/Data/Articles/2022/12/08/6482488/vna_potal_ky_niem_50_nam_chien_thang_%E2%80%9Cha_noi-dien_bien_phu_tren_khong%E2%80%9D_121972-122022_chien_thang_cua_y_chi_va_ban_linh_viet_nam_stand.jpg",
      caption: "Trận địa phòng không Việt Nam",
    },
    {
      url: "https://hnm.1cdn.vn/2019/12/16/nhipsonghanoi.hanoimoi.com.vn-uploads-images-tuandiep-2019-12-16-_ham.jpg",
      caption: "Người dân Hà Nội trong hầm trú ẩn",
    },
    {
      url: "https://vnanet.vn/Data/Articles/2022/12/08/6482496/vna_potal_ky_niem_50_nam_chien_thang_%E2%80%9Cha_noi-dien_bien_phu_tren_khong%E2%80%9D_121972-122022_chien_thang_cua_y_chi_va_ban_linh_viet_nam_stand.jpg",
      caption: "Không quân Nhân dân Việt Nam sẵn sàng chiến đấu",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (selectedImage === null) return;

    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % images.length);
    } else {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center" data-aos="fade-up">
          Hình Ảnh Lịch Sử
        </h2>

        <p
          className="text-center text-gray-700 max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
        >
          Những hình ảnh quý giá ghi lại khoảnh khắc lịch sử trong 12 ngày đêm
          bảo vệ bầu trời Hà Nội tháng 12 năm 1972.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              onClick={() => openLightbox(index)}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Image Container với aspect ratio cố định */}
              <div className="relative w-full h-64 md:h-72 bg-gray-200 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x300/cccccc/666666?text=Image+Not+Found";
                  }}
                />
                {/* Overlay hiệu ứng */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                {/* Icon zoom */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-90 rounded-full p-3">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 bg-gray-50">
                <p className="text-gray-800 font-medium text-sm md:text-base leading-relaxed">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full">
              <button
                className="absolute top-4 right-4 text-white p-2 z-10 hover:text-gray-300 bg-black bg-opacity-50 rounded-full transition-colors"
                onClick={closeLightbox}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="relative">
                <img
                  src={images[selectedImage].url}
                  alt={images[selectedImage].caption}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />

                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 p-3 text-white rounded-full hover:bg-opacity-90 transition-all"
                  onClick={() => navigateImage("prev")}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 p-3 text-white rounded-full hover:bg-opacity-90 transition-all"
                  onClick={() => navigateImage("next")}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <div className="text-white text-center mt-6 bg-black bg-opacity-50 rounded-lg p-4">
                <p className="text-lg font-medium">
                  {images[selectedImage].caption}
                </p>
                <p className="text-sm text-gray-300 mt-2">
                  Hình {selectedImage + 1} / {images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

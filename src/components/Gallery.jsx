import { useState } from "react";

const Gallery = () => {
  const images = [
    {
      url: "https://i.imgur.com/32CAHB3.jpg",
      caption: "Tên lửa phòng không Việt Nam khai hỏa",
    },
    {
      url: "https://i.imgur.com/9Fo6K12.jpg",
      caption: "B-52 bị bắn rơi trên bầu trời Hà Nội",
    },
    {
      url: "https://i.imgur.com/rYnCvLW.jpg",
      caption: "Phi công Mỹ bị bắt sau khi nhảy dù",
    },
    {
      url: "https://i.imgur.com/3DLbJGy.jpg",
      caption: "Trận địa phòng không Việt Nam",
    },
    {
      url: "https://i.imgur.com/pZvCHlk.jpg",
      caption: "Người dân Hà Nội trong hầm trú ẩn",
    },
    {
      url: "https://i.imgur.com/HwNpbQJ.jpg",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => openLightbox(index)}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="relative aspect-w-16 aspect-h-9">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <p className="text-gray-800 font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full">
              <button
                className="absolute top-2 right-2 text-white p-2 z-10 hover:text-gray-300"
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
                  className="w-full h-auto max-h-[80vh] object-contain"
                />

                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 text-white rounded-r-md hover:bg-opacity-75"
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
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 text-white rounded-l-md hover:bg-opacity-75"
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

              <div className="text-white text-center mt-4">
                <p className="text-lg">{images[selectedImage].caption}</p>
                <p className="text-sm text-gray-300">
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

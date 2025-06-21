import { useState } from "react";

const Memorial = () => {
  const [selectedMemorial, setSelectedMemorial] = useState(null);

  const memorials = [
    {
      name: "Bảo tàng Phòng không - Không quân",
      location: "173C Đ. Trường Chinh, Khương Mai, Thanh Xuân, Hà Nội",
      description:
        'Bảo tàng trưng bày các hiện vật quý giá về lịch sử phòng không - không quân Việt Nam, bao gồm mảnh vỡ B-52, tên lửa SAM-2, và các tư liệu về chiến thắng "Điện Biên Phủ trên không" tháng 12/1972.',
      image:
        "https://ik.imagekit.io/tvlk/blog/2023/08/bao-tang-phong-khong-khong-quan-1.jpeg?tr=q-70,c-at_max,w-500,h-250,dpr-2",
      detailedInfo: {
        history:
          "Được thành lập năm 1963, bảo tàng là nơi lưu giữ và trưng bày các hiện vật quý giá về lịch sử phòng không - không quân Việt Nam từ ngày thành lập đến nay.",
        collections: [
          "Mảnh vỡ máy bay B-52 bị bắn rơi trong chiến dịch 12 ngày đêm",
          "Tên lửa SAM-2 (SA-2 Guideline) - vũ khí chủ lực bắn rơi B-52",
          "Máy bay tiêm kích MiG-21, MiG-17 của Không quân Việt Nam",
          "Pháo phòng không các loại: 57mm, 37mm, 23mm",
          "Tài liệu, hình ảnh về các phi công anh hùng",
        ],
        visitInfo: {
          hours:
            "Thứ 2 - Chủ nhật: 8:00-11:00 & 13:00-16:00 (Tham quan ngoài trời đến 18:30)",
          ticket:
            "Người lớn: 10.000 VNĐ, Trẻ từ 6 tuổi: 5.000 VNĐ, Dưới 6 tuổi: 2.000 VNĐ",
          address: "173C Đ. Trường Chinh, Khương Mai, Thanh Xuân, Hà Nội",
        },
      },
    },
    {
      name: "Xác máy bay B-52 tại Hồ Hữu Tiệp",
      location: "Phường Ngọc Hà, Ba Đình, Hà Nội",
      description:
        "Xác máy bay B-52G số hiệu 58-0188 bị bắn rơi đêm 27/12/1972, rơi xuống khu vực hồ Hữu Tiệp. Đây là một trong 34 chiếc B-52 bị tiêu diệt trong chiến dịch, đã được Nhà nước công nhận là di tích lịch sử quốc gia.",
      image:
        "https://file3.qdnd.vn/data/images/0/2022/12/13/tuanson/6%201.jpg?dpi=150&quality=100&w=870",
      detailedInfo: {
        history:
          "Đêm 27/12/1972, chiếc B-52G số hiệu 58-0188 thuộc Phi đoàn 43 của Không quân Mỹ bị tên lửa SAM-2 bắn rơi và rơi xuống khu vực hồ Hữu Tiệp. Đây là di tích lịch sử quốc gia được Nhà nước công nhận.",
        collections: [
          "Xác máy bay B-52G nguyên vẹn với nhiều bộ phận còn lại",
          "Động cơ máy bay nặng hàng tấn",
          "Các mảnh vỡ kim loại được bảo tồn",
          "Bảng thông tin chi tiết về chiếc máy bay",
          "Khu vực tưởng niệm được chỉnh trang",
          "Biển báo di tích lịch sử quốc gia",
        ],
        visitInfo: {
          hours: "Mở cửa tự do 24/7",
          ticket: "Miễn phí tham quan",
          address: "Khu vực hồ Hữu Tiệp, phường Ngọc Hà, Ba Đình, Hà Nội",
        },
      },
    },
    {
      name: "Nhà tù Hỏa Lò - Nơi giam giữ phi công Mỹ",
      location: "Số 1 Hỏa Lò, Hoàn Kiếm, Hà Nội",
      description:
        "Nơi giam giữ các phi công Mỹ bị bắt sau khi nhảy dù từ các máy bay bị bắn rơi trong chiến dịch. Hiện trưng bày các hiện vật về cuộc sống của tù binh chiến tranh và điều kiện giam giữ nhân đạo.",
      image:
        "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/nha-tu-hoa-lo.jpg",
      detailedInfo: {
        history:
          "Nhà tù Hỏa Lò được xây dựng từ thời Pháp thuộc (1896-1954), sau đó được sử dụng để giam giữ tù binh chiến tranh Mỹ trong cuộc kháng chiến chống Mỹ.",
        collections: [
          "Phòng giam của các phi công Mỹ bị bắt",
          "Hiện vật về cuộc sống hàng ngày của tù binh",
          "Tài liệu về chính sách nhân đạo với tù binh",
          "Hình ảnh các phi công Mỹ trong thời gian bị giam",
          "Thư từ của tù binh gửi về quê nhà",
        ],
        visitInfo: {
          hours: "Thứ 2 - Chủ nhật: 8:00 - 17:00",
          ticket: "30.000 VNĐ/người lớn, 15.000 VNĐ/học sinh",
          address: "1 Hỏa Lò, Hoàn Kiếm, Hà Nội",
        },
      },
    },
    {
      name: "Đài tưởng niệm các liệt sĩ Khâm Thiên",
      location: "Phố Khâm Thiên, Đống Đa, Hà Nội",
      description:
        "Tưởng niệm 287 người dân vô tội thiệt mạng trong đêm 26/12/1972 khi B-52 Mỹ ném bom phố Khâm Thiên. Đây là minh chứng cho tội ác chiến tranh và ý chí bất khuất của nhân dân Hà Nội.",
      image:
        "https://cdn.xanhsm.com/2024/12/0e9dcf1a-dai-tuong-niem-kham-thien-thumb.jpg",
      detailedInfo: {
        history:
          "Đêm 26/12/1972, khu phố Khâm Thiên bị B-52 Mỹ ném bom dữ dội, làm 287 người dân vô tội thiệt mạng, hàng trăm nhà cửa bị phá hủy hoàn toàn.",
        collections: [
          "Đài tưởng niệm 287 nạn nhân vô tội",
          "Danh sách các nạn nhân được khắc trên đài",
          "Hình ảnh hiện trường sau vụ ném bom",
          "Tài liệu về quá trình tái thiết khu phố",
          "Lời chứng của những người sống sót",
        ],
        visitInfo: {
          hours: "Mở cửa tự do 24/7",
          ticket: "Miễn phí tham quan",
          address: "Phố Khâm Thiên, Đống Đa, Hà Nội",
        },
      },
    },
    {
      name: "Bảo tàng Chiến thắng B-52",
      location: "Số 157 Đội Cấn, Ba Đình, Hà Nội",
      description:
        "Bảo tàng chuyên đề về chiến thắng Điện Biên Phủ trên không, trưng bày các mảnh vỡ B-52, vũ khí phòng không, tài liệu và hình ảnh về 12 ngày đêm lịch sử. Nơi tôn vinh chiến công của các lực lượng phòng không Việt Nam.",
      image:
        "https://statics.vinpearl.com/Bao-tang-Chien-thang-B52-1_1674043927.jpeg",
      detailedInfo: {
        history:
          "Được thành lập nhân kỷ niệm 40 năm chiến thắng Điện Biên Phủ trên không (2012), bảo tàng chuyên trưng bày về chiến thắng lịch sử này.",
        collections: [
          "Mô hình tái hiện trận địa SAM-2",
          "Mảnh vỡ từ 34 chiếc B-52 bị bắn rơi",
          "Huy chương, bằng khen của các anh hùng",
          "Bản đồ tác chiến chi tiết 12 ngày đêm",
          "Phim tài liệu về chiến thắng",
        ],
        visitInfo: {
          hours: "Thứ 3, 4, 6, 7, CN: 8:00-11:00 & 13:30-16:30 (Thứ 2, 5 nghỉ)",
          ticket: "Miễn phí tham quan",
          address: "157 Đội Cấn, Ba Đình, Hà Nội",
        },
      },
    },
  ];

  const openModal = (memorial) => {
    setSelectedMemorial(memorial);
  };

  const closeModal = () => {
    setSelectedMemorial(null);
  };

  return (
    <section id="memorial" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center" data-aos="fade-up">
          Các Di Tích Lịch Sử
        </h2>

        <p
          className="text-center text-gray-700 max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
        >
          Những địa điểm lưu giữ ký ức về trận "Điện Biên Phủ trên không" - Nơi
          ghi dấu chiến tích hào hùng và nỗi đau của dân tộc trong 12 ngày đêm
          lịch sử.
        </p>

        <div className="space-y-16 md:space-y-20">
          {memorials.map((memorial, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                  <div className="relative w-full h-64 md:h-80 bg-gray-200 overflow-hidden">
                    <img
                      src={memorial.image}
                      alt={memorial.name}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/600x400/cccccc/666666?text=" +
                          encodeURIComponent(memorial.name);
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>

                    {/* Badge cho loại di tích */}
                    <div className="absolute top-4 left-4 bg-history-blue/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                      {memorial.name.includes("Bảo tàng")
                        ? "🏛️ Bảo tàng"
                        : memorial.name.includes("B-52") &&
                          !memorial.name.includes("Bảo tàng")
                        ? "✈️ Xác máy bay"
                        : memorial.name.includes("Đài")
                        ? "🕯️ Tưởng niệm"
                        : memorial.name.includes("Hỏa Lò")
                        ? "🏛️ Nhà tù lịch sử"
                        : "🏛️ Di tích"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-history-blue mb-3 leading-tight">
                  {memorial.name}
                </h3>
                <p className="text-victory-red font-semibold mb-4 text-base md:text-lg flex items-start">
                  <span className="mr-2">📍</span>
                  <span>{memorial.location}</span>
                </p>
                <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
                  {memorial.description}
                </p>

                {/* Thông tin bổ sung cho một số di tích */}
                {memorial.name.includes("Khâm Thiên") && (
                  <div className="bg-red-50 border-l-4 border-victory-red p-4 rounded-r-lg">
                    <p className="text-sm text-red-800 font-medium">
                      💔 Đêm đen tối nhất: 287 người dân vô tội thiệt mạng
                    </p>
                  </div>
                )}

                {memorial.name.includes("Chiến thắng B-52") && (
                  <div className="bg-green-50 border-l-4 border-monument-gold p-4 rounded-r-lg">
                    <p className="text-sm text-green-800 font-medium">
                      🏆 Tôn vinh chiến thắng: Nơi lưu giữ các chiến tích vĩ đại
                      của phòng không Việt Nam
                    </p>
                  </div>
                )}

                {memorial.name.includes("B-52") &&
                  !memorial.name.includes("Bảo tàng") && (
                    <div className="bg-green-50 border-l-4 border-monument-gold p-4 rounded-r-lg">
                      <p className="text-sm text-green-800 font-medium">
                        🎯 Chiến tích: Một trong 34 chiếc B-52 bị bắn rơi
                      </p>
                    </div>
                  )}

                {memorial.name.includes("Hỏa Lò") && (
                  <div className="bg-blue-50 border-l-4 border-history-blue p-4 rounded-r-lg">
                    <p className="text-sm text-blue-800 font-medium">
                      👥 Giam giữ nhân đạo: 472 phi công Mỹ bị bắt trong toàn
                      chiến tranh
                    </p>
                  </div>
                )}

                <button
                  onClick={() => openModal(memorial)}
                  className="inline-flex items-center text-history-blue font-medium hover:text-victory-red transition-colors bg-gray-50 hover:bg-gray-100 px-6 py-3 rounded-lg shadow-sm hover:shadow-md group"
                >
                  <span>Tìm hiểu thêm</span>
                  <svg
                    className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal chi tiết */}
        {selectedMemorial && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Header với hình ảnh */}
                <div className="relative h-64 md:h-80 bg-gray-200 overflow-hidden rounded-t-xl">
                  <img
                    src={selectedMemorial.image}
                    alt={selectedMemorial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {selectedMemorial.name}
                    </h2>
                    <p className="text-gray-200 flex items-center">
                      <span className="mr-2">📍</span>
                      {selectedMemorial.location}
                    </p>
                  </div>
                </div>

                {/* Nội dung chi tiết */}
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Cột trái: Lịch sử và bộ sưu tập */}
                    <div>
                      <h3 className="text-xl font-bold text-history-blue mb-4">
                        📚 Lịch Sử
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {selectedMemorial.detailedInfo.history}
                      </p>

                      <h3 className="text-xl font-bold text-history-blue mb-4">
                        🏛️ Hiện Vật & Trưng Bày
                      </h3>
                      <ul className="space-y-2">
                        {selectedMemorial.detailedInfo.collections.map(
                          (item, index) => (
                            <li
                              key={index}
                              className="flex items-start text-gray-700"
                            >
                              <span className="text-monument-gold mr-2 mt-1">
                                •
                              </span>
                              <span>{item}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Cột phải: Thông tin tham quan */}
                    <div>
                      <h3 className="text-xl font-bold text-history-blue mb-4">
                        ℹ️ Thông Tin Tham Quan
                      </h3>
                      <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                        <div>
                          <h4 className="font-semibold text-victory-red mb-2 flex items-center">
                            <span className="mr-2">🕒</span>
                            Giờ mở cửa
                          </h4>
                          <p className="text-gray-700">
                            {selectedMemorial.detailedInfo.visitInfo.hours}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-victory-red mb-2 flex items-center">
                            <span className="mr-2">💰</span>
                            Giá vé
                          </h4>
                          <p className="text-gray-700">
                            {selectedMemorial.detailedInfo.visitInfo.ticket}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-victory-red mb-2 flex items-center">
                            <span className="mr-2">📍</span>
                            Địa chỉ
                          </h4>
                          <p className="text-gray-700">
                            {selectedMemorial.detailedInfo.visitInfo.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Thống kê tổng quan */}
        <div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6"
          data-aos="fade-up"
        >
          <div className="bg-gradient-to-br from-victory-red/10 to-victory-red/5 p-6 rounded-xl text-center border border-victory-red/20">
            <div className="text-3xl font-bold text-victory-red mb-2">34</div>
            <p className="text-sm text-gray-700 font-medium">
              Máy bay B-52 bị bắn rơi
            </p>
          </div>
          <div className="bg-gradient-to-br from-history-blue/10 to-history-blue/5 p-6 rounded-xl text-center border border-history-blue/20">
            <div className="text-3xl font-bold text-history-blue mb-2">2</div>
            <p className="text-sm text-gray-700 font-medium">
              Bảo tàng chuyên đề
            </p>
          </div>
          <div className="bg-gradient-to-br from-monument-gold/10 to-monument-gold/5 p-6 rounded-xl text-center border border-monument-gold/20">
            <div className="text-3xl font-bold text-monument-gold mb-2">
              287
            </div>
            <p className="text-sm text-gray-700 font-medium">
              Người dân Khâm Thiên thiệt mạng
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-6 rounded-xl text-center border border-green-500/20">
            <div className="text-3xl font-bold text-green-600 mb-2">50</div>
            <p className="text-sm text-gray-700 font-medium">
              Năm kỷ niệm (2022)
            </p>
          </div>
        </div>

        <div
          className="mt-16 text-center bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 rounded-2xl border"
          data-aos="fade-up"
        >
          <h3 className="section-subtitle mb-6">Bảo Tồn Ký Ức Lịch Sử</h3>
          <p className="text-gray-700 max-w-4xl mx-auto text-sm md:text-base leading-relaxed mb-6">
            Các di tích lịch sử này không chỉ là minh chứng cho chiến thắng vĩ
            đại của dân tộc, mà còn là những bài học sâu sắc về giá trị hòa
            bình, về sự hy sinh của những người con Việt Nam và tinh thần bất
            khuất của nhân dân trong những ngày tháng khốc liệt.
          </p>
          <div className="text-center">
            <span className="inline-block bg-monument-gold/20 text-monument-gold px-4 py-2 rounded-full text-sm font-medium">
              "Để không bao giờ quên những ngày tháng 12/1972"
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memorial;

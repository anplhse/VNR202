const Memorial = () => {
  const memorials = [
    {
      name: "Bảo tàng Phòng không - Không quân",
      location: "Hà Nội",
      description:
        'Trưng bày các hiện vật, tài liệu về lịch sử phát triển của lực lượng Phòng không - Không quân Việt Nam, bao gồm nhiều hiện vật liên quan đến chiến thắng "Điện Biên Phủ trên không".',
      image: "https://i.imgur.com/vQFNeAc.jpg",
    },
    {
      name: "Khu di tích B-52 Hồ Hữu Tiến",
      location: "Quận Ngọc Hà, Hà Nội",
      description:
        "Nơi lưu giữ xác máy bay B-52 bị bắn rơi trong chiến dịch 12 ngày đêm. Đây là minh chứng sống động cho chiến thắng của quân và dân ta.",
      image: "https://i.imgur.com/l50MnXx.jpg",
    },
    {
      name: "Di tích B-52 hồ Hữu Tiến",
      location: "Quận Ba Đình, Hà Nội",
      description:
        "Máy bay B-52 bị bắn rơi và rơi xuống hồ Hữu Tiến, trở thành một di tích lịch sử quan trọng.",
      image: "https://i.imgur.com/o2JKgQZ.jpg",
    },
  ];

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
          ghi dấu chiến tích hào hùng của dân tộc.
        </p>

        <div className="space-y-12">
          {memorials.map((memorial, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={memorial.image}
                    alt={memorial.name}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-history-blue mb-2">
                  {memorial.name}
                </h3>
                <p className="text-victory-red font-medium mb-4">
                  {memorial.location}
                </p>
                <p className="text-gray-700 mb-4">{memorial.description}</p>
                <button className="inline-flex items-center text-history-blue font-medium hover:text-victory-red transition-colors">
                  Xem chi tiết
                  <svg
                    className="w-5 h-5 ml-1"
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

        <div className="mt-16 text-center" data-aos="fade-up">
          <h3 className="section-subtitle">Bảo Tồn Lịch Sử</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Các di tích lịch sử này không chỉ là minh chứng cho chiến thắng vĩ
            đại của dân tộc, mà còn là nơi giáo dục truyền thống yêu nước, tinh
            thần đấu tranh kiên cường cho thế hệ trẻ hôm nay và mai sau.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Memorial;

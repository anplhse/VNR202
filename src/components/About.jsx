import Game from "./Game";
import VideoSection from "./VideoSection";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center" data-aos="fade-up">
          Giới Thiệu
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div data-aos="fade-right">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src="https://mediabcb.mediatech.vn/upload/image/202212/medium/98859_11.jpg"
                alt="Máy bay B-52 của Mỹ"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div data-aos="fade-left">
            <h3 className="section-subtitle">Hà Nội 12 Ngày Đêm Khói Lửa</h3>
            <p className="mb-4 text-gray-700">
              Chiến dịch "Linebacker II" diễn ra từ ngày{" "}
              <strong>18 đến 29 tháng 12 năm 1972</strong>, là cuộc tập kích
              đường không chiến lược hủy diệt của đế quốc Mỹ nhằm vào Hà Nội,
              Hải Phòng và nhiều địa phương ở miền Bắc.
            </p>
            <p className="mb-4 text-gray-700">
              Trong 12 ngày đêm khói lửa, Mỹ đã tiến hành cuộc ném bom rải thảm,
              trút xuống một khối lượng bom đạn khổng lồ{" "}
              <strong>tương đương sức công phá của 2 quả bom nguyên tử</strong>{" "}
              đã ném xuống Hiroshima (Nhật Bản) tháng 8/1945.
            </p>
            <p className="text-gray-700">
              Quân và dân Hà Nội đã khiến{" "}
              <strong>
                "siêu pháo đài bay B-52" thất trận lần đầu tiên trong lịch sử
              </strong>{" "}
              và không quân Mỹ phải chịu thiệt hại nặng nề. Chiến thắng này đã
              tạo bước ngoặt và đòn quyết định buộc Mỹ phải ký kết Hiệp định
              Paris ngày 27/1/1973.
            </p>
          </div>
        </div>

        {/* Thống kê chính xác từ nguồn Báo Nhân Dân */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-4xl text-victory-red font-bold mb-3">197</div>
            <h4 className="font-semibold mb-2 text-history-blue">
              Máy bay B-52 tham gia
            </h4>
            <p className="text-gray-600">
              Số lượng máy bay ném bom chiến lược B-52 được Mỹ huy động trong
              chiến dịch
            </p>
          </div>

          <div
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-4xl text-victory-red font-bold mb-3">81</div>
            <h4 className="font-semibold mb-2 text-history-blue">
              Máy bay Mỹ bị bắn rơi
            </h4>
            <p className="text-gray-600">
              Trong đó có 34 máy bay B-52 và 47 máy bay các loại khác
            </p>
          </div>

          <div
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-4xl text-victory-red font-bold mb-3">12</div>
            <h4 className="font-semibold mb-2 text-history-blue">
              Ngày đêm chiến đấu
            </h4>
            <p className="text-gray-600">
              Khoảng thời gian diễn ra trận "Điện Biên Phủ trên không" lịch sử
            </p>
          </div>
        </div>

        {/* Bối cảnh lịch sử được cải thiện */}
        <div
          className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden"
          data-aos="fade-up"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-victory-red/20 via-transparent to-monument-gold/20"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center mb-8 text-monument-gold">
              🎯 Bối Cảnh Lịch Sử
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                  <span className="mr-3">🇺🇸</span>
                  Tình Hình Mỹ - Cuối Đường
                </h4>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>
                      Sau 8 năm đưa quân trực tiếp, liên tiếp thất bại quân sự
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>
                      Làn sóng biểu tình phản chiến trong nước dâng cao
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>Bị cộng đồng quốc tế lên án mạnh mẽ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>
                      Tìm cách rút quân "thể diện" và duy trì ảnh hưởng
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h4 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                  <span className="mr-3">🇻🇳</span>
                  Sự Chuẩn Bị Của Ta - Sẵn Sàng
                </h4>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">•</span>
                    <span>Đảng và Bác Hồ dự đoán trước âm mưu từ rất sớm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">•</span>
                    <span>Từ 1962, Bác giao nhiệm vụ theo dõi chặt B-52</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">•</span>
                    <span>Chủ động mở chiến dịch phòng không quy mô lớn</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">•</span>
                    <span>Phát huy sức mạnh chiến tranh nhân dân</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Video minh họa - Sử dụng VideoSection component mới */}
            <VideoSection />

            {/* Trích dẫn nổi bật */}
            <div className="text-center bg-gradient-to-r from-monument-gold/20 to-victory-red/20 p-6 rounded-xl border border-monument-gold/30">
              <blockquote className="text-xl md:text-2xl italic text-monument-gold mb-4">
                "Không có gì có thể làm khuất phục được ý chí sắt đá của nhân
                dân Việt Nam"
              </blockquote>
              <p className="text-gray-300">— Tướng Võ Nguyên Giáp</p>
            </div>
          </div>
        </div>

        {/* Mini Games Section - Sử dụng Game component mới */}
        <div className="mt-20" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-center mb-12 text-history-blue">
            🎮 Trải Nghiệm Tương Tác
          </h3>

          <Game />

          {/* Thông tin bổ sung về games */}
          <div className="mt-8 bg-gradient-to-r from-monument-gold/10 to-monument-gold/5 p-6 rounded-xl border border-monument-gold/20">
            <div className="text-center">
              <h5 className="text-lg font-bold text-monument-gold mb-3">
                🏆 Tính Năng Game
              </h5>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700 mb-4">
                <div className="flex items-center justify-center">
                  <span className="mr-2">🎮</span>
                  <span>2 Game mini có thể chơi ngay</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="mr-2">🎯</span>
                  <span>Điều khiển bằng chuột và bàn phím</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="mr-2">🏅</span>
                  <span>Hệ thống tính điểm theo thời gian thực</span>
                </div>
              </div>
              <div className="bg-green-100 border border-green-300 rounded-lg p-3">
                <p className="text-green-800 text-sm font-medium">
                  ✅ Game đã hoạt động! Bạn có thể chơi ngay bây giờ!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

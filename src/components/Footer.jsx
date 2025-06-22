const Footer = () => {
  return (
    <footer className="bg-history-blue text-white py-16">
      <div className="container mx-auto px-4">
        {/* Grid chính - 2 cột thay vì 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Cột 1: Thông tin chính */}
          <div>
            <h3 className="text-3xl font-bold mb-6 leading-snug">
              Hà Nội <span className="text-monument-gold">12</span> Ngày Đêm
            </h3>
            <p className="text-base leading-relaxed text-gray-200 mb-6">
              Trang thông tin về trận{" "}
              <strong>"Điện Biên Phủ trên không"</strong> – chiến thắng lịch sử
              của quân và dân Việt Nam trong cuộc kháng chiến chống Mỹ. Nơi lưu
              giữ giá trị lịch sử, lòng tự hào dân tộc và những tư liệu quý báu
              về một giai đoạn oanh liệt.
            </p>

            {/* Thống kê từ nguồn Báo Nhân Dân */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-monument-gold">34</div>
                <div className="text-sm">B-52 bị bắn rơi</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-monument-gold">81</div>
                <div className="text-sm">Tổng máy bay bị bắn rơi</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-monument-gold">12</div>
                <div className="text-sm">Ngày đêm lịch sử</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-monument-gold">287</div>
                <div className="text-sm">Nạn nhân Khâm Thiên</div>
              </div>
            </div>

            {/* Thông tin chiến dịch */}
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h4 className="text-lg font-semibold mb-3 text-monument-gold flex items-center">
                <span className="mr-2">⚔️</span>
                Chiến Dịch Linebacker II
              </h4>
              <div className="space-y-2 text-sm text-gray-200">
                <p>
                  <strong>Thời gian:</strong> 18-29/12/1972 (12 ngày đêm)
                </p>
                <p>
                  <strong>Khu vực:</strong> Hà Nội, Hải Phòng và một số địa
                  phương miền Bắc
                </p>
                <p>
                  <strong>Lực lượng Mỹ:</strong> 197 máy bay B-52 tham gia
                </p>
                <p>
                  <strong>Kết quả:</strong> 81 máy bay Mỹ bị bắn rơi (34 B-52)
                </p>
                <p>
                  <strong>Ý nghĩa:</strong> Buộc Mỹ quay lại bàn đàm phán Paris
                </p>
              </div>
            </div>
          </div>

          {/* Cột 2: Nguồn tham khảo chính thống */}
          <div>
            <h4 className="text-2xl font-semibold mb-6 text-monument-gold">
              📚 Nguồn Tham Khảo Chính Thống
            </h4>
            <div className="space-y-4">
              <a
                href="https://nhandan.vn/special/hanoi-1972-nhung-ky-uc-khong-the-nao-quen/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-monument-gold/30 group"
              >
                <div className="flex items-start">
                  <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">
                    📰
                  </span>
                  <div>
                    <h5 className="font-semibold text-white group-hover:text-monument-gold transition-colors">
                      Báo Nhân Dân
                    </h5>
                    <p className="text-sm text-gray-300">
                      Hà Nội 1972 - Những ký ức không thể nào quên
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://nhandan.vn/special/HaNoi12ngaydem/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-monument-gold/30 group"
              >
                <div className="flex items-start">
                  <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">
                    📰
                  </span>
                  <div>
                    <h5 className="font-semibold text-white group-hover:text-monument-gold transition-colors">
                      Báo Nhân Dân
                    </h5>
                    <p className="text-sm text-gray-300">
                      Hà Nội 12 ngày đêm khói lửa
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://special.nhandan.vn/HaNoi_DienBienPhutrenkhong_12ngaydem/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-monument-gold/30 group"
              >
                <div className="flex items-start">
                  <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">
                    📰
                  </span>
                  <div>
                    <h5 className="font-semibold text-white group-hover:text-monument-gold transition-colors">
                      Báo Nhân Dân
                    </h5>
                    <p className="text-sm text-gray-300">
                      Điện Biên Phủ trên không
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://vtv.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-monument-gold/30 group"
              >
                <div className="flex items-start">
                  <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">
                    📺
                  </span>
                  <div>
                    <h5 className="font-semibold text-white group-hover:text-monument-gold transition-colors">
                      Đài Truyền hình Việt Nam
                    </h5>
                    <p className="text-sm text-gray-300">
                      VTV - Kênh truyền hình quốc gia
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://vov.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-monument-gold/30 group"
              >
                <div className="flex items-start">
                  <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">
                    📻
                  </span>
                  <div>
                    <h5 className="font-semibold text-white group-hover:text-monument-gold transition-colors">
                      Đài Tiếng nói Việt Nam
                    </h5>
                    <p className="text-sm text-gray-300">
                      VOV - Đài phát thanh quốc gia
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Bài học lịch sử */}
            <div className="mt-8 bg-white/5 p-6 rounded-lg border border-white/10">
              <h4 className="text-lg font-semibold mb-3 text-monument-gold flex items-center">
                <span className="mr-2">🎓</span>
                Bài Học Lịch Sử
              </h4>
              <div className="space-y-2 text-sm text-gray-200">
                <p>• Sức mạnh của ý chí chiến đấu vì độc lập dân tộc</p>
                <p>• Tinh thần đoàn kết toàn dân tộc</p>
                <p>• Kết hợp sức mạnh dân tộc với sức mạnh thời đại</p>
                <p>• Nghệ thuật quân sự và chiến lược phòng thủ</p>
                <p>• Giá trị của hòa bình và tự do</p>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Phần cuối: Bản quyền đơn giản */}
        <div className="text-center">
          <div className="mb-4">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Hà Nội 12 Ngày Đêm - Điện Biên
              Phủ Trên Không
            </p>
            <p className="text-sm text-gray-400">Designed with ❤️ by Group 6</p>
          </div>

          {/* Quote cuối */}
          <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-monument-gold italic text-base">
              "Không có gì quý hơn độc lập tự do" - Chủ tịch Hồ Chí Minh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="bg-history-blue text-white py-16">
      <div className="container mx-auto px-4">
        {/* Grid chính */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Cột 1: Thông tin chính */}
          <div className="md:col-span-1">
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
              <div className="text-center p-3 bg-white/10 rounded-lg">
                <div className="text-xl font-bold text-monument-gold">34</div>
                <div className="text-xs">B-52 bị bắn rơi</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg">
                <div className="text-xl font-bold text-monument-gold">81</div>
                <div className="text-xs">Tổng máy bay bị bắn rơi</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg">
                <div className="text-xl font-bold text-monument-gold">12</div>
                <div className="text-xs">Ngày đêm lịch sử</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg">
                <div className="text-xl font-bold text-monument-gold">287</div>
                <div className="text-xs">Nạn nhân Khâm Thiên</div>
              </div>
            </div>
          </div>

          {/* Cột 2: Nguồn tham khảo chính thống */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-monument-gold">
              📚 Nguồn Tham Khảo Chính Thống
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://nhandan.vn/special/HaNoi12ngaydem/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-monument-gold transition-colors flex items-start"
                >
                  <span className="mr-2">📰</span>
                  <span>Báo Nhân Dân - Hà Nội 12 ngày đêm khói lửa</span>
                </a>
              </li>
              <li>
                <a
                  href="https://special.nhandan.vn/HaNoi_DienBienPhutrenkhong_12ngaydem/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-monument-gold transition-colors flex items-start"
                >
                  <span className="mr-2">📰</span>
                  <span>Báo Nhân Dân - Điện Biên Phủ trên không</span>
                </a>
              </li>
              <li>
                <a
                  href="https://qdnd.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-monument-gold transition-colors flex items-start"
                >
                  <span className="mr-2">📰</span>
                  <span>Báo Quân đội Nhân dân</span>
                </a>
              </li>
              <li>
                <a
                  href="https://vtv.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-monument-gold transition-colors flex items-start"
                >
                  <span className="mr-2">📺</span>
                  <span>Đài Truyền hình Việt Nam (VTV)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://vov.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-monument-gold transition-colors flex items-start"
                >
                  <span className="mr-2">📻</span>
                  <span>Đài Tiếng nói Việt Nam (VOV)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 3: Thông tin thực tế từ nguồn */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-monument-gold">
              📖 Tài Liệu Lịch Sử
            </h4>
            <div className="space-y-4 text-sm text-gray-200">
              <div>
                <p className="font-semibold mb-2">Kỷ yếu hội thảo khoa học:</p>
                <p>
                  "Điện Biên Phủ trên không" ý chí và niềm tin tất thắng (Hà
                  Nội, tháng 11/2022)
                </p>
              </div>

              <div>
                <p className="font-semibold mb-2">Sách tham khảo:</p>
                <p>Lịch sử Đảng bộ Thành phố Hà Nội (1930-2000) - NXB Hà Nội</p>
              </div>

              <div>
                <p className="font-semibold mb-2">Nguồn hình ảnh:</p>
                <p>TTXVN (Thông tấn xã Việt Nam)</p>
              </div>

              <div>
                <p className="font-semibold mb-2">Tài liệu truyền hình:</p>
                <p>
                  Biên niên sử truyền hình: Việt Nam thời đại Hồ Chí Minh (Năm
                  1972 - tập 2)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Thông tin thực tế về chiến dịch */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Thông tin chiến dịch */}
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-monument-gold flex items-center">
              <span className="mr-2">⚔️</span>
              Chiến Dịch Linebacker II
            </h4>
            <div className="space-y-2 text-sm text-gray-200">
              <p>
                <strong>Thời gian:</strong> 18-29/12/1972 (12 ngày đêm)
              </p>
              <p>
                <strong>Khu vực:</strong> Hà Nội, Hải Phòng và một số địa phương
                miền Bắc
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

          {/* Bài học lịch sử */}
          <div className="bg-white/5 p-6 rounded-lg">
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

        {/* Phần cuối: Bản quyền đơn giản */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <div className="mb-4">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Hà Nội 12 Ngày Đêm - Điện Biên
              Phủ Trên Không
            </p>
            <p className="text-sm text-gray-400">Designed with ❤️ by Group 6</p>
          </div>

          {/* Quote cuối */}
          <div className="mt-6 p-4 bg-white/5 rounded-lg">
            <p className="text-monument-gold italic text-xs">
              "Không có gì quý hơn độc lập tự do" - Chủ tịch Hồ Chí Minh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

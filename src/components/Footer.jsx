const Footer = () => {
  return (
    <footer className="bg-history-blue text-white py-12">
      <div className="container mx-auto px-4">
        {/* Grid 2 cột: Trái là mô tả, phải là liên kết */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cột trái: Nội dung chính */}
          <div className="max-w-md">
            <h3 className="text-3xl font-bold mb-6 leading-snug">
              Hà Nội <span className="text-monument-gold">12</span> Ngày Đêm
            </h3>
            <p className="text-base leading-relaxed text-gray-200">
              Trang thông tin về trận{" "}
              <strong>"Điện Biên Phủ trên không"</strong> – chiến thắng lịch sử
              của quân và dân Việt Nam trong cuộc kháng chiến chống Mỹ. Nơi lưu
              giữ giá trị lịch sử, lòng tự hào dân tộc và những tư liệu quý báu
              về một giai đoạn oanh liệt.
            </p>
          </div>

          {/* Cột phải: Liên kết */}
          <div className="text-right">
            <h3 className="text-xl font-semibold mb-4">Liên Kết</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-monument-gold transition-colors"
                >
                  Bảo tàng Lịch sử Quân sự Việt Nam
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-monument-gold transition-colors"
                >
                  Bảo tàng Phòng không - Không quân
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-monument-gold transition-colors"
                >
                  Thông tin di tích lịch sử
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-monument-gold transition-colors"
                >
                  Tài liệu tham khảo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Phần cuối: Bản quyền */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Hà Nội 12 Ngày Đêm
          </p>
          <p className="text-sm">Designed with ❤️ by Group 6</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

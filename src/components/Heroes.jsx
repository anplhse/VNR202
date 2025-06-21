const Heroes = () => {
  const heroes = [
    {
      name: "Phạm Tuân",
      role: "Phi công tiêm kích MiG-21",
      achievement:
        "Phi công đầu tiên bắn rơi máy bay B-52 bằng tên lửa không đối không ngày 27/12/1972",
      image:
        "https://cafefcdn.com/thumb_w/640/203337114487263232/2023/1/9/photo-8-1673222466890141183163.jpg",
    },
    {
      name: "Vũ Xuân Thiều",
      role: "Phi công tiêm kích MiG-21",
      achievement:
        "Anh hùng hy sinh ngày 28/12/1972 khi lao máy bay vào B-52, tinh thần quyết tử để bảo vệ Tổ quốc",
      image:
        "https://file3.qdnd.vn/data/images/0/2022/12/17/bichtrang/vu%20xuan%20thieu%201.jpg?dpi=150&quality=100&w=870",
    },
    {
      name: "Nguyễn Đức Soát",
      role: "Trung tướng, Phi công tiêm kích MiG-21 ",
      achievement:
        "Anh hùng LLVTND, nguyên Phó Tổng Tham mưu trưởng, phi công xuất sắc với 6 lần bắn rơi máy bay Mỹ",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Nguyen_Duc_Soat_2007.jpg/250px-Nguyen_Duc_Soat_2007.jpg",
    },
    {
      name: "Nguyễn Đình Kiên",
      role: "Đại tá, Sư đoàn trưởng 361 Phòng không",
      achievement:
        "Chỉ huy lực lượng pháo phòng không 57mm và 37mm, trực tiếp bắn rơi 4 máy bay B-52",
      image:
        "https://special.nhandan.vn/su-menh-bao-ve-bau-troi/assets/TQE7RC3Xzt/1158a12372d8cb8692c9-2048x1365.jpg",
    },
  ];

  return (
    <section id="heroes" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center" data-aos="fade-up">
          Những Anh Hùng
        </h2>

        <p
          className="text-center text-gray-700 max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
        >
          Vinh danh những anh hùng đã góp phần làm nên chiến thắng "Điện Biên
          Phủ trên không" lịch sử năm 1972 - từ phi công tiêm kích đến chỉ huy
          tên lửa, pháo phòng không.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {heroes.map((hero, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative w-full h-80 sm:h-72 lg:h-80 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  style={{
                    objectPosition: "center 20%",
                  }}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x400/4A5568/FFFFFF?text=" +
                      encodeURIComponent(hero.name);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute top-3 left-3 bg-victory-red/90 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                  {hero.role.includes("Phi công") ||
                  hero.role.includes("MiG-21")
                    ? "✈️ Phi công"
                    : "🎯 Sư đoàn trưởng"}
                </div>
              </div>

              <div className="p-5 lg:p-6">
                <h3 className="font-bold text-xl lg:text-2xl mb-2 text-history-blue leading-tight">
                  {hero.name}
                </h3>
                <p className="text-victory-red font-semibold mb-3 text-sm lg:text-base leading-snug">
                  {hero.role}
                </p>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed line-clamp-4">
                  {hero.achievement}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-0.5 bg-monument-gold rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-20 bg-white p-6 md:p-10 rounded-2xl shadow-lg"
          data-aos="fade-up"
        >
          <h3 className="section-subtitle text-center mb-8">
            Lực Lượng Tham Chiến
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="text-center p-6 bg-gradient-to-br from-history-blue/5 to-history-blue/10 rounded-xl border border-history-blue/20">
              <div className="text-3xl mb-3">✈️</div>
              <div className="text-xl font-bold text-history-blue mb-2">
                Không quân
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Phi công tiêm kích MiG-21, MiG-17 dũng cảm bảo vệ bầu trời Tổ
                quốc
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-victory-red/5 to-victory-red/10 rounded-xl border border-victory-red/20">
              <div className="text-3xl mb-3">🚀</div>
              <div className="text-xl font-bold text-victory-red mb-2">
                Tên lửa
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Trận địa SAM-2 đất đối không với độ chính xác cao
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-monument-gold/5 to-monument-gold/10 rounded-xl border border-monument-gold/20">
              <div className="text-3xl mb-3">🎯</div>
              <div className="text-xl font-bold text-monument-gold mb-2">
                Pháo binh
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pháo phòng không 57mm, 37mm, 23mm bảo vệ các mục tiêu quan trọng
              </p>
            </div>
          </div>

          <blockquote className="text-lg md:text-xl italic border-l-4 border-monument-gold pl-6 py-4 text-gray-800 bg-gray-50 rounded-r-lg">
            "Quyết tâm bắn rơi máy bay B-52 Mỹ, bảo vệ Thủ đô Hà Nội và miền Bắc
            XHCN"
            <footer className="text-right mt-3 text-gray-600 text-base font-medium">
              — Khẩu hiệu của bộ đội phòng không Việt Nam
            </footer>
          </blockquote>

          <p className="mt-8 text-gray-700 text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Với tinh thần <strong>"Không có gì quý hơn độc lập tự do"</strong>,
            quân và dân ta đã chiến đấu anh dũng, kiên cường và thông minh, đánh
            bại cuộc tập kích đường không chiến lược của đế quốc Mỹ, tạo nên một
            trong những trang sử vẻ vang nhất trong lịch sử chống ngoại xâm của
            dân tộc.
          </p>
        </div>

        <div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
          data-aos="fade-up"
        >
          <div className="bg-gradient-to-br from-victory-red to-red-600 text-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold mb-3">81</div>
            <div className="text-lg font-medium">Máy bay Mỹ bị bắn rơi</div>
            <p className="text-sm mt-2 opacity-90">Tổng số máy bay các loại</p>
          </div>
          <div className="bg-gradient-to-br from-history-blue to-blue-700 text-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold mb-3">34</div>
            <div className="text-lg font-medium">Máy bay B-52 bị tiêu diệt</div>
            <p className="text-sm mt-2 opacity-90">
              Pháo đài bay bất khả xâm phạm
            </p>
          </div>
          <div className="bg-gradient-to-br from-monument-gold to-yellow-600 text-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold mb-3">12</div>
            <div className="text-lg font-medium">Ngày đêm chiến thắng</div>
            <p className="text-sm mt-2 opacity-90">18-29/12/1972</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroes;

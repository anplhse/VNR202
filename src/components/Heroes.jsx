const Heroes = () => {
  const heroes = [
    {
      name: "Phạm Tuân",
      role: "Phi công tiêm kích",
      achievement: "Phi công đầu tiên bắn rơi máy bay B-52",
      image: "https://i.imgur.com/oJjB3W6.jpg",
    },
    {
      name: "Nguyễn Văn Bảy",
      role: "Phi công tiêm kích",
      achievement: "Anh hùng lực lượng vũ trang nhân dân",
      image: "https://i.imgur.com/PFWx7gM.jpg",
    },
    {
      name: "Đặng Tính",
      role: "Chỉ huy pháo phòng không",
      achievement: "Chỉ huy đơn vị bắn rơi nhiều máy bay Mỹ",
      image: "https://i.imgur.com/OXLyNxL.jpg",
    },
    {
      name: "Lê Thanh Đạo",
      role: "Chỉ huy trận địa tên lửa",
      achievement: "Góp phần bắn rơi nhiều B-52 trong chiến dịch",
      image: "https://i.imgur.com/9X7sHOQ.jpg",
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
          Phủ trên không" lịch sử năm 1972.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {heroes.map((hero, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl mb-1 text-history-blue">
                  {hero.name}
                </h3>
                <p className="text-victory-red font-medium mb-2">{hero.role}</p>
                <p className="text-gray-600">{hero.achievement}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-16 bg-white p-8 rounded-lg shadow-md"
          data-aos="fade-up"
        >
          <h3 className="section-subtitle text-center mb-6">
            Tinh Thần Dũng Cảm
          </h3>
          <blockquote className="text-lg italic border-l-4 border-monument-gold pl-4 py-2 text-gray-800">
            "Đánh là thắng. Quyết tâm bắn rơi máy bay B-52 Mỹ, bảo vệ Thủ đô Hà
            Nội và miền Bắc XHCN"
            <footer className="text-right mt-2 text-gray-600">
              — Khẩu hiệu của bộ đội phòng không Việt Nam
            </footer>
          </blockquote>

          <p className="mt-6 text-gray-700">
            Với tinh thần "Không có gì quý hơn độc lập tự do", quân và dân ta đã
            chiến đấu anh dũng, kiên cường và thông minh, đánh bại cuộc tập kích
            đường không chiến lược của đế quốc Mỹ, tạo nên một trong những trang
            sử vẻ vang nhất trong lịch sử chống ngoại xâm của dân tộc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heroes;

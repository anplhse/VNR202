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
            <h3 className="section-subtitle">
              Cuộc Tập Kích Đường Không Chiến Lược
            </h3>
            <p className="mb-4 text-gray-700">
              Chiến dịch "Linebacker II", hay còn được gọi là "Điện Biên Phủ
              trên không", là cuộc tập kích đường không chiến lược do không quân
              Hoa Kỳ tiến hành nhằm vào miền Bắc Việt Nam từ ngày 18 đến ngày 29
              tháng 12 năm 1972.
            </p>
            <p className="mb-4 text-gray-700">
              Trong 12 ngày đêm, lực lượng phòng không Việt Nam đã chiến đấu anh
              dũng, bắn rơi nhiều máy bay B-52 và các loại máy bay khác của Mỹ,
              buộc Hoa Kỳ phải chấm dứt ném bom và quay lại bàn đàm phán.
            </p>
            <p className="text-gray-700">
              Chiến thắng này được coi là một trong những chiến thắng vẻ vang
              nhất của quân và dân Việt Nam trong cuộc kháng chiến chống Mỹ,
              đồng thời là một thắng lợi có ý nghĩa quyết định, buộc Mỹ phải ký
              Hiệp định Paris năm 1973.
            </p>
          </div>
        </div>

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
      </div>
    </section>
  );
};

export default About;

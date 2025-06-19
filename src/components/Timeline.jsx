const Timeline = () => {
  const events = [
    {
      date: "18/12/1972",
      title: "Ngày đầu tiên của chiến dịch",
      description:
        "Mỹ mở đầu chiến dịch Linebacker II. Khoảng 129 máy bay B-52 và nhiều loại máy bay khác tham gia cuộc tập kích đầu tiên vào Hà Nội và Hải Phòng. 3 máy bay B-52 bị bắn rơi.",
    },
    {
      date: "19/12/1972",
      title: "Đêm thứ hai",
      description:
        "Mỹ tiếp tục tập kích với 93 máy bay B-52. Phòng không Việt Nam bắn rơi 6 máy bay B-52 và nhiều máy bay khác.",
    },
    {
      date: "20-21/12/1972",
      title: "Thay đổi chiến thuật",
      description:
        "Sau tổn thất nặng nề, không quân Mỹ buộc phải thay đổi chiến thuật tấn công, giảm số lượng máy bay B-52 trong mỗi đợt tấn công.",
    },
    {
      date: "22/12/1972",
      title: "Cuộc không kích dữ dội",
      description:
        "Không quân Mỹ tập trung tấn công vào các trận địa tên lửa ở Hà Nội với mật độ cao.",
    },
    {
      date: "24/12/1972",
      title: "Đêm Giáng sinh",
      description: "Mỹ tạm ngừng ném bom vào Hà Nội trong đêm Giáng sinh.",
    },
    {
      date: "26/12/1972",
      title: "Tái tập kích mạnh mẽ",
      description:
        "Mỹ tập trung lực lượng lớn tấn công trở lại, nhưng bị phòng không Việt Nam đánh trả mạnh mẽ.",
    },
    {
      date: "27-28/12/1972",
      title: "Những đòn cuối cùng",
      description:
        "Các đợt tấn công cuối cùng của không quân Mỹ tiếp tục bị phòng không Việt Nam đánh bại.",
    },
    {
      date: "29/12/1972",
      title: "Kết thúc chiến dịch",
      description:
        'Mỹ buộc phải chấm dứt các cuộc không kích bằng B-52 vào miền Bắc Việt Nam, đánh dấu chiến thắng "Điện Biên Phủ trên không".',
    },
    {
      date: "27/01/1973",
      title: "Hiệp định Paris",
      description:
        'Hiệp định Paris về chấm dứt chiến tranh và lập lại hòa bình ở Việt Nam được ký kết. Chiến thắng "Điện Biên Phủ trên không" đã góp phần quyết định vào kết quả này.',
    },
  ];

  return (
    <section id="timeline" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center" data-aos="fade-up">
          Dòng Thời Gian
        </h2>

        <p
          className="text-center text-gray-700 max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
        >
          Diễn biến chính của 12 ngày đêm lịch sử trong trận "Điện Biên Phủ trên
          không" - một chiến công vĩ đại của quân và dân ta trong cuộc kháng
          chiến chống Mỹ cứu nước.
        </p>

        <div className="max-w-4xl mx-auto mt-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="timeline-dot"></div>
              <div className="mb-1 font-bold text-monument-gold">
                {event.date}
              </div>
              <h4 className="text-xl font-semibold text-history-blue mb-2">
                {event.title}
              </h4>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

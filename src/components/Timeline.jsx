const Timeline = () => {
  const events = [
    {
      date: "1972-12-17",
      title: "Nixon ra lệnh tấn công miền Bắc Việt Nam",
      description:
        "Tổng thống Nixon ra lệnh mở cuộc tiến công bằng không quân vào miền Bắc Việt Nam, phát động chiến dịch Linebacker II với trọng tâm là sử dụng B-52",
    },
    {
      date: "1972-12-18",
      title: "Không quân Mỹ mở đầu đợt tập kích Hà Nội",
      description:
        "Không quân Mỹ bắt đầu ném bom Hà Nội và Hải Phòng, mở màn chiến dịch. Trong ngày đầu, ta bắn rơi 3 máy bay B-52, trong đó 2 chiếc rơi tại chỗ",
    },
    {
      date: "1972-12-19",
      title: "Quân đội Mỹ tiếp tục ném bom Hà Nội, Hải Phòng, Bắc Giang",
      description:
        "Địch tiếp tục ném bom các mục tiêu trọng yếu ở Hà Nội, Hải Phòng, Bắc Giang. Ta bắn rơi 1 B-52 và 1 máy bay chiến thuật F-4",
    },
    {
      date: "1972-12-20",
      title: "Không quân Mỹ đánh mạnh vào Hà Nội, Hải Phòng, Thái Nguyên",
      description:
        "Địch đánh mạnh vào Hà Nội, Hải Phòng, Thái Nguyên. Phòng không ta đáp trả quyết liệt, bắn rơi 7 B-52 (5 chiếc rơi tại chỗ) và 1 máy bay F-111",
    },
    {
      date: "1972-12-21",
      title: "Địch tăng cường tấn công ngày và đêm",
      description:
        "Không quân Mỹ tiếp tục dồn lực tấn công. Ta bắn rơi 11 máy bay, gồm 3 B-52.",
    },
    {
      date: "1972-12-22",
      title: "B-52 ném bom bệnh viện Bạch Mai",
      description:
        "Bệnh viện Bạch Mai bị ném bom, gây tổn thất lớn cho dân thường. Bắn rơi 2 B-52, thiệt hại dân sự lớn (28 người chết & bị thương).",
    },
    {
      date: "1972-12-23",
      title: "Địch đánh sân bay, khu dân cư Hà Nội, Hải Phòng",
      description:
        "Tập trung ném bom các vị trí chiến lược và khu vực đông dân cư. Ta bắn rơi 4 máy bay, gồm 2 B-52.",
    },
    {
      date: "1972-12-24",
      title: "Không kích vào các mục tiêu chiến lược",
      description:
        "Đợt không kích diễn ra đúng đêm Giáng sinh. Bắn rơi 5 máy bay, trong đó 1 B-52.",
    },
    {
      date: "1972-12-25",
      title: "Mỹ tạm ngừng ném bom dịp Noel",
      description:
        "Không quân Mỹ ngừng hoạt động trong 36 giờ nhân dịp Giáng sinh. Ta tranh thủ rút kinh nghiệm, củng cố lực lượng.",
    },
    {
      date: "1972-12-26",
      title: "Đợt tập kích dữ dội nhất: đánh Khâm Thiên, Hai Bà Trưng",
      description:
        "Đợt ném bom khốc liệt nhất, đặc biệt tại Khâm Thiên. Bắn rơi 8 B-52, 10 máy bay chiến thuật. 287 người chết ở Khâm Thiên.",
    },
    {
      date: "1972-12-27",
      title: "Tấn công dữ dội Hà Nội",
      description:
        "Hà Nội tiếp tục là mục tiêu trọng điểm. Bắn rơi 14 máy bay, gồm 5 B-52. Ngày này cũng ghi nhận phi công Phạm Tuân bắn rơi B-52 bằng tên lửa không đối không lần đầu tiên trong lịch sử",
    },
    {
      date: "1972-12-28",
      title: "Phi công Vũ Xuân Thiều hy sinh khi tiêu diệt B-52",
      description:
        "Một trong những anh hùng tiêu biểu của chiến dịch. Bắn rơi 3 máy bay, gồm 2 B-52.",
    },
    {
      date: "1972-12-29",
      title: "Đánh vòng ngoài Hà Nội: Thái Nguyên, Thanh Hóa",
      description:
        "Các đợt tấn công mở rộng ra ngoài vùng Hà Nội. Bắn rơi 2 máy bay (1 B-52, 1 F-4).",
    },
    {
      date: "1972-12-30",
      title: "Nixon tuyên bố ngừng ném bom miền Bắc",
      description:
        "Chiến dịch kết thúc. Mỹ ngừng ném bom và quay lại bàn đàm phán Paris.",
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

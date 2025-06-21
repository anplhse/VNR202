import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/188208/Originals/ha-noi-12-ngay-dem-game-tai-hien-tran-dien-bien-phu-tren-khong-day-ac-liet%205.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div
        className="container mx-auto px-4 z-10 text-center"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
          Hà Nội <span className="text-monument-gold">12</span> Ngày Đêm
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8">Điện Biên Phủ Trên Không</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Cuộc chiến lịch sử bảo vệ bầu trời Hà Nội tháng 12 năm 1972 - Chiến
          thắng hào hùng của quân và dân Việt Nam trước không quân Mỹ.
        </p>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="bg-victory-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full inline-block transition-colors cursor-pointer"
        >
          Khám Phá Ngay
        </Link>
      </div>
    </section>
  );
};

export default Hero;

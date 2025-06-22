import { useEffect, useRef, useState } from "react";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "Xin chào! Tôi là AI Assistant chuyên về trận 'Điện Biên Phủ trên không'. Tôi có thể giúp bạn tìm hiểu chi tiết về:",
      suggestions: [
        "📅 Diễn biến chi tiết 12 ngày đêm",
        "✈️ Máy bay B-52 và MiG-21",
        "🏆 Các anh hùng nổi bật",
        "📍 Địa điểm lịch sử",
        "📊 Thống kê chi tiết",
      ],
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Enhanced Knowledge base với thông tin CHÍNH XÁC từ nguồn đáng tin cậy
  const knowledgeBase = {
    "diễn biến": {
      keywords: [
        "diễn biến",
        "thời gian",
        "12 ngày",
        "timeline",
        "biến cố",
        "tổng quan",
        "toàn bộ",
        "linebacker ii",
        "chiến dịch",
      ],
      response: `📅 **DIỄN BIẾN TỔNG QUAN 12 NGÀY ĐÊM (18-29/12/1972):**

**🎯 Chiến dịch Linebacker II của Mỹ:**
• Bắt đầu: 18/12/1972 - Kết thúc: 29/12/1972
• Mục tiêu: Ép Việt Nam quay lại bàn đàm phán Paris
• Lực lượng: Máy bay B-52 Stratofortress từ căn cứ Guam và Thái Lan

**🏆 KẾT QUẢ CHIẾN THẮNG:**
• **34 máy bay B-52** bị bắn rơi (Việt Nam ghi nhận)
• **5 máy bay F-111** bị tiêu diệt
• Hàng chục máy bay khác bị hư hại
• Mỹ phải ngừng ném bom và quay lại đàm phán

**📍 Địa điểm chính:**
• Hà Nội, Hải Phòng, Thái Nguyên
• Bệnh viện Bạch Mai, phố Khâm Thiên
• Các sân bay: Nội Bài, Yên Bái, Kép`,
    },

    "ngày 18": {
      keywords: ["ngày 18", "18/12", "18 tháng 12", "ngày đầu"],
      response: `🗓️ **NGÀY 18/12/1972 - NGÀY ĐẦU TIÊN:**

**⏰ Thời gian:** Chiến dịch Linebacker II bắt đầu
**✈️ Lực lượng Mỹ:** 129 máy bay B-52 tham gia đợt đầu
**🎯 Mục tiêu:** Sân bay Nội Bài, Yên Bái, khu vực Hà Nội

**🏆 KẾT QUẢ:**
• **3 máy bay B-52** bị bắn rơi ngay ngày đầu
• 2 chiếc rơi tại chỗ, 1 chiếc bị hư hại nặng
• Mỹ bị sốc vì tổn thất nặng nề ngay từ đầu

**💪 Ý nghĩa:** Ngày mở màn cho cuộc kháng chiến chống "Điện Biên Phủ trên không"`,
    },

    "ngày 20": {
      keywords: ["ngày 20", "20/12", "20 tháng 12"],
      response: `🗓️ **NGÀY 20/12/1972 - ĐÊM KHỐC LIỆT:**

**🌙 Đặc điểm:** Một trong những đêm ác liệt nhất
**✈️ Hoạt động:** Mỹ tiếp tục ném bom dữ dội
**🎯 Mục tiêu:** Mở rộng ra Hải Phòng, Bắc Giang

**🏆 THÀNH TÍCH:**
• Nhiều B-52 bị bắn rơi trong đêm này
• Hệ thống phòng không Việt Nam hoạt động hiệu quả
• Tên lửa SAM-2 liên tục khai hỏa

**📊 Tình hình:** Mỹ bắt đầu nhận ra sức mạnh phòng không Việt Nam`,
    },

    "ngày 22": {
      keywords: ["ngày 22", "22/12", "22 tháng 12", "bạch mai"],
      response: `🗓️ **NGÀY 22/12/1972 - THẢM HỌA BỆNH VIỆN BẠCH MAI:**

**💔 SỰ KIỆN THẢM KỊCH:**
• Bệnh viện Bạch Mai bị ném bom trực tiếp
• Hàng trăm bệnh nhân và nhân viên y tế thương vong
• Tội ác chiến tranh nghiêm trọng của Mỹ

**🌍 PHẢN ỨNG QUỐC TẾ:**
• Dư luận thế giới lên án mạnh mẽ
• Nhiều quốc gia phản đối hành động của Mỹ
• Áp lực ngoại giao lớn lên Washington

**⚡ Ý nghĩa:** Ngày đánh dấu sự tàn bạo của chiến tranh`,
    },

    "ngày 26": {
      keywords: ["ngày 26", "26/12", "26 tháng 12", "khâm thiên"],
      response: `🗓️ **NGÀY 26/12/1972 - THẢM SÁT PHỐ KHÂM THIÊN:**

**💔 THẢM KỊCH DÂN THƯỜNG:**
• Phố Khâm Thiên (Hà Nội) bị ném bom
• Hàng chục gia đình bị thiệt mạng
• Nhiều ngôi nhà bị san phẳng

**👥 HỆ LUỸ:**
• Thương vong nặng nề trong dân thường
• Nhiều trẻ em và phụ nữ thiệt mạng
• Khu phố bị tàn phá hoàn toàn

**🌍 Ý nghĩa:** Minh chứng cho tội ác chiến tranh của Mỹ đối với dân thường vô tội`,
    },

    "ngày 27": {
      keywords: ["ngày 27", "27/12", "27 tháng 12", "phạm tuân"],
      response: `🗓️ **NGÀY 27/12/1972 - PHẠM TUÂN BẮN RƠI B-52:**

**🏆 CHIẾN CÔNG LỊCH SỬ:**
• **Phi công Phạm Tuân** (sinh 1947) lái MiG-21
• Bắn rơi B-52 bằng tên lửa không đối không
• Trở thành phi công đầu tiên trên thế giới làm được điều này

**⚡ CHI TIẾT TRẬN CHIẾN:**
• Thời gian: Khoảng 22:00 đêm 27/12
• Địa điểm: Vùng trời phía Tây Hà Nội
• Vũ khí: Tên lửa không đối không từ MiG-21

**🌟 Ý nghĩa:** Kỳ tích trong lịch sử không chiến thế giới, mở đầu cho những chiến thắng tiếp theo`,
    },

    "ngày 28": {
      keywords: ["ngày 28", "28/12", "28 tháng 12", "vũ xuân thiều"],
      response: `🗓️ **NGÀY 28/12/1972 - VŨ XUÂN THIỀU HY SINH ANH DŨNG:**

**💪 TINH THẦN CẢM TỬ:**
• **Thượng úy Vũ Xuân Thiều** (1945-1972) lái MiG-21
• Sau khi bắn 2 tên lửa, lao thẳng vào B-52
• Cùng tiêu diệt với máy bay địch tại Sơn La

**⏰ CHI TIẾT:**
• Thời gian: 21:58 đêm 28/12/1972
• Cất cánh từ: Sân bay Cẩm Thủy, Thanh Hóa
• Hy sinh tại: Vùng trời Sơn La

**🏅 DANH HIỆU:** Anh hùng Lực lượng vũ trang nhân dân (truy tặng 1994)
**🌟 Ý nghĩa:** Biểu tượng tinh thần quyết tử, quyết thắng của không quân Việt Nam`,
    },

    "ngày 29": {
      keywords: ["ngày 29", "29/12", "29 tháng 12", "kết thúc"],
      response: `🗓️ **NGÀY 29/12/1972 - NGÀY CUỐI CÙNG:**

**🏁 KẾT THÚC CHIẾN DỊCH:**
• Mỹ chính thức ngừng ném bom
• Tổng thiệt hại: 34 B-52 bị bắn rơi
• Kết thúc 12 ngày đêm kháng chiến anh dũng

**📊 THỐNG KÊ CUỐI CÙNG:**
• Tổng cộng hàng nghìn lượt máy bay Mỹ tham chiến
• Việt Nam bắn rơi hàng chục máy bay các loại
• Tổn thất của Mỹ vượt xa dự tính

**🏆 THẮNG LỢI:** "Điện Biên Phủ trên không" - Chiến thắng vang dội, buộc Mỹ quay lại đàm phán Paris`,
    },

    "máy bay": {
      keywords: ["máy bay", "b-52", "mig-21", "b52", "mig21", "chiến đấu cơ"],
      response: `✈️ **THÔNG TIN MÁY BAY TRONG TRẬN CHIẾN:**

**🇺🇸 MÁY BAY MỸ - B-52 STRATOFORTRESS:**
• Biệt danh: "Pháo đài bay"
• Tải trọng bom: 27 tấn
• Tầm bay: 16.000 km
• Vũ khí phòng thủ: Súng máy 12.7mm
• Điểm yếu: Cồng kềnh, khó cơ động

**🇻🇳 MÁY BAY VIỆT NAM - MiG-21:**
• Xuất xứ: Liên Xô
• Tốc độ tối đa: 2.175 km/h (Mach 2.05)
• Vũ khí: Tên lửa không đối không, pháo 23mm
• Ưu điểm: Nhanh, linh hoạt, khó phát hiện

**⚔️ CUỘC ĐỐI ĐẦU:**
• David vs Goliath của bầu trời
• Kỹ thuật cao vs Tinh thần chiến đấu
• Kết quả: MiG-21 thắng thuyết phục`,
    },

    "anh hùng": {
      keywords: [
        "anh hùng",
        "phạm tuân",
        "vũ xuân thiều",
        "phi công",
        "heroes",
      ],
      response: `🏆 **CÁC ANH HÙNG KHÔNG QUÂN:**

**🌟 PHẠM TUÂN (sinh 1947):**
• Quê quán: Quốc Tuấn, Thái Bình
• Thành tích: Phi công đầu tiên bắn rơi B-52
• Ngày 27/12/1972: Lái MiG-21 hạ B-52
• Sau này: Trở thành phi hành gia đầu tiên của Việt Nam (1980)

**💪 VŨ XUÂN THIỀU (1945-1972):**
• Quê quán: Hải An, Hải Hậu, Nam Định
• Học vấn: Sinh viên Đại học Bách khoa Hà Nội
• Ngày 28/12/1972: Cảm tử cùng B-52 tại Sơn La
• Danh hiệu: Anh hùng LLVTND (truy tặng 1994)

**👥 CÁC ANH HÙNG KHÁC:**
• Nguyễn Đức Soát - Chỉ huy phòng không
• Nguyễn Đình Kiên - Sĩ quan dẫn đường radar
• Hàng nghìn cán bộ, chiến sĩ tham gia`,
    },

    "địa điểm": {
      keywords: ["địa điểm", "bảo tàng", "di tích", "nơi tham quan", "museum"],
      response: `📍 **ĐỊA ĐIỂM LỊCH SỬ VÀ DI TÍCH:**

**🏛️ BẢO TÀNG KHÔNG QUÂN:**
• Địa chỉ: Đường Trường Chinh, Hà Nội
• Giờ mở: 8:00-11:30, 13:30-16:30 (trừ thứ 2)
• Trưng bày: MiG-21, tên lửa SAM-2, xác B-52

**🏥 BỆNH VIỆN BẠCH MAI:**
• Nơi bị ném bom ngày 22/12/1972
• Hiện tại: Bệnh viện lớn nhất Việt Nam
• Ý nghĩa: Biểu tượng tội ác chiến tranh

**🏘️ PHỐ KHÂM THIÊN:**
• Nơi bị thảm sát ngày 26/12/1972
• Hiện tại: Khu phố sầm uất của Hà Nội
• Ý nghĩa: Nhớ về những nạn nhân vô tội

**✈️ SÂN BAY NỘI BÀI:**
• Mục tiêu chính của B-52
• Hiện tại: Sân bay quốc tế lớn nhất VN`,
    },

    "thống kê": {
      keywords: ["thống kê", "số liệu", "con số", "statistics", "kết quả"],
      response: `📊 **THỐNG KÊ CHI TIẾT TRẬN CHIẾN:**

**🇺🇸 THIỆT HẠI CỦA MỸ:**
• **34 máy bay B-52** bị bắn rơi (VN ghi nhận)
• **5 máy bay F-111** bị tiêu diệt
• Hàng chục máy bay khác bị hư hại
• Hàng trăm phi công thiệt mạng/bị bắt

**🇻🇳 LỰC LƯỢNG VIỆT NAM:**
• **30 tiểu đoàn** tên lửa SAM-2
• **3 trung đoàn** không quân MiG-21
• Hàng nghìn khẩu pháo phòng không
• Hệ thống radar hiện đại

**⚡ HIỆU QUẢ TÁC CHIẾN:**
• Tỷ lệ bắn trúng SAM-2: ~3%
• Số tên lửa tiêu hao: ~1.000 quả
• Thời gian trận chiến: 12 ngày đêm
• Kết quả: Thắng lợi hoàn toàn`,
    },
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestResponse = (userInput) => {
    const input = userInput.toLowerCase();

    // Kiểm tra ngày cụ thể trước (ưu tiên cao nhất)
    if (
      input.includes("ngày 18") ||
      input.includes("18/12") ||
      input.includes("18 tháng 12")
    ) {
      return knowledgeBase["ngày 18"].response;
    }
    if (
      input.includes("ngày 20") ||
      input.includes("20/12") ||
      input.includes("20 tháng 12")
    ) {
      return knowledgeBase["ngày 20"].response;
    }
    if (
      input.includes("ngày 22") ||
      input.includes("22/12") ||
      input.includes("22 tháng 12") ||
      input.includes("bạch mai")
    ) {
      return knowledgeBase["ngày 22"].response;
    }
    if (
      input.includes("ngày 26") ||
      input.includes("26/12") ||
      input.includes("26 tháng 12") ||
      input.includes("khâm thiên")
    ) {
      return knowledgeBase["ngày 26"].response;
    }
    if (
      input.includes("ngày 27") ||
      input.includes("27/12") ||
      input.includes("27 tháng 12") ||
      input.includes("phạm tuân")
    ) {
      return knowledgeBase["ngày 27"].response;
    }
    if (
      input.includes("ngày 28") ||
      input.includes("28/12") ||
      input.includes("28 tháng 12") ||
      input.includes("vũ xuân thiều")
    ) {
      return knowledgeBase["ngày 28"].response;
    }
    if (
      input.includes("ngày 29") ||
      input.includes("29/12") ||
      input.includes("29 tháng 12")
    ) {
      return knowledgeBase["ngày 29"].response;
    }

    // Kiểm tra chủ đề cụ thể
    for (const [category, data] of Object.entries(knowledgeBase)) {
      const hasKeyword = data.keywords.some((keyword) =>
        input.includes(keyword)
      );
      if (hasKeyword) {
        return data.response;
      }
    }

    // Câu trả lời mặc định
    return `🤔 **Xin lỗi, tôi chưa hiểu câu hỏi của bạn.**

**🎯 Tôi có thể giúp bạn tìm hiểu về:**
• 📅 **Diễn biến từng ngày** (18-29/12/1972)
• ✈️ **Máy bay B-52 và MiG-21**
• 🏆 **Anh hùng Phạm Tuân, Vũ Xuân Thiều**
• 📍 **Địa điểm lịch sử và bảo tàng**
• 📊 **Thống kê và con số**

**Hãy hỏi tôi cụ thể hơn nhé! 😊**

*Ví dụ: "Diễn biến ngày 27/12", "Thông tin Phạm Tuân", "Bảo tàng nào có triển lãm?"*`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: inputMessage,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: "bot",
        content: findBestResponse(inputMessage),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion.replace(/^[📅✈️🏆📍📊]\s/, ""));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
            isOpen
              ? "bg-gray-600 hover:bg-gray-700"
              : "bg-gradient-to-r from-victory-red to-red-600 hover:from-red-600 hover:to-red-700 animate-pulse"
          }`}
        >
          {isOpen ? (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <div className="text-white text-center">
              <div className="text-2xl mb-1">🤖</div>
              <div className="text-xs font-bold">AI</div>
            </div>
          )}
        </button>

        {!isOpen && (
          <div className="absolute -top-12 right-0 bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap animate-bounce">
            Hỏi AI chi tiết!
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-history-blue to-blue-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h3 className="font-bold">AI </h3>
                <p className="text-xs opacity-90">
                  Chuyên gia chi tiết Điện Biên Phủ trên không
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white text-xl"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    message.type === "user"
                      ? "bg-victory-red text-white"
                      : "bg-white border border-gray-200 text-gray-800 shadow-sm"
                  }`}
                >
                  <div className="whitespace-pre-line text-sm leading-relaxed">
                    {message.content}
                  </div>

                  {/* Suggestions */}
                  {message.suggestions && (
                    <div className="mt-3 space-y-2">
                      {message.suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="block w-full text-left p-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-xs transition-colors border border-blue-200"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-2xl shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Hỏi chi tiết về diễn biến, anh hùng, máy bay..."
                className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-history-blue focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-history-blue hover:bg-blue-700 text-white p-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;

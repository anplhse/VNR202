import { useState } from "react";

const Game = () => {
  const [currentGame, setCurrentGame] = useState(null);

  const openGame = (gameType) => {
    setCurrentGame(gameType);
  };

  const closeGame = () => {
    setCurrentGame(null);
  };

  return (
    <>
      {/* Game Selection */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Game 1: Quiz Lịch Sử */}
        <div className="bg-gradient-to-br from-victory-red/5 to-victory-red/10 p-8 rounded-2xl border-2 border-victory-red/20 hover:border-victory-red/40 transition-all duration-300 hover:shadow-xl group">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
              🧠
            </div>
            <h4 className="text-2xl font-bold text-victory-red mb-3">
              Quiz Lịch Sử Điện Biên Phủ Trên Không
            </h4>
          </div>

          <div className="bg-white/50 p-4 rounded-lg mb-6">
            <h5 className="font-semibold text-history-blue mb-2">
              🎯 Nội dung quiz:
            </h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Ngày tháng và sự kiện quan trọng</li>
              <li>• Các anh hùng và nhân vật lịch sử</li>
              <li>• Số liệu thống kê chính xác</li>
              <li>• Địa điểm và di tích lịch sử</li>
            </ul>
          </div>

          <button
            className="w-full bg-victory-red hover:bg-red-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            onClick={() => openGame("history-quiz")}
          >
            🎮 Bắt Đầu Quiz
          </button>
        </div>

        {/* Game 2: Quiz Anh Hùng */}
        <div className="bg-gradient-to-br from-history-blue/5 to-history-blue/10 p-8 rounded-2xl border-2 border-history-blue/20 hover:border-history-blue/40 transition-all duration-300 hover:shadow-xl group">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
              🏆
            </div>
            <h4 className="text-2xl font-bold text-history-blue mb-3">
              Quiz Anh Hùng & Chiến Công
            </h4>
          </div>

          <div className="bg-white/50 p-4 rounded-lg mb-6">
            <h5 className="font-semibold text-victory-red mb-2">🎯 Chủ đề:</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Phi công Phạm Tuân và MiG-21</li>
              <li>• Anh hùng Vũ Xuân Thiều</li>
              <li>• Nguyễn Đức Soát và các phi công</li>
              <li>• Sư đoàn trưởng Nguyễn Đình Kiên</li>
            </ul>
          </div>

          <button
            className="w-full bg-history-blue hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            onClick={() => openGame("heroes-quiz")}
          >
            🎮 Khám Phá Anh Hùng
          </button>
        </div>
      </div>

      {/* Game Modals */}
      {currentGame === "history-quiz" && (
        <HistoryQuizGame onClose={closeGame} />
      )}
      {currentGame === "heroes-quiz" && <HeroesQuizGame onClose={closeGame} />}
    </>
  );
};

// Game 1: Quiz Lịch Sử
const HistoryQuizGame = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const questions = [
    {
      question:
        "Chiến dịch 'Điện Biên Phủ trên không' diễn ra trong bao nhiêu ngày?",
      options: ["10 ngày", "12 ngày", "15 ngày", "20 ngày"],
      correct: 1,
      explanation: "Chiến dịch diễn ra từ 18-29/12/1972, kéo dài 12 ngày đêm.",
    },
    {
      question:
        "Tên chính thức của chiến dịch không kích do Mỹ phát động là gì?",
      options: ["Rolling Thunder", " Linebacker II", " Arc Light", " Niagara"],
      correct: 1,
      explanation:
        " Linebacker II là tên chính thức của chiến dịch không kích miền Bắc Việt Nam tháng 12/1972.",
    },
    {
      question: "Có bao nhiêu máy bay B-52 bị bắn rơi trong 12 ngày đêm?",
      options: ["30 chiếc", "34 chiếc", "40 chiếc", "45 chiếc"],
      correct: 1,
      explanation:
        "Tổng cộng 34 máy bay B-52 bị bắn rơi, đây là con số chính thức từ các tài liệu lịch sử.",
    },
    {
      question:
        "Phi công nào đầu tiên bắn rơi B-52 bằng tên lửa không đối không?",
      options: ["Vũ Xuân Thiều", "Phạm Tuân", "Nguyễn Văn Cốc", "Trần Văn Lai"],
      correct: 1,
      explanation:
        "Phi công Phạm Tuân lái MiG-21 số hiệu 5121 bắn rơi B-52 đầu tiên vào đêm 27/12/1972.",
    },
    {
      question:
        "Bao nhiêu người dân vô tội thiệt mạng trong vụ ném bom phố Khâm Thiên?",
      options: ["200 người", "250 người", "287 người", "300 người"],
      correct: 2,
      explanation:
        "287 người dân vô tội thiệt mạng trong đêm 26/12/1972 khi B-52 ném bom phố Khâm Thiên.",
    },
    {
      question:
        "Loại tên lửa đất đối không chủ lực của Việt Nam trong chiến dịch là gì?",
      options: ["SA-3 Goa", "SAM-2 (SA-2)", "SA-6 Gainful", "SA-7 Grail"],
      correct: 1,
      explanation:
        "SAM-2 (SA-2 Guideline) là loại tên lửa đất đối không chủ lực bắn rơi B-52.",
    },
    {
      question:
        "Đêm nào được coi là khốc liệt nhất với 8 chiếc B-52 bị bắn rơi?",
      options: ["26/12/1972", "27/12/1972", "28/12/1972", "20/12/1972"],
      correct: 0,
      explanation:
        "Đêm 26/12/1972 là đêm khốc liệt nhất với 8 chiếc B-52 bị bắn rơi, đồng thời xảy ra thảm sát Khâm Thiên.",
    },
    {
      question: "Phi công Vũ Xuân Thiều hy sinh vào ngày nào?",
      options: ["26/12/1972", "27/12/1972", "28/12/1972", "29/12/1972"],
      correct: 2,
      explanation:
        "Phi công Vũ Xuân Thiều hy sinh anh dũng vào ngày 28/12/1972 khi lao máy bay vào B-52.",
    },
    {
      question:
        "Tổng số máy bay Mỹ các loại bị bắn rơi trong chiến dịch là bao nhiêu?",
      options: ["75 chiếc", "81 chiếc", "90 chiếc", "100 chiếc"],
      correct: 1,
      explanation:
        "Tổng cộng 81 máy bay Mỹ bị bắn rơi, trong đó có 34 B-52 và 47 máy bay các loại khác.",
    },
    {
      question: "Hiệp định nào được ký kết sau chiến thắng này?",
      options: [
        "Hiệp định Geneva",
        "Hiệp định Paris",
        "Hiệp định Potsdam",
        "Hiệp định Camp David",
      ],
      correct: 1,
      explanation:
        "Hiệp định Paris về chấm dứt chiến tranh và lập lại hòa bình ở Việt Nam được ký ngày 27/1/1973.",
    },
  ];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
    }

    setUserAnswers([
      ...userAnswers,
      {
        question: currentQuestion,
        selected: selectedAnswer,
        correct: questions[currentQuestion].correct,
        isCorrect: isCorrect,
      },
    ]);

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameFinished(true);
      }
    }, 2000);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameFinished(false);
    setUserAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "🏆 Xuất sắc! Bạn là chuyên gia lịch sử!";
    if (percentage >= 70) return "🎖️ Tốt lắm! Kiến thức vững vàng!";
    if (percentage >= 50) return "👍 Khá tốt! Hãy học thêm nhé!";
    return "📚 Cần cố gắng hơn! Đọc thêm tài liệu lịch sử!";
  };

  if (gameFinished) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold text-history-blue mb-4">
              🎉 Hoàn thành Quiz!
            </h2>
            <div className="text-6xl mb-4">
              {score >= 7 ? "🏆" : score >= 5 ? "🎖️" : "📚"}
            </div>
            <div className="text-4xl font-bold text-victory-red mb-2">
              {score}/{questions.length}
            </div>
            <div className="text-xl text-gray-700 mb-6">
              {getScoreMessage()}
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{score}</div>
                <div className="text-sm text-gray-600">Câu đúng</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600">
                  {questions.length - score}
                </div>
                <div className="text-sm text-gray-600">Câu sai</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {Math.round((score / questions.length) * 100)}%
                </div>
                <div className="text-sm text-gray-600">Điểm số</div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={resetGame}
                className="bg-victory-red hover:bg-red-600 text-white px-6 py-3 rounded-lg font-bold"
              >
                🔄 Chơi lại
              </button>
              <button
                onClick={onClose}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-bold"
              >
                Thoát
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-history-blue">
              🧠 Quiz Lịch Sử
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                Câu {currentQuestion + 1}/{questions.length}
              </span>
              <span className="text-sm text-gray-600">
                Điểm: {score}/{currentQuestion + (showResult ? 1 : 0)}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-victory-red h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    ((currentQuestion + (showResult ? 1 : 0)) /
                      questions.length) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
              {questions[currentQuestion].question}
            </h3>

            {/* Hiển thị tất cả các lựa chọn rõ ràng ngay từ đầu */}
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 font-medium ${
                    showResult
                      ? index === questions[currentQuestion].correct
                        ? "bg-green-100 border-green-500 text-green-800"
                        : index === selectedAnswer &&
                          selectedAnswer !== questions[currentQuestion].correct
                        ? "bg-red-100 border-red-500 text-red-800"
                        : "bg-white border-gray-300 text-gray-600"
                      : selectedAnswer === index
                      ? "bg-victory-red text-white border-victory-red shadow-md"
                      : "bg-white border-gray-300 text-gray-800 hover:border-victory-red hover:bg-victory-red/5 hover:shadow-sm"
                  }`}
                >
                  <span className="font-bold mr-3 text-lg">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span className="text-base">{option}</span>
                </button>
              ))}
            </div>

            {showResult && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 font-medium mb-2">
                  {selectedAnswer === questions[currentQuestion].correct
                    ? "✅ Chính xác!"
                    : "❌ Chưa đúng!"}
                </p>
                <p className="text-blue-700 text-sm">
                  <strong>Giải thích:</strong>{" "}
                  {questions[currentQuestion].explanation}
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null || showResult}
              className={`px-8 py-3 rounded-lg font-bold transition-all duration-200 ${
                selectedAnswer !== null && !showResult
                  ? "bg-victory-red hover:bg-red-600 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {currentQuestion + 1 === questions.length
                ? "Hoàn thành"
                : "Câu tiếp theo"}{" "}
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Game 2: Quiz Anh Hùng
const HeroesQuizGame = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const questions = [
    {
      question:
        "Phi công Phạm Tuân bay từ sân bay nào khi bắn rơi B-52 đầu tiên?",
      options: ["Nội Bài", "Yên Bái", "Cát Bi", "Gia Lam"],
      correct: 1,
      explanation:
        "Phi công Phạm Tuân cất cánh từ sân bay Yên Bái đêm 27/12/1972.",
    },
    {
      question: "Vũ Xuân Thiều được phong tặng danh hiệu gì?",
      options: [
        "Anh hùng LLVTND",
        "Chiến sĩ thi đua",
        "Anh hùng Lao động",
        "Bậc thầy không quân",
      ],
      correct: 0,
      explanation:
        "Vũ Xuân Thiều được phong tặng danh hiệu Anh hùng Lực lượng vũ trang nhân dân.",
    },
    {
      question: "Loại pháo nào được sử dụng nhiều nhất trong phòng không?",
      options: ["37mm", "57mm", "85mm", "100mm"],
      correct: 1,
      explanation:
        "Pháo 57mm là loại pháo phòng không được sử dụng nhiều nhất và hiệu quả cao.",
    },
    {
      question: "Phi công Vũ Xuân Thiều hy sinh theo cách nào?",
      options: [
        "Bị bắn rơi bởi tên lửa",
        "Lao máy bay vào B-52",
        "Nhảy dù không thành công",
        "Tai nạn khi hạ cánh",
      ],
      correct: 1,
      explanation:
        "Phi công Vũ Xuân Thiều đã lao máy bay MiG-21 vào B-52 để tiêu diệt mục tiêu, thể hiện tinh thần hy sinh cao cả.",
    },
    {
      question: "MiG-21 có tên mã NATO là gì?",
      options: ["Fishbed", "Flogger", "Fulcrum", "Flanker"],
      correct: 0,
      explanation:
        "MiG-21 có tên mã NATO là 'Fishbed', máy bay tiêm kích chủ lực của Việt Nam.",
    },
    {
      question: "Tên lửa SAM-2 có tầm bắn tối đa bao nhiêu km?",
      options: ["25 km", "30 km", "35 km", "40 km"],
      correct: 2,
      explanation:
        "Tên lửa SAM-2 có tầm bắn tối đa khoảng 35 km và độ cao 27 km.",
    },
    {
      question:
        "Đại tá nào chỉ huy Sư đoàn 361 Phòng không bắn rơi nhiều B-52?",
      options: ["Nguyễn Đình Kiên", "Võ Văn Vệ", "Phạm Văn Đồng", "Lê Văn Tám"],
      correct: 0,
      explanation:
        "Đại tá Nguyễn Đình Kiên, Sư đoàn trưởng 361 Phòng không, trực tiếp bắn rơi 4 máy bay B-52.",
    },
    {
      question: "B-52 có biệt danh là gì?",
      options: [
        "Flying Fortress",
        "Stratofortress",
        "Superfortress",
        "Sky Fortress",
      ],
      correct: 1,
      explanation:
        "B-52 có tên đầy đủ là B-52 Stratofortress, được gọi là 'pháo đài bay'.",
    },
    {
      question: "Phi công Phạm Tuân sau này trở thành gì?",
      options: ["Tướng không quân", "Phi hành gia", "Chính trị gia", "Giáo sư"],
      correct: 1,
      explanation:
        "Phạm Tuân sau này trở thành phi hành gia đầu tiên của Việt Nam (1980).",
    },
    {
      question: "Trung tướng Nguyễn Đức Soát nổi tiếng với vai trò gì?",
      options: [
        "Chỉ huy pháo phòng không",
        "Phi công tiêm kích MiG-21 ",
        "Tư lệnh tên lửa SAM-2",
        "Chỉ huy radar phòng không",
      ],
      correct: 1,
      explanation:
        "Trung tướng Nguyễn Đức Soát là phi công tiêm kích MiG-21 xuất sắc, được phong danh hiệu Ace với 6 lần bắn rơi máy bay Mỹ.",
    },
  ];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameFinished(true);
      }
    }, 2000);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameFinished(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "🏆 Anh hùng thực thụ! Kiến thức xuất sắc!";
    if (percentage >= 70) return "🎖️ Chiến sĩ giỏi! Hiểu biết sâu sắc!";
    if (percentage >= 50) return "👍 Tốt! Cần tìm hiểu thêm về anh hùng!";
    return "📚 Hãy đọc thêm về các anh hùng nhé!";
  };

  if (gameFinished) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold text-history-blue mb-4">
              🏆 Quiz Hoàn Thành!
            </h2>
            <div className="text-6xl mb-4">
              {score >= 8 ? "🏆" : score >= 6 ? "🎖️" : "📚"}
            </div>
            <div className="text-4xl font-bold text-victory-red mb-2">
              {score}/{questions.length}
            </div>
            <div className="text-xl text-gray-700 mb-6">
              {getScoreMessage()}
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{score}</div>
                <div className="text-sm text-gray-600">Câu đúng</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600">
                  {questions.length - score}
                </div>
                <div className="text-sm text-gray-600">Câu sai</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {Math.round((score / questions.length) * 100)}%
                </div>
                <div className="text-sm text-gray-600">Điểm số</div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={resetGame}
                className="bg-history-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold"
              >
                🔄 Chơi lại
              </button>
              <button
                onClick={onClose}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-bold"
              >
                Thoát
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-history-blue">
              🏆 Quiz Anh Hùng
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                Câu {currentQuestion + 1}/{questions.length}
              </span>
              <span className="text-sm text-gray-600">
                Điểm: {score}/{currentQuestion + (showResult ? 1 : 0)}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-history-blue h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    ((currentQuestion + (showResult ? 1 : 0)) /
                      questions.length) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
              {questions[currentQuestion].question}
            </h3>

            {/* Hiển thị tất cả các lựa chọn rõ ràng ngay từ đầu */}
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 font-medium ${
                    showResult
                      ? index === questions[currentQuestion].correct
                        ? "bg-green-100 border-green-500 text-green-800"
                        : index === selectedAnswer &&
                          selectedAnswer !== questions[currentQuestion].correct
                        ? "bg-red-100 border-red-500 text-red-800"
                        : "bg-white border-gray-300 text-gray-600"
                      : selectedAnswer === index
                      ? "bg-history-blue text-white border-history-blue shadow-md"
                      : "bg-white border-gray-300 text-gray-800 hover:border-history-blue hover:bg-history-blue/5 hover:shadow-sm"
                  }`}
                >
                  <span className="font-bold mr-3 text-lg">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span className="text-base">{option}</span>
                </button>
              ))}
            </div>

            {showResult && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 font-medium mb-2">
                  {selectedAnswer === questions[currentQuestion].correct
                    ? "✅ Chính xác!"
                    : "❌ Chưa đúng!"}
                </p>
                <p className="text-blue-700 text-sm">
                  <strong>Giải thích:</strong>{" "}
                  {questions[currentQuestion].explanation}
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null || showResult}
              className={`px-8 py-3 rounded-lg font-bold transition-all duration-200 ${
                selectedAnswer !== null && !showResult
                  ? "bg-history-blue hover:bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {currentQuestion + 1 === questions.length
                ? "Hoàn thành"
                : "Câu tiếp theo"}{" "}
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;

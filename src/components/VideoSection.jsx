import { useState } from "react";

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: "1",
      title: "Tình báo góp phần làm nên 'Điện Biên Phủ trên không'",
      description:
        "Vai trò quan trọng của lực lượng tình báo trong chiến thắng Điện Biên Phủ trên không",
      thumbnail: "https://img.youtube.com/vi/ysS-HHHzRBw/maxresdefault.jpg",
      embedId: "ysS-HHHzRBw",
      duration: "2:45",
      source: "VTV24",
    },
    {
      id: "2",
      title:
        "Trận ĐIỆN BIÊN PHỦ TRÊN KHÔNG: Mỹ đã THẢM BẠI trên bầu trời HÀ NỘI ra sao?",
      description:
        "Phân tích chi tiết về thất bại của không quân Mỹ trong trận Điện Biên Phủ trên không",
      thumbnail: "https://img.youtube.com/vi/A0uCy8Kk1sg/maxresdefault.jpg",
      embedId: "A0uCy8Kk1sg",
      duration: "50:12",
      source: "Spiderum",
    },
    {
      id: "3",
      title: "Hà Nội 12 ngày đêm khói lửa - bản hùng ca lịch sử",
      description:
        "Phim tài liệu kháng chiến chống Mỹ về 12 ngày đêm lịch sử của Hà Nội",
      thumbnail: "https://img.youtube.com/vi/2jEHGAuNnu0/maxresdefault.jpg",
      embedId: "2jEHGAuNnu0",
      duration: "28:04",
      source: "Nhân Dân",
    },
    {
      id: "4",
      title: "TOÀN CẢNH TRẬN ĐIỆN BIÊN PHỦ TRÊN KHÔNG 1972 (Bản Full)",
      description:
        "Tài liệu toàn cảnh về trận Điện Biên Phủ trên không - Chấn động địa cầu",
      thumbnail: "https://img.youtube.com/vi/7LpIaptAyA0/maxresdefault.jpg",
      embedId: "7LpIaptAyA0",
      duration: "1:29:05",
      source: "Vệ Quốc Quân",
    },
    {
      id: "5",
      title: "12 Ngày Đêm Hà Nội - Điện Biên Phủ Trên Không 1972 (Bản Full)",
      description:
        "Địa ngục kinh hoàng với B-52 Mỹ - Tài liệu lịch sử đầy đủ về 12 ngày đêm",
      thumbnail: "https://img.youtube.com/vi/t_j0truPdrw/maxresdefault.jpg",
      embedId: "t_j0truPdrw",
      duration: "41:39",
      source: "Việt Sử Giai Thoại",
    },
    {
      id: "6",
      title: "Anh hùng Phạm Tuân - Người châu Á đầu tiên bay vào Vũ trụ",
      description:
        "Câu chuyện về Phạm Tuân từ phi công anh hùng đến phi hành gia đầu tiên của Việt Nam",
      thumbnail: "https://img.youtube.com/vi/SqZlclnm_so/maxresdefault.jpg",
      embedId: "SqZlclnm_so",
      duration: "5:09",
      source: "VTV24",
    },
  ];

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer border border-white/20"
            onClick={() => openVideo(video)}
          >
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/480x360/dc2626/ffffff?text=Video+Lịch+Sử";
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-victory-red/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 5v10l8-5z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium border border-white/20">
                {video.duration}
              </div>
              <div className="absolute top-2 left-2 bg-victory-red/90 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium border border-white/20">
                🎬 Lịch sử
              </div>
            </div>

            <div className="p-4 bg-white/80 backdrop-blur-sm">
              <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-victory-red transition-colors duration-300 text-sm leading-tight">
                {video.title}
              </h3>
              <p className="text-gray-600 text-xs mb-3 line-clamp-2 leading-relaxed">
                {video.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600 bg-gray-100/80 backdrop-blur-sm px-2 py-1 rounded border border-gray-200/50">
                  📺 {video.source}
                </span>
                <span className="text-victory-red font-medium text-xs group-hover:underline">
                  Xem ngay →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden border border-white/20">
            <div className="flex justify-between items-center p-4 border-b border-gray-200/50 bg-white/90 backdrop-blur-sm">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-1 line-clamp-1">
                  {selectedVideo.title}
                </h2>
                <p className="text-sm text-gray-600 flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    📺 {selectedVideo.source}
                  </span>
                  <span className="flex items-center gap-1">
                    ⏱️ {selectedVideo.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    🎬 Tài liệu lịch sử
                  </span>
                </p>
              </div>
              <button
                onClick={closeVideo}
                className="text-gray-500 hover:text-gray-700 text-3xl font-bold p-2 hover:bg-gray-100/80 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                ×
              </button>
            </div>

            <div
              className="relative bg-black"
              style={{ paddingBottom: "56.25%", height: 0 }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1&rel=0&modestbranding=1`}
                title={selectedVideo.title}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-4 bg-gray-50/90 backdrop-blur-sm border-t border-gray-200/50">
              <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                <strong>Mô tả:</strong> {selectedVideo.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    📺 {selectedVideo.source}
                  </span>
                  <span className="flex items-center gap-1">
                    ⏱️ {selectedVideo.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    🎬 Tài liệu lịch sử
                  </span>
                </div>
                <button
                  onClick={closeVideo}
                  className="bg-gray-500/90 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 backdrop-blur-sm"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;

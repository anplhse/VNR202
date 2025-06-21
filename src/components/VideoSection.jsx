import { useState } from "react";

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: "1",
      title: "Chiến thắng Điện Biên Phủ trên không - Tài liệu lịch sử",
      description: "Phim tài liệu về 12 ngày đêm lịch sử tháng 12/1972",
      thumbnail: "https://img.youtube.com/vi/YQHsXMglC9A/maxresdefault.jpg",
      embedId: "YQHsXMglC9A",
      duration: "45:32",
    },
    {
      id: "2",
      title: "Lời kể của các anh hùng phòng không",
      description:
        "Những câu chuyện chưa kể từ các chiến sĩ tham gia trận đánh",
      thumbnail: "https://img.youtube.com/vi/9jK-NcRmVbw/maxresdefault.jpg",
      embedId: "9jK-NcRmVbw",
      duration: "28:15",
    },
    {
      id: "3",
      title: "Hà Nội 12 ngày đêm - Phim tài liệu VTV",
      description: "Phim tài liệu của Đài Truyền hình Việt Nam",
      thumbnail: "https://img.youtube.com/vi/oHg5SJYRHA0/maxresdefault.jpg",
      embedId: "oHg5SJYRHA0",
      duration: "52:08",
    },
    {
      id: "4",
      title: "Anh hùng Phạm Tuân - Phi công đầu tiên bắn rơi B-52",
      description: "Cuộc phỏng vấn với anh hùng Phạm Tuân",
      thumbnail: "https://img.youtube.com/vi/RgKAFK5djSk/maxresdefault.jpg",
      embedId: "RgKAFK5djSk",
      duration: "15:42",
    },
    {
      id: "5",
      title: "Khâm Thiên - Nỗi đau không quên",
      description: "Tài liệu về thảm kịch đêm 26/12/1972 tại phố Khâm Thiên",
      thumbnail: "https://img.youtube.com/vi/GtL1huin9EE/maxresdefault.jpg",
      embedId: "GtL1huin9EE",
      duration: "22:30",
    },
    {
      id: "6",
      title: "Tên lửa SAM-2 - Vũ khí huyền thoại",
      description: "Giới thiệu về hệ thống tên lửa đất đối không SAM-2",
      thumbnail: "https://img.youtube.com/vi/HXV3zeQKqGY/maxresdefault.jpg",
      embedId: "HXV3zeQKqGY",
      duration: "18:25",
    },
  ];

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="mb-10">
      <h4 className="text-xl font-bold text-monument-gold mb-4 text-center">
        📹 Video Tài Liệu Lịch Sử
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer group"
            onClick={() => openVideo(video)}
          >
            <div className="relative mb-3 overflow-hidden rounded-lg">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/320x180/4a5568/ffffff?text=Video+Thumbnail";
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white bg-opacity-90 rounded-full p-3">
                  <svg
                    className="w-6 h-6 text-victory-red"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                {video.duration}
              </div>
            </div>

            <h5 className="font-semibold text-white mb-2 text-sm leading-tight line-clamp-2">
              {video.title}
            </h5>
            <p className="text-gray-300 text-xs line-clamp-2">
              {video.description}
            </p>

            <button className="mt-3 w-full bg-victory-red hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
              ▶️ Xem ngay
            </button>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="relative">
              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
              >
                <svg
                  className="w-6 h-6"
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
              </button>

              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-t-xl"
                ></iframe>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-history-blue mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {selectedVideo.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>⏱️ Thời lượng: {selectedVideo.duration}</span>
                  <span>📺 Nguồn: YouTube</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;

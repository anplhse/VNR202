import { useEffect, useRef, useState } from "react";

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
        {/* Game 1: Phòng không Hà Nội */}
        <div className="bg-gradient-to-br from-victory-red/5 to-victory-red/10 p-8 rounded-2xl border-2 border-victory-red/20 hover:border-victory-red/40 transition-all duration-300 hover:shadow-xl group">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
              🚀
            </div>
            <h4 className="text-2xl font-bold text-victory-red mb-3">
              Phòng Không Hà Nội
            </h4>
            <p className="text-gray-700 mb-6">
              Trở thành chỉ huy trận địa SAM-2, bắn rơi máy bay B-52 xâm lược.
              Trải nghiệm cảm giác căng thẳng và vinh quang của các chiến sĩ
              phòng không.
            </p>
          </div>

          <div className="bg-white/50 p-4 rounded-lg mb-6">
            <h5 className="font-semibold text-history-blue mb-2">
              🎯 Nhiệm vụ:
            </h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Điều khiển tên lửa SAM-2 bắn B-52</li>
              <li>• Bảo vệ các mục tiêu quan trọng</li>
              <li>• Đạt được 34 chiếc B-52 bị bắn rơi</li>
              <li>• Trải nghiệm 12 ngày đêm lịch sử</li>
            </ul>
          </div>

          <button
            className="w-full bg-victory-red hover:bg-red-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            onClick={() => openGame("air-defense")}
          >
            🎮 Bắt Đầu Chiến Đấu
          </button>
        </div>

        {/* Game 2: Phi công MiG-21 */}
        <div className="bg-gradient-to-br from-history-blue/5 to-history-blue/10 p-8 rounded-2xl border-2 border-history-blue/20 hover:border-history-blue/40 transition-all duration-300 hover:shadow-xl group">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
              ✈️
            </div>
            <h4 className="text-2xl font-bold text-history-blue mb-3">
              Phi Công MiG-21
            </h4>
            <p className="text-gray-700 mb-6">
              Lái máy bay tiêm kích MiG-21, trở thành anh hùng như Phạm Tuân.
              Đối đầu trực tiếp với "pháo đài bay" B-52 trên bầu trời Hà Nội.
            </p>
          </div>

          <div className="bg-white/50 p-4 rounded-lg mb-6">
            <h5 className="font-semibold text-victory-red mb-2">
              🎯 Nhiệm vụ:
            </h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Điều khiển MiG-21 đánh chặn B-52</li>
              <li>• Sử dụng tên lửa không đối không</li>
              <li>• Tránh hỏa lực phòng thủ của địch</li>
              <li>• Trở thành phi công anh hùng</li>
            </ul>
          </div>

          <button
            className="w-full bg-history-blue hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            onClick={() => openGame("fighter-pilot")}
          >
            🎮 Cất Cánh Ngay
          </button>
        </div>
      </div>

      {/* Game Modals */}
      {currentGame === "air-defense" && <AirDefenseGame onClose={closeGame} />}
      {currentGame === "fighter-pilot" && (
        <FighterPilotGame onClose={closeGame} />
      )}
    </>
  );
};

// Game 1: Air Defense Game
const AirDefenseGame = ({ onClose }) => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameRunning, setGameRunning] = useState(false);
  const [missiles, setMissiles] = useState([]);
  const [bombers, setBombers] = useState([]);
  const [explosions, setExplosions] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const gameLoop = () => {
      // Clear canvas
      ctx.fillStyle = "#1a202c";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < 50; i++) {
        const x = (i * 37) % canvas.width;
        const y = (i * 23) % canvas.height;
        ctx.fillRect(x, y, 1, 1);
      }

      // Draw ground
      ctx.fillStyle = "#2d5016";
      ctx.fillRect(0, canvas.height - 50, canvas.width, 50);

      // Draw SAM launcher
      ctx.fillStyle = "#4a5568";
      ctx.fillRect(50, canvas.height - 80, 20, 30);
      ctx.fillStyle = "#e53e3e";
      ctx.fillRect(55, canvas.height - 85, 10, 10);

      // Update and draw bombers
      setBombers((prev) =>
        prev
          .map((bomber) => ({
            ...bomber,
            x: bomber.x + bomber.vx,
            y: bomber.y + bomber.vy,
          }))
          .filter((bomber) => bomber.x < canvas.width + 50)
      );

      bombers.forEach((bomber) => {
        ctx.fillStyle = "#718096";
        ctx.fillRect(bomber.x, bomber.y, 40, 8);
        ctx.fillRect(bomber.x + 10, bomber.y - 3, 20, 3);
      });

      // Update and draw missiles
      setMissiles((prev) =>
        prev
          .map((missile) => ({
            ...missile,
            x: missile.x + missile.vx,
            y: missile.y + missile.vy,
          }))
          .filter((missile) => missile.y > 0)
      );

      missiles.forEach((missile) => {
        ctx.fillStyle = "#f56565";
        ctx.fillRect(missile.x, missile.y, 3, 12);

        // Trail effect
        ctx.fillStyle = "#fed7d7";
        ctx.fillRect(missile.x - 1, missile.y + 12, 5, 8);
      });

      // Check collisions
      missiles.forEach((missile, mIndex) => {
        bombers.forEach((bomber, bIndex) => {
          const distance = Math.sqrt(
            Math.pow(missile.x - bomber.x - 20, 2) +
              Math.pow(missile.y - bomber.y - 4, 2)
          );

          if (distance < 25) {
            // Hit!
            setExplosions((prev) => [
              ...prev,
              {
                x: bomber.x + 20,
                y: bomber.y + 4,
                timer: 30,
              },
            ]);

            setScore((prev) => prev + 10);
            setBombers((prev) => prev.filter((_, i) => i !== bIndex));
            setMissiles((prev) => prev.filter((_, i) => i !== mIndex));
          }
        });
      });

      // Update and draw explosions
      setExplosions((prev) =>
        prev
          .map((exp) => ({
            ...exp,
            timer: exp.timer - 1,
          }))
          .filter((exp) => exp.timer > 0)
      );

      explosions.forEach((explosion) => {
        const size = 30 - explosion.timer;
        ctx.fillStyle = `rgba(255, ${255 - explosion.timer * 8}, 0, ${
          explosion.timer / 30
        })`;
        ctx.beginPath();
        ctx.arc(explosion.x, explosion.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (gameRunning) {
        animationId = requestAnimationFrame(gameLoop);
      }
    };

    if (gameRunning) {
      gameLoop();
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [gameRunning, missiles, bombers, explosions]);

  // Spawn bombers
  useEffect(() => {
    if (!gameRunning) return;

    const spawnBomber = () => {
      setBombers((prev) => [
        ...prev,
        {
          x: -50,
          y: 50 + Math.random() * 100,
          vx: 1 + Math.random(),
          vy: 0,
        },
      ]);
    };

    const interval = setInterval(spawnBomber, 2000);
    return () => clearInterval(interval);
  }, [gameRunning]);

  const startGame = () => {
    setGameRunning(true);
    setScore(0);
    setMissiles([]);
    setBombers([]);
    setExplosions([]);
  };

  const fireMissile = (e) => {
    if (!gameRunning) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const targetX = e.clientX - rect.left;
    const targetY = e.clientY - rect.top;

    const startX = 60;
    const startY = canvas.height - 85;

    const distance = Math.sqrt(
      Math.pow(targetX - startX, 2) + Math.pow(targetY - startY, 2)
    );
    const speed = 5;

    setMissiles((prev) => [
      ...prev,
      {
        x: startX,
        y: startY,
        vx: ((targetX - startX) / distance) * speed,
        vy: ((targetY - startY) / distance) * speed,
      },
    ]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-history-blue">
              🚀 Phòng Không Hà Nội
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <div className="text-lg font-semibold">Điểm: {score}</div>
            {!gameRunning ? (
              <button
                onClick={startGame}
                className="bg-victory-red hover:bg-red-600 text-white px-6 py-2 rounded-lg font-bold"
              >
                Bắt Đầu Chiến Đấu
              </button>
            ) : (
              <div className="text-sm text-gray-600">
                Click để bắn tên lửa SAM-2!
              </div>
            )}
          </div>

          <canvas
            ref={canvasRef}
            width={800}
            height={400}
            className="border border-gray-300 rounded-lg cursor-crosshair w-full"
            onClick={fireMissile}
          />

          <div className="mt-4 text-sm text-gray-600">
            <p>
              🎯 Hướng dẫn: Click chuột để bắn tên lửa SAM-2 vào máy bay B-52
            </p>
            <p>
              🏆 Mục tiêu: Bắn rơi càng nhiều B-52 càng tốt để bảo vệ Hà Nội!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Game 2: Fighter Pilot Game
const FighterPilotGame = ({ onClose }) => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameRunning, setGameRunning] = useState(false);
  const [player, setPlayer] = useState({ x: 100, y: 200 });
  const [bullets, setBullets] = useState([]);
  const [enemies, setEnemies] = useState([]);
  const [keys, setKeys] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeys((prev) => ({ ...prev, [e.key]: true }));
    };

    const handleKeyUp = (e) => {
      setKeys((prev) => ({ ...prev, [e.key]: false }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const gameLoop = () => {
      // Clear canvas
      ctx.fillStyle = "#4299e1";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw clouds
      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < 10; i++) {
        const x = (i * 80 + Date.now() / 50) % (canvas.width + 100);
        const y = 50 + ((i * 30) % 100);
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.arc(x + 20, y, 20, 0, Math.PI * 2);
        ctx.arc(x + 40, y, 15, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update player position
      setPlayer((prev) => {
        let newX = prev.x;
        let newY = prev.y;

        if (keys["ArrowLeft"] && newX > 0) newX -= 3;
        if (keys["ArrowRight"] && newX < canvas.width - 30) newX += 3;
        if (keys["ArrowUp"] && newY > 0) newY -= 3;
        if (keys["ArrowDown"] && newY < canvas.height - 20) newY += 3;

        return { x: newX, y: newY };
      });

      // Draw player (MiG-21)
      ctx.fillStyle = "#38a169";
      ctx.fillRect(player.x, player.y, 30, 15);
      ctx.fillRect(player.x + 25, player.y + 5, 10, 5);

      // Update bullets
      setBullets((prev) =>
        prev
          .map((bullet) => ({
            ...bullet,
            x: bullet.x + 8,
          }))
          .filter((bullet) => bullet.x < canvas.width)
      );

      // Draw bullets
      bullets.forEach((bullet) => {
        ctx.fillStyle = "#ffd700";
        ctx.fillRect(bullet.x, bullet.y, 8, 2);
      });

      // Update enemies
      setEnemies((prev) =>
        prev
          .map((enemy) => ({
            ...enemy,
            x: enemy.x - 2,
          }))
          .filter((enemy) => enemy.x > -60)
      );

      // Draw enemies (B-52)
      enemies.forEach((enemy) => {
        ctx.fillStyle = "#4a5568";
        ctx.fillRect(enemy.x, enemy.y, 50, 12);
        ctx.fillRect(enemy.x + 10, enemy.y - 3, 30, 3);
      });

      // Check collisions
      bullets.forEach((bullet, bIndex) => {
        enemies.forEach((enemy, eIndex) => {
          if (
            bullet.x > enemy.x &&
            bullet.x < enemy.x + 50 &&
            bullet.y > enemy.y &&
            bullet.y < enemy.y + 12
          ) {
            setScore((prev) => prev + 20);
            setBullets((prev) => prev.filter((_, i) => i !== bIndex));
            setEnemies((prev) => prev.filter((_, i) => i !== eIndex));
          }
        });
      });

      if (gameRunning) {
        animationId = requestAnimationFrame(gameLoop);
      }
    };

    if (gameRunning) {
      gameLoop();
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [gameRunning, player, bullets, enemies, keys]);

  // Spawn enemies
  useEffect(() => {
    if (!gameRunning) return;

    const spawnEnemy = () => {
      setEnemies((prev) => [
        ...prev,
        {
          x: 800,
          y: 50 + Math.random() * 200,
        },
      ]);
    };

    const interval = setInterval(spawnEnemy, 3000);
    return () => clearInterval(interval);
  }, [gameRunning]);

  // Auto fire
  useEffect(() => {
    if (!gameRunning) return;

    const fire = () => {
      setBullets((prev) => [
        ...prev,
        {
          x: player.x + 30,
          y: player.y + 7,
        },
      ]);
    };

    const interval = setInterval(fire, 500);
    return () => clearInterval(interval);
  }, [gameRunning, player]);

  const startGame = () => {
    setGameRunning(true);
    setScore(0);
    setPlayer({ x: 100, y: 200 });
    setBullets([]);
    setEnemies([]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-history-blue">
              ✈️ Phi Công MiG-21
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <div className="text-lg font-semibold">Điểm: {score}</div>
            {!gameRunning ? (
              <button
                onClick={startGame}
                className="bg-history-blue hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-bold"
              >
                Cất Cánh Ngay
              </button>
            ) : (
              <div className="text-sm text-gray-600">
                Dùng phím mũi tên để điều khiển!
              </div>
            )}
          </div>

          <canvas
            ref={canvasRef}
            width={800}
            height={400}
            className="border border-gray-300 rounded-lg w-full"
          />

          <div className="mt-4 text-sm text-gray-600">
            <p>🎯 Hướng dẫn: Dùng phím mũi tên (←↑↓→) để điều khiển MiG-21</p>
            <p>🚀 Máy bay sẽ tự động bắn tên lửa vào B-52</p>
            <p>🏆 Mục tiêu: Bắn rơi càng nhiều B-52 càng tốt!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;

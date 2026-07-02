"use client";

import React, { useEffect } from "react";

// Track clicks outside component scope so they survive React re-renders or router transitions
let clickTimestamps: number[] = [];
let resetDotsTimeout: NodeJS.Timeout | null = null;

export const SnakeEasterEgg: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // --- 1. TRIPLE-CLICK DETECTION ---
    const LOGO_SELECTOR = 'header nav a[href="#"]';

    const logoEl = document.querySelector(LOGO_SELECTOR);
    if (!logoEl) return;

    // Inject 3 indicator dots next to the logo
    let dotsContainer = document.getElementById("snake-dots-container");
    if (!dotsContainer) {
      dotsContainer = document.createElement("span");
      dotsContainer.id = "snake-dots-container";
      dotsContainer.className = "snake-click-dots inline-flex items-center gap-1.5 ml-3 z-20 pointer-events-none";
      dotsContainer.innerHTML = `
        <span class="snake-dot w-1.5 h-1.5 rounded-full bg-white/20 transition-all duration-300"></span>
        <span class="snake-dot w-1.5 h-1.5 rounded-full bg-white/20 transition-all duration-300"></span>
        <span class="snake-dot w-1.5 h-1.5 rounded-full bg-white/20 transition-all duration-300"></span>
      `;
      logoEl.appendChild(dotsContainer);
    }

    const updateDots = (count: number) => {
      if (!dotsContainer) return;
      const dots = dotsContainer.querySelectorAll(".snake-dot");
      dots.forEach((dot, idx) => {
        if (idx < count) {
          dot.classList.add("lit");
          (dot as HTMLElement).style.backgroundColor = "#1D9E75";
          (dot as HTMLElement).style.boxShadow = "0 0 8px #1D9E75";
        } else {
          dot.classList.remove("lit");
          (dot as HTMLElement).style.backgroundColor = "rgba(255, 255, 255, 0.2)";
          (dot as HTMLElement).style.boxShadow = "none";
        }
      });
    };

    const onLogoClick = (e: Event) => {
      // Prevent anchor link navigation (#) from re-rendering page and wiping click memory
      e.preventDefault();
      const now = Date.now();

      // Ignore duplicate synthetic/bubbling events within 80ms of a physical click
      const lastTimestamp = clickTimestamps[clickTimestamps.length - 1] || 0;
      if (now - lastTimestamp < 80) return;

      clickTimestamps.push(now);
      clickTimestamps = clickTimestamps.filter((t) => now - t <= 1600);

      if (resetDotsTimeout) clearTimeout(resetDotsTimeout);
      resetDotsTimeout = setTimeout(() => {
        if (clickTimestamps.length < 3) {
          clickTimestamps = [];
          updateDots(0);
        }
      }, 1600);

      updateDots(clickTimestamps.length);

      if (clickTimestamps.length >= 3) {
        clickTimestamps = [];
        updateDots(0);
        openSnakeGame();
      }
    };

    logoEl.addEventListener("click", onLogoClick);

    // --- 2. GAME ENGINE CONFIG & LEVELS ---
    interface Wall {
      x: number;
      y: number;
    }

    interface LevelConfig {
      id: number;
      name: string;
      speed: number;
      targetFood: number;
      color: string;
      wrap: boolean;
      walls: Wall[];
    }

    const LEVELS: LevelConfig[] = [
      { id: 1, name: "Rookie", speed: 160, targetFood: 5, color: "#1D9E75", wrap: true, walls: [] },
      { id: 2, name: "Hacker", speed: 120, targetFood: 8, color: "#378ADD", wrap: true, walls: [] },
      {
        id: 3,
        name: "Pro",
        speed: 85,
        targetFood: 10,
        color: "#7F77DD",
        wrap: false,
        walls: [
          ...Array.from({ length: 10 }, (_, i) => ({ x: i + 5, y: 6 })),
          ...Array.from({ length: 10 }, (_, i) => ({ x: i + 5, y: 13 })),
        ],
      },
      {
        id: 4,
        name: "Legend",
        speed: 55,
        targetFood: 12,
        color: "#D85A30",
        wrap: false,
        walls: [
          ...Array.from({ length: 12 }, (_, i) => ({ x: i + 4, y: 3 })),
          ...Array.from({ length: 12 }, (_, i) => ({ x: i + 4, y: 16 })),
          ...Array.from({ length: 4 }, (_, i) => ({ x: 4, y: i + 4 })),
          ...Array.from({ length: 4 }, (_, i) => ({ x: 15, y: i + 4 })),
          ...Array.from({ length: 4 }, (_, i) => ({ x: 4, y: i + 12 })),
          ...Array.from({ length: 4 }, (_, i) => ({ x: 15, y: i + 12 })),
        ],
      },
      {
        id: 5,
        name: "God Mode",
        speed: 32,
        targetFood: Infinity,
        color: "#E24B4A",
        wrap: false,
        walls: [
          ...Array.from({ length: 14 }, (_, i) => ({ x: i + 3, y: 9 })),
          ...Array.from({ length: 14 }, (_, i) => ({ x: 9, y: i + 3 })),
          { x: 5, y: 5 }, { x: 14, y: 5 }, { x: 5, y: 14 }, { x: 14, y: 14 },
        ],
      },
    ];

    let currentLevelIdx = 0;
    let score = 0;
    let personalBest = 0; // Tracked in JS variable
    let levelFoodEaten = 0;
    let snake: { x: number; y: number }[] = [];
    let dir = { x: 1, y: 0 };
    let nextDir = { x: 1, y: 0 };
    let food = { x: 15, y: 10 };
    let gameInterval: NodeJS.Timeout | null = null;
    let isGameOver = false;

    const openSnakeGame = () => {
      const container = document.getElementById("snake-game-container");
      if (!container) return;
      container.classList.remove("hidden");
      container.scrollIntoView({ behavior: "smooth", block: "center" });
      startLevel(0);
    };

    const startLevel = (lvlIdx: number) => {
      currentLevelIdx = lvlIdx;
      levelFoodEaten = 0;
      snake = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
      dir = { x: 1, y: 0 };
      nextDir = { x: 1, y: 0 };
      isGameOver = false;

      updateUI();
      spawnFood();
      if (gameInterval) clearInterval(gameInterval);
      gameInterval = setInterval(gameLoop, LEVELS[currentLevelIdx].speed);
    };

    const spawnFood = () => {
      const lvl = LEVELS[currentLevelIdx];
      let valid = false;
      while (!valid) {
        food = {
          x: Math.floor(Math.random() * 20),
          y: Math.floor(Math.random() * 20),
        };
        valid =
          !snake.some((s) => s.x === food.x && s.y === food.y) &&
          !lvl.walls.some((w) => w.x === food.x && w.y === food.y);
      }
    };

    const gameLoop = () => {
      if (isGameOver) return;
      dir = nextDir;
      const lvl = LEVELS[currentLevelIdx];

      const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

      // Check boundary or wrap
      if (lvl.wrap) {
        head.x = (head.x + 20) % 20;
        head.y = (head.y + 20) % 20;
      } else if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
        return handleGameOver();
      }

      // Check wall or self collision
      if (
        snake.some((s) => s.x === head.x && s.y === head.y) ||
        lvl.walls.some((w) => w.x === head.x && w.y === head.y)
      ) {
        return handleGameOver();
      }

      snake.unshift(head);

      // Check food
      if (head.x === food.x && head.y === food.y) {
        score += 10;
        levelFoodEaten++;
        if (score > personalBest) personalBest = score;
        updateUI();
        spawnFood();
      } else {
        snake.pop();
      }

      draw();
    };

    const drawRoundedRect = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      ctx.fill();
    };

    const draw = () => {
      const canvas = document.getElementById("snake-canvas") as HTMLCanvasElement | null;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const lvl = LEVELS[currentLevelIdx];
      const CELL = 20;

      // Dark background #0a0f1a
      ctx.fillStyle = "#0A0F1A";
      ctx.fillRect(0, 0, 400, 400);

      // Checkerboard alternating cells
      ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
      for (let r = 0; r < 20; r++) {
        for (let c = 0; c < 20; c++) {
          if ((r + c) % 2 === 0) ctx.fillRect(c * CELL, r * CELL, CELL, CELL);
        }
      }

      // Walls
      ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
      lvl.walls.forEach((w) => {
        ctx.fillRect(w.x * CELL, w.y * CELL, CELL, CELL);
      });

      // Food with soft outer ring
      ctx.fillStyle = "rgba(228, 75, 74, 0.25)";
      ctx.beginPath();
      ctx.arc(food.x * CELL + 10, food.y * CELL + 10, 10, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#E24B4A";
      ctx.beginPath();
      ctx.arc(food.x * CELL + 10, food.y * CELL + 10, 6.5, 0, Math.PI * 2);
      ctx.fill();

      // Snake rendering
      snake.forEach((s, idx) => {
        if (idx === 0) {
          ctx.fillStyle = lvl.color;
          drawRoundedRect(ctx, s.x * CELL + 1, s.y * CELL + 1, CELL - 2, CELL - 2, 5);
        } else {
          const opacity = Math.max(0.12, 1 - idx / snake.length);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fillRect(s.x * CELL + 1, s.y * CELL + 1, CELL - 2, CELL - 2);
        }
      });
    };

    const handleGameOver = () => {
      isGameOver = true;
      if (gameInterval) clearInterval(gameInterval);
      showOverlay("Game Over", `Final Score: ${score}`, true);
    };

    const handleLevelComplete = () => {
      isGameOver = true;
      if (gameInterval) clearInterval(gameInterval);
      const nextLvlName = LEVELS[currentLevelIdx + 1].name;
      showOverlay("Level Complete", `Moving to ${nextLvlName} (Score: ${score})`, false);
    };

    const showOverlay = (title: string, subtitle: string, isRetry: boolean) => {
      const overlay = document.getElementById("snake-overlay");
      const titleEl = document.getElementById("snake-overlay-title");
      const subEl = document.getElementById("snake-overlay-subtitle");
      const retryBtn = document.getElementById("snake-retry-btn");
      const nextBtn = document.getElementById("snake-next-btn");

      if (titleEl) titleEl.innerText = title;
      if (subEl) subEl.innerText = subtitle;

      if (isRetry) {
        retryBtn?.classList.remove("hidden");
        if (currentLevelIdx === LEVELS.length - 1) {
          nextBtn?.classList.add("hidden");
        } else {
          nextBtn?.classList.remove("hidden");
        }
      } else {
        retryBtn?.classList.add("hidden");
        nextBtn?.classList.remove("hidden");
      }

      overlay?.classList.remove("hidden");
    };

    const updateUI = () => {
      const lvl = LEVELS[currentLevelIdx];
      const lvlPill = document.getElementById("snake-level-pill");
      const scorePill = document.getElementById("snake-score-pill");
      const statusMsg = document.getElementById("snake-status-msg");

      if (lvlPill) {
        lvlPill.innerText = `Lvl ${lvl.id}: ${lvl.name}`;
        lvlPill.style.color = lvl.color;
        lvlPill.style.borderColor = lvl.color;
      }
      if (scorePill) scorePill.innerText = `Score: ${score}`;
      if (statusMsg) {
        statusMsg.innerText = `Target speed: ${lvl.speed}ms // Rules: ${lvl.wrap ? "Wrap Edges" : "Lethal Borders"}`;
      }

      const liveScoreEl = document.getElementById("snake-live-score");
      const pbEl = document.getElementById("snake-personal-best");
      if (liveScoreEl) liveScoreEl.innerText = score.toString();
      if (pbEl) pbEl.innerText = personalBest.toString();

      LEVELS.forEach((l, i) => {
        const el = document.getElementById(`snake-lvl-${l.id}`);
        if (!el) return;
        el.className = "level-item cursor-pointer hover:bg-white/[0.08] transition-all";
        if (i === currentLevelIdx) {
          el.classList.add("active");
        } else {
          el.style.color = "rgba(255, 255, 255, 0.6)";
        }
      });

      document.getElementById("snake-overlay")?.classList.add("hidden");
    };

    const onClose = () => {
      if (gameInterval) clearInterval(gameInterval);
      document.getElementById("snake-game-container")?.classList.add("hidden");
    };

    const onRetry = () => startLevel(currentLevelIdx);
    const onNext = () => {
      if (currentLevelIdx < LEVELS.length - 1) startLevel(currentLevelIdx + 1);
      else startLevel(0);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const container = document.getElementById("snake-game-container");
      if (!container || container.classList.contains("hidden")) return;

      if (["ArrowUp", "KeyW"].includes(e.code) && dir.y !== 1) {
        nextDir = { x: 0, y: -1 };
        e.preventDefault();
      } else if (["ArrowDown", "KeyS"].includes(e.code) && dir.y !== -1) {
        nextDir = { x: 0, y: 1 };
        e.preventDefault();
      } else if (["ArrowLeft", "KeyA"].includes(e.code) && dir.x !== 1) {
        nextDir = { x: -1, y: 0 };
        e.preventDefault();
      } else if (["ArrowRight", "KeyD"].includes(e.code) && dir.x !== -1) {
        nextDir = { x: 1, y: 0 };
        e.preventDefault();
      }
    };

    const closeBtn = document.getElementById("snake-close-btn");
    const retryBtn = document.getElementById("snake-retry-btn");
    const nextBtn = document.getElementById("snake-next-btn");

    closeBtn?.addEventListener("click", onClose);
    retryBtn?.addEventListener("click", onRetry);
    nextBtn?.addEventListener("click", onNext);
    window.addEventListener("keydown", onKeyDown);

    const onLevelHandlers: (() => void)[] = [];
    LEVELS.forEach((l, i) => {
      const el = document.getElementById(`snake-lvl-${l.id}`);
      if (el) {
        const handler = () => startLevel(i);
        el.addEventListener("click", handler);
        onLevelHandlers.push(handler);
      }
    });

    return () => {
      logoEl?.removeEventListener("click", onLogoClick);
      closeBtn?.removeEventListener("click", onClose);
      retryBtn?.removeEventListener("click", onRetry);
      nextBtn?.removeEventListener("click", onNext);
      window.removeEventListener("keydown", onKeyDown);
      LEVELS.forEach((l, i) => {
        const el = document.getElementById(`snake-lvl-${l.id}`);
        if (el && onLevelHandlers[i]) el.removeEventListener("click", onLevelHandlers[i]);
      });
      if (gameInterval) clearInterval(gameInterval);
    };
  }, []);

  return (
    <div id="snake-game-container" className="snake-easter-egg hidden" aria-hidden="true">
      <div className="snake-panel">
        {/* Topbar */}
        <div className="snake-topbar">
          <div className="snake-brand">
            <span className="status-indicator" />
            <span className="font-mono text-xs uppercase tracking-widest text-white/80">
              snake.exe — secret mode
            </span>
          </div>
          <div className="snake-pills">
            <span id="snake-level-pill" className="snake-pill level-pill">
              Lvl 1: Rookie
            </span>
            <span id="snake-score-pill" className="snake-pill score-pill">
              Score: 0
            </span>
            <button id="snake-close-btn" className="snake-close" aria-label="Close Game">
              ✕
            </button>
          </div>
        </div>

        {/* Main Game Area */}
        <div className="snake-body">
          {/* Canvas Wrapper */}
          <div className="snake-canvas-wrapper">
            <canvas id="snake-canvas" width="400" height="400" />
            {/* Overlay Screen (Level Complete / Game Over) */}
            <div id="snake-overlay" className="snake-overlay hidden">
              <h3 id="snake-overlay-title">Level Complete</h3>
              <p id="snake-overlay-subtitle">Score: 0</p>
              <div className="snake-overlay-actions">
                <button id="snake-retry-btn" className="snake-btn retry hidden">
                  Retry Level
                </button>
                <button id="snake-next-btn" className="snake-btn next">
                  Next Level →
                </button>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="snake-sidebar">
            <div className="snake-stat-box">
              <span className="stat-label">Live Score</span>
              <span id="snake-live-score" className="stat-value">
                0
              </span>
            </div>
            <div className="snake-stat-box">
              <span className="stat-label">Personal Best</span>
              <span id="snake-personal-best" className="stat-value pb">
                0
              </span>
            </div>

            <div className="snake-levels-list">
              <span className="stat-label mb-2 block">Select Level (Endless Mode)</span>
              <div id="snake-lvl-1" className="level-item active cursor-pointer hover:bg-white/[0.08] transition-all">
                <span>1. Rookie</span>
                <span className="badge">160ms</span>
              </div>
              <div id="snake-lvl-2" className="level-item cursor-pointer hover:bg-white/[0.08] transition-all text-white/60">
                <span>2. Hacker</span>
                <span className="badge">120ms</span>
              </div>
              <div id="snake-lvl-3" className="level-item cursor-pointer hover:bg-white/[0.08] transition-all text-white/60">
                <span>3. Pro</span>
                <span className="badge">85ms</span>
              </div>
              <div id="snake-lvl-4" className="level-item cursor-pointer hover:bg-white/[0.08] transition-all text-white/60">
                <span>4. Legend</span>
                <span className="badge">55ms</span>
              </div>
              <div id="snake-lvl-5" className="level-item cursor-pointer hover:bg-white/[0.08] transition-all text-white/60">
                <span>5. God Mode</span>
                <span className="badge">32ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer / Controls Hint */}
        <div className="snake-footer">
          <div className="controls-hint">
            <span className="key-icon">↑</span>
            <span className="key-icon">↓</span>
            <span className="key-icon">←</span>
            <span className="key-icon">→</span>
            <span>Use arrow keys or WASD to navigate</span>
          </div>
          <span id="snake-status-msg" className="status-msg">
            System operational. Target food acquired.
          </span>
        </div>
      </div>
    </div>
  );
};

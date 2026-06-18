// EP94: เกมงู — กริด 20x20, ควบคุมด้วยลูกศร, ชนกำแพง/ตัวเองจบเกม

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const overlayEl = document.getElementById("overlay");
const overlayTitleEl = document.getElementById("overlayTitle");
const overlayScoreEl = document.getElementById("overlayScore");
const restartBtn = document.getElementById("restartBtn");

const GRID_SIZE = 20;
const CELL = canvas.width / GRID_SIZE;
const INITIAL_SPEED = 140;

let snake;
let direction;
let nextDirection;
let food;
let score;
let loopId;
let lastTick;
let speed;
let running;

function initState() {
  snake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
  ];
  direction = { x: 1, y: 0 };
  nextDirection = { x: 1, y: 0 };
  score = 0;
  speed = INITIAL_SPEED;
  running = true;
  scoreEl.textContent = "0";
  overlayEl.classList.add("hidden");
  spawnFood();
}

function spawnFood() {
  let spot;
  do {
    spot = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (snake.some((seg) => seg.x === spot.x && seg.y === spot.y));
  food = spot;
}

function drawCell(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x * CELL + 1, y * CELL + 1, CELL - 2, CELL - 2);
}

function draw() {
  ctx.fillStyle = "#082f49";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawCell(food.x, food.y, "#fbbf24");

  snake.forEach((seg, i) => {
    drawCell(seg.x, seg.y, i === 0 ? "#34d399" : "#10b981");
  });
}

function moveSnake() {
  direction = nextDirection;
  const head = {
    x: snake[0].x + direction.x,
    y: snake[0].y + direction.y,
  };

  // ชนกำแพง
  if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
    gameOver();
    return;
  }

  // ชนตัวเอง
  if (snake.some((seg) => seg.x === head.x && seg.y === head.y)) {
    gameOver();
    return;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score += 1;
    scoreEl.textContent = String(score);
    speed = Math.max(70, INITIAL_SPEED - score * 4);
    spawnFood();
  } else {
    snake.pop();
  }
}

function gameLoop(timestamp) {
  if (!running) return;

  if (timestamp - lastTick >= speed) {
    lastTick = timestamp;
    moveSnake();
    if (running) draw();
  }

  loopId = requestAnimationFrame(gameLoop);
}

function gameOver() {
  running = false;
  cancelAnimationFrame(loopId);
  overlayTitleEl.textContent = "จบเกม";
  overlayScoreEl.textContent = `คะแนน: ${score}`;
  overlayEl.classList.remove("hidden");
}

function startGame() {
  cancelAnimationFrame(loopId);
  initState();
  draw();
  lastTick = 0;
  loopId = requestAnimationFrame(gameLoop);
}

// ป้องกันหันกลับทันที
function setDirection(x, y) {
  if (x === -direction.x && y === -direction.y) return;
  nextDirection = { x, y };
}

document.addEventListener("keydown", (event) => {
  if (!running && event.key !== "Enter") return;

  switch (event.key) {
    case "ArrowUp":
      event.preventDefault();
      setDirection(0, -1);
      break;
    case "ArrowDown":
      event.preventDefault();
      setDirection(0, 1);
      break;
    case "ArrowLeft":
      event.preventDefault();
      setDirection(-1, 0);
      break;
    case "ArrowRight":
      event.preventDefault();
      setDirection(1, 0);
      break;
    default:
      break;
  }
});

restartBtn.addEventListener("click", startGame);
startGame();

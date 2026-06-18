// EP93: เกม Stroop — แสดงชื่อสีภาษาไทย จับคู่ปุ่มสีที่ถูกต้อง
// นับถอยหลัง 30 วินาที, เร่งความเร็วทุก 5 คะแนน

const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const colorPromptEl = document.getElementById("colorPrompt");
const optionsEl = document.getElementById("options");
const gameOverEl = document.getElementById("gameOver");
const finalScoreEl = document.getElementById("finalScore");
const restartBtn = document.getElementById("restartBtn");

// ชื่อสีภาษาไทย กับค่า CSS
const COLORS = [
  { name: "แดง", value: "#ef4444" },
  { name: "น้ำเงิน", value: "#3b82f6" },
  { name: "เขียว", value: "#22c55e" },
  { name: "เหลือง", value: "#eab308" },
  { name: "ม่วง", value: "#a855f7" },
  { name: "ส้ม", value: "#f97316" },
];

const BASE_INTERVAL_MS = 1000;
const INTERVAL_STEP_MS = 150;
const MIN_INTERVAL_MS = 350;
const INITIAL_TIME = 30;

let score = 0;
let timeLeft = INITIAL_TIME;
let correctColor = null;
let timerId = null;
let playing = false;

// คำนวณช่วงเวลานับถอยหลัง — เร็วขึ้นทุก 5 คะแนน
function getTickInterval() {
  const tier = Math.floor(score / 5);
  return Math.max(MIN_INTERVAL_MS, BASE_INTERVAL_MS - tier * INTERVAL_STEP_MS);
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickRoundColors() {
  const shuffled = shuffle(COLORS);
  correctColor = shuffled[0];
  return shuffled.slice(0, 4);
}

function renderRound() {
  const roundColors = pickRoundColors();

  // แสดงชื่อสี (Stroop) — อาจใช้สีตัวอักษรที่ต่างจากคำตอบเพื่อเพิ่มความท้าทาย
  const decoyText = COLORS[Math.floor(Math.random() * COLORS.length)];
  colorPromptEl.textContent = correctColor.name;
  colorPromptEl.style.color = decoyText.value;

  optionsEl.innerHTML = "";
  roundColors.forEach((color) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.style.backgroundColor = color.value;
    btn.setAttribute("aria-label", color.name);
    btn.addEventListener("click", () => handleAnswer(color));
    optionsEl.appendChild(btn);
  });
}

function updateHud() {
  scoreEl.textContent = String(score);
  timerEl.textContent = String(timeLeft);
}

function stopTimer() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
}

function startTimer() {
  stopTimer();
  timerId = setInterval(tick, getTickInterval());
}

// รีสตาร์ท interval เมื่อ tier เปลี่ยน (ทุก 5 คะแนน)
function maybeRestartTimer() {
  if (!playing) return;
  startTimer();
}

function tick() {
  timeLeft -= 1;
  updateHud();

  if (timeLeft <= 0) {
    endGame();
  }
}

function handleAnswer(color) {
  if (!playing) return;

  if (color.name === correctColor.name) {
    score += 1;
    const prevTier = Math.floor((score - 1) / 5);
    const newTier = Math.floor(score / 5);
    updateHud();
    if (newTier > prevTier) {
      maybeRestartTimer();
    }
    renderRound();
  } else {
    endGame();
  }
}

function endGame() {
  playing = false;
  stopTimer();
  optionsEl.querySelectorAll(".option-btn").forEach((btn) => {
    btn.disabled = true;
  });
  finalScoreEl.textContent = `คะแนนสุดท้าย: ${score}`;
  gameOverEl.classList.remove("hidden");
}

function startGame() {
  score = 0;
  timeLeft = INITIAL_TIME;
  playing = true;
  gameOverEl.classList.add("hidden");
  updateHud();
  renderRound();
  startTimer();
}

restartBtn.addEventListener("click", startGame);
startGame();

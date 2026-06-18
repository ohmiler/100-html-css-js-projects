// EP60: นับถอยหลัง 5 นาที — เริ่ม หยุดชั่วคราว รีเซ็ต
const INITIAL_SECONDS = 5 * 60;

const displayEl = document.getElementById("timerDisplay");
const messageEl = document.getElementById("timerMessage");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let remainingSeconds = INITIAL_SECONDS;
let intervalId = null;
let isRunning = false;
let isPaused = false;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateDisplay() {
  displayEl.textContent = formatTime(remainingSeconds);
}

function updateButtons() {
  startBtn.disabled = isRunning;
  pauseBtn.disabled = !isRunning;
  pauseBtn.textContent = isPaused ? "ดำเนินการต่อ" : "หยุดชั่วคราว";
}

function clearTimer() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function showFinishedMessage() {
  messageEl.textContent = "หมดเวลาแล้ว!";
  messageEl.hidden = false;
  displayEl.classList.add("is-finished");
  alert("หมดเวลาแล้ว!");
}

function hideMessage() {
  messageEl.hidden = true;
  messageEl.textContent = "";
  displayEl.classList.remove("is-finished");
}

function tick() {
  remainingSeconds -= 1;
  updateDisplay();

  if (remainingSeconds <= 0) {
    clearTimer();
    isRunning = false;
    isPaused = false;
    remainingSeconds = 0;
    updateDisplay();
    updateButtons();
    showFinishedMessage();
  }
}

function startTimer() {
  if (isRunning) return;

  hideMessage();
  isRunning = true;
  isPaused = false;
  updateButtons();

  intervalId = setInterval(tick, 1000);
}

function pauseTimer() {
  if (!isRunning) return;

  if (isPaused) {
    // ดำเนินการต่อ
    isPaused = false;
    intervalId = setInterval(tick, 1000);
  } else {
    // หยุดชั่วคราว
    isPaused = true;
    clearTimer();
  }

  updateButtons();
}

function resetTimer() {
  clearTimer();
  isRunning = false;
  isPaused = false;
  remainingSeconds = INITIAL_SECONDS;
  hideMessage();
  updateDisplay();
  updateButtons();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
updateButtons();

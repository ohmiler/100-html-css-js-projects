// EP96: นาฬิกาจับเวลา — ใช้ Date.now() เพื่อความแม่นยำ

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const lapBtn = document.getElementById("lapBtn");
const resetBtn = document.getElementById("resetBtn");
const lapList = document.getElementById("lapList");

let running = false;
let startTime = 0;       // เวลาเริ่มรอบปัจจุบัน (ms)
let elapsed = 0;         // เวลาสะสมก่อนหยุด (ms)
let tickId = null;
let lapCount = 0;

// แปลง ms เป็น MM:SS:ms (แสดงมิลลิวินาที 2 หลัก = centiseconds)
function formatTime(ms) {
  const totalCentis = Math.floor(ms / 10);
  const centis = totalCentis % 100;
  const totalSecs = Math.floor(totalCentis / 100);
  const secs = totalSecs % 60;
  const mins = Math.floor(totalSecs / 60);

  const mm = String(mins).padStart(2, "0");
  const ss = String(secs).padStart(2, "0");
  const cs = String(centis).padStart(2, "0");

  return `${mm}:${ss}:${cs}`;
}

// คำนวณเวลาที่ผ่านไปทั้งหมด
function getCurrentElapsed() {
  if (!running) return elapsed;
  return elapsed + (Date.now() - startTime);
}

// อัปเดตหน้าจอ
function updateDisplay() {
  display.textContent = formatTime(getCurrentElapsed());
}

// เริ่มจับเวลา
function start() {
  if (running) return;
  running = true;
  startTime = Date.now();

  tickId = setInterval(updateDisplay, 10);

  startBtn.disabled = true;
  stopBtn.disabled = false;
  lapBtn.disabled = false;
}

// หยุดจับเวลา
function stop() {
  if (!running) return;
  running = false;
  elapsed += Date.now() - startTime;
  clearInterval(tickId);
  updateDisplay();

  startBtn.disabled = false;
  stopBtn.disabled = true;
  lapBtn.disabled = true;
}

// บันทึกรอบ
function recordLap() {
  if (!running) return;
  lapCount += 1;
  const lapTime = getCurrentElapsed();

  const li = document.createElement("li");
  li.className = "lap-item";
  li.innerHTML = `
    <span class="lap-item__label">รอบ ${lapCount}</span>
    <span class="lap-item__time">${formatTime(lapTime)}</span>
  `;
  lapList.prepend(li);
}

// รีเซ็ตทั้งหมด
function reset() {
  running = false;
  clearInterval(tickId);
  elapsed = 0;
  startTime = 0;
  lapCount = 0;
  display.textContent = "00:00:00";
  lapList.innerHTML = "";

  startBtn.disabled = false;
  stopBtn.disabled = true;
  lapBtn.disabled = true;
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
lapBtn.addEventListener("click", recordLap);
resetBtn.addEventListener("click", reset);

// EP88: ตัวจับเวลาโพโมโดโร — 25 นาทีทำงาน / 5 นาทีพัก สลับอัตโนมัติ

const WORK_SECONDS = 25 * 60;
const BREAK_SECONDS = 5 * 60;

let phase = "work";
let remaining = WORK_SECONDS;
let intervalId = null;

const phaseLabel = document.getElementById("phaseLabel");
const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const notification = document.getElementById("notification");
const notificationText = document.getElementById("notificationText");
const closeNotification = document.getElementById("closeNotification");

// แปลงวินาทีเป็น mm:ss
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

// อัปเดตหน้าจอตามเฟสปัจจุบัน
function updateDisplay() {
  timeDisplay.textContent = formatTime(remaining);
  document.body.className = phase === "work" ? "phase-work" : "phase-break";
  phaseLabel.textContent = phase === "work" ? "ช่วงทำงาน" : "ช่วงพัก";
}

// แสดงการแจ้งเตือนเมื่อจบเฟส
function showNotification(message) {
  notificationText.textContent = message;
  notification.hidden = false;
}

// ซ่อนการแจ้งเตือน
function hideNotification() {
  notification.hidden = true;
}

// สลับเฟสทำงาน ↔ พัก
function switchPhase() {
  if (phase === "work") {
    phase = "break";
    remaining = BREAK_SECONDS;
    showNotification("หมดเวลาทำงานแล้ว! ถึงเวลาพัก 5 นาที");
  } else {
    phase = "work";
    remaining = WORK_SECONDS;
    showNotification("หมดเวลาพักแล้ว! กลับมาทำงานต่อ");
  }
  updateDisplay();
}

// เริ่มนับถอยหลัง
function startTimer() {
  if (intervalId) return;
  intervalId = setInterval(() => {
    if (remaining <= 1) {
      switchPhase();
      return;
    }
    remaining -= 1;
    updateDisplay();
  }, 1000);
}

// หยุดนับถอยหลัง
function pauseTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

// รีเซ็ตกลับเฟสทำงาน
function resetTimer() {
  pauseTimer();
  phase = "work";
  remaining = WORK_SECONDS;
  hideNotification();
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
closeNotification.addEventListener("click", hideNotification);

updateDisplay();

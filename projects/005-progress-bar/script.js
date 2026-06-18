const progressTrack = document.getElementById("progressTrack");
const progressValue = document.getElementById("progressValue");
const addBtn = document.getElementById("addBtn");

// เก็บค่าเปอร์เซ็นต์ปัจจุบัน
let progress = 0;

function updateProgress(nextValue) {
  // จำกัดไม่ให้เกิน 100%
  progress = Math.min(nextValue, 100);

  // อัปเดต CSS variable และตัวเลขที่แสดง
  progressTrack.style.setProperty("--progress", `${progress}%`);
  progressValue.textContent = String(progress);

  // ปิดปุ่มเมื่อถึง 100%
  addBtn.disabled = progress >= 100;
}

addBtn.addEventListener("click", () => {
  // เพิ่มทีละ 10% แล้วอัปเดต UI
  updateProgress(progress + 10);
});

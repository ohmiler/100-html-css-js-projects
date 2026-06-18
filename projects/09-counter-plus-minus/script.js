// เลือก element จาก DOM
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countDisplay = document.getElementById("countDisplay");

// ค่าเริ่มต้นของตัวนับ
let count = 0;

// อัปเดตตัวเลขบนหน้าจอและสถานะปุ่มลบ
function updateDisplay() {
  countDisplay.textContent = count;
  // ปิดปุ่มลบเมื่อค่าเป็น 0 — ป้องกันติดลบ
  decreaseBtn.disabled = count <= 0;
}

// เรียกครั้งแรกเพื่อตั้งค่าเริ่มต้น
updateDisplay();

// ฟัง event คลิกปุ่มเพิ่ม
increaseBtn.addEventListener("click", () => {
  count += 1;
  updateDisplay();
});

// ฟัง event คลิกปุ่มลด
decreaseBtn.addEventListener("click", () => {
  // ตรวจสอบอีกครั้งก่อนลด — ไม่ให้ต่ำกว่า 0
  if (count > 0) {
    count -= 1;
    updateDisplay();
  }
});

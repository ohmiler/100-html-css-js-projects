// เลือกปุ่มจาก DOM ด้วย id
const toggleBtn = document.getElementById("toggleBtn");

// ฟัง event เมื่อผู้ใช้คลิกปุ่ม
toggleBtn.addEventListener("click", () => {
  // toggle สลับ class btn--active — มีอยู่แล้วเอาออก ไม่มีก็ใส่
  toggleBtn.classList.toggle("btn--active");
});

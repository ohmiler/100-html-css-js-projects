const toggleBtn = document.getElementById("toggleBtn");
const message = document.getElementById("message");

// state เก็บว่าข้อความกำลังแสดงอยู่หรือไม่
let isVisible = true;

toggleBtn.addEventListener("click", () => {
  // สลับสถานะ
  isVisible = !isVisible;

  // toggle class hidden บนข้อความ
  message.classList.toggle("hidden", !isVisible);

  // อัปเดตข้อความบนปุ่มตาม state
  toggleBtn.textContent = isVisible ? "ซ่อนข้อความ" : "แสดงข้อความ";
});

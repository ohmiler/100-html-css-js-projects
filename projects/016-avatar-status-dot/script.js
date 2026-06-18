const statusDot = document.getElementById("statusDot");
const statusLabel = document.getElementById("statusLabel");
const cycleBtn = document.getElementById("cycleBtn");

// สถานะทั้ง 3 แบบ: ออนไลน์, ออฟไลน์, ไม่ว่าง
const statuses = [
  { className: "status-online", label: "ออนไลน์" },
  { className: "status-offline", label: "ออฟไลน์" },
  { className: "status-busy", label: "ไม่ว่าง" },
];

let currentIndex = 0;

function updateStatus(index) {
  const status = statuses[index];

  // ลบ class สถานะเดิมแล้วใส่ class ใหม่
  statuses.forEach((item) => statusDot.classList.remove(item.className));
  statusDot.classList.add(status.className);

  statusLabel.textContent = status.label;
  currentIndex = index;
}

cycleBtn.addEventListener("click", () => {
  const nextIndex = (currentIndex + 1) % statuses.length;
  updateStatus(nextIndex);
});

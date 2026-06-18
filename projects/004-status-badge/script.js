const statusBadge = document.getElementById("statusBadge");

// รายการสถานะที่จะวนสลับเมื่อคลิก
const statuses = [
  { className: "badge--success", label: "สำเร็จ" },
  { className: "badge--warning", label: "รอดำเนินการ" },
  { className: "badge--cancel", label: "ยกเลิก" },
];

// index ของสถานะปัจจุบัน
let currentIndex = 0;

function applyStatus(index) {
  const status = statuses[index];

  // ลบ modifier class เก่าทั้งหมด
  statuses.forEach(({ className }) => {
    statusBadge.classList.remove(className);
  });

  // เพิ่ม modifier class และข้อความใหม่
  statusBadge.classList.add(status.className);
  statusBadge.textContent = status.label;
}

function cycleStatus() {
  // วนไปสถานะถัดไป (วนกลับ 0 เมื่อถึงท้าย)
  currentIndex = (currentIndex + 1) % statuses.length;
  applyStatus(currentIndex);
}

// คลิกเพื่อสลับสถานะ
statusBadge.addEventListener("click", cycleStatus);

// รองรับ Enter/Space เมื่อ focus ด้วย keyboard
statusBadge.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    cycleStatus();
  }
});

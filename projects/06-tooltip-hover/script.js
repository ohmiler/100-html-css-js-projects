const tooltipWrapper = document.getElementById("tooltipWrapper");
const tooltipTrigger = document.getElementById("tooltipTrigger");

// state เก็บว่า tooltip ถูก lock เปิดค้างอยู่หรือไม่
let isLocked = false;

tooltipTrigger.addEventListener("click", () => {
  // สลับสถานะ lock
  isLocked = !isLocked;

  // toggle class บน wrapper เพื่อให้ CSS แสดง tooltip ค้างไว้
  tooltipWrapper.classList.toggle("tooltip-wrapper--locked", isLocked);

  // เปลี่ยนข้อความปุ่มให้ผู้ใช้รู้ว่ากำลัง lock อยู่
  tooltipTrigger.textContent = isLocked ? "ปลดล็อก" : "ช่วยเหลือ";
});

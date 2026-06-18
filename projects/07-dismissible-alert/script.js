// เลือกปุ่มปิดทุก alert บนหน้า
const closeButtons = document.querySelectorAll(".alert__close");

closeButtons.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    // หา element .alert ที่ครอบปุ่มนี้อยู่
    const alertBox = closeBtn.closest(".alert");

    if (!alertBox) {
      return;
    }

    // ลบ alert ออกจาก DOM ด้วย remove()
    alertBox.remove();
  });
});

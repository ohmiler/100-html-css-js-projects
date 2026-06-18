// เลือก element ที่ต้องใช้จาก DOM
const htmlEl = document.documentElement;
const themeToggleBtn = document.getElementById("themeToggleBtn");

// ข้อความบนปุ่มตามธีมปัจจุบัน
const buttonLabels = {
  light: "เปลี่ยนเป็นโหมดมืด",
  dark: "เปลี่ยนเป็นโหมดสว่าง",
};

// อัปเดตข้อความปุ่มและ aria-pressed ให้ตรงกับธีม
function updateButtonLabel(theme) {
  themeToggleBtn.textContent = buttonLabels[theme];
  themeToggleBtn.setAttribute("aria-pressed", theme === "dark");
}

// ตั้งค่าเริ่มต้นตาม data-theme บน html
const currentTheme = htmlEl.getAttribute("data-theme") || "light";
updateButtonLabel(currentTheme);

// ฟัง event เมื่อผู้ใช้คลิกปุ่มสลับธีม
themeToggleBtn.addEventListener("click", () => {
  // อ่านธีมปัจจุบันแล้วสลับเป็นอีกโหมด
  const isDark = htmlEl.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";

  // เปลี่ยน data-theme บน html — CSS จะอัปเดตสีผ่านตัวแปร
  htmlEl.setAttribute("data-theme", newTheme);
  updateButtonLabel(newTheme);
});

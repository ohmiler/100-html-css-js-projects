// EP51: แสดง/ซ่อนรหัสผ่าน

const passwordInput = document.getElementById("passwordInput");
const toggleBtn = document.getElementById("togglePassword");
const toggleIcon = toggleBtn.querySelector(".toggle-icon");
const loginForm = document.getElementById("loginForm");

// สลับ type ระหว่าง password กับ text
toggleBtn.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";

  passwordInput.type = isHidden ? "text" : "password";
  toggleIcon.textContent = isHidden ? "🙈" : "👁️";
  toggleBtn.setAttribute("aria-label", isHidden ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน");
  toggleBtn.setAttribute("aria-pressed", String(isHidden));
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

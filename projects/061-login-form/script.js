// EP61: ฟอร์มเข้าสู่ระบบ

const loginForm = document.getElementById("loginForm");
const submitBtn = document.getElementById("submitBtn");
const successMsg = document.getElementById("successMsg");

const defaultBtnText = submitBtn.textContent;

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const email = formData.get("email");
  const password = formData.get("password");

  // แสดงสถานะกำลังโหลดบนปุ่ม
  submitBtn.disabled = true;
  submitBtn.textContent = "กำลังเข้าสู่ระบบ...";
  successMsg.hidden = true;

  // จำลองการส่งข้อมูล
  setTimeout(() => {
    console.log("เข้าสู่ระบบ:", { email, password });

    submitBtn.textContent = defaultBtnText;
    submitBtn.disabled = true;
    successMsg.hidden = false;

    loginForm.querySelectorAll(".field-input").forEach((input) => {
      input.disabled = true;
    });
  }, 1200);
});

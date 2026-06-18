// EP78: สมัครรับจดหมายข่าว
const form = document.getElementById("newsletterForm");
const emailInput = document.getElementById("emailInput");
const subscribeBtn = document.getElementById("subscribeBtn");
const emailHint = document.getElementById("emailHint");
const successState = document.getElementById("successState");
const successEmail = document.getElementById("successEmail");

// ตรวจสอบรูปแบบอีเมล
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(value) {
  return emailPattern.test(value.trim());
}

// อัปเดตสถานะปุ่มและข้อความช่วยเหลือ
function validateInput() {
  const value = emailInput.value.trim();
  const isEmpty = value === "";
  const isValid = isValidEmail(value);

  subscribeBtn.disabled = !isValid;

  emailInput.classList.toggle("is-valid", isValid);
  emailInput.classList.toggle("is-invalid", !isEmpty && !isValid);

  if (isEmpty) {
    emailHint.textContent = "กรอกอีเมลที่ถูกต้องเพื่อเปิดใช้งานปุ่มสมัคร";
    emailHint.classList.remove("is-error");
  } else if (!isValid) {
    emailHint.textContent = "รูปแบบอีเมลไม่ถูกต้อง";
    emailHint.classList.add("is-error");
  } else {
    emailHint.textContent = "อีเมลพร้อมสมัครแล้ว";
    emailHint.classList.remove("is-error");
  }
}

emailInput.addEventListener("input", validateInput);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  if (!isValidEmail(email)) return;

  // แสดงสถานะสำเร็จ
  form.classList.add("is-hidden");
  successState.hidden = false;
  successEmail.textContent = `เราจะส่งข่าวสารไปที่ ${email}`;
});

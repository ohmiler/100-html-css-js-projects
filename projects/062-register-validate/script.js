// EP62: ฟอร์มสมัครพร้อมตรวจสอบข้อมูล

const registerForm = document.getElementById("registerForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmInput = document.getElementById("confirmInput");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// แสดง/ล้างข้อความ error ของแต่ละช่อง
function setFieldError(input, errorEl, message) {
  if (message) {
    input.classList.add("input--error");
    errorEl.textContent = message;
    return false;
  }

  input.classList.remove("input--error");
  errorEl.textContent = "";
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();

  if (!value) {
    return setFieldError(emailInput, emailError, "กรุณากรอกอีเมล");
  }

  if (!emailRegex.test(value)) {
    return setFieldError(emailInput, emailError, "รูปแบบอีเมลไม่ถูกต้อง");
  }

  return setFieldError(emailInput, emailError, "");
}

function validatePassword() {
  const value = passwordInput.value;

  if (!value) {
    return setFieldError(passwordInput, passwordError, "กรุณากรอกรหัสผ่าน");
  }

  if (value.length < 8) {
    return setFieldError(passwordInput, passwordError, "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร");
  }

  return setFieldError(passwordInput, passwordError, "");
}

function validateConfirm() {
  const value = confirmInput.value;

  if (!value) {
    return setFieldError(confirmInput, confirmError, "กรุณายืนยันรหัสผ่าน");
  }

  if (value !== passwordInput.value) {
    return setFieldError(confirmInput, confirmError, "รหัสผ่านไม่ตรงกัน");
  }

  return setFieldError(confirmInput, confirmError, "");
}

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmValid = validateConfirm();

  if (isEmailValid && isPasswordValid && isConfirmValid) {
    alert("สมัครสมาชิกสำเร็จ");
    registerForm.reset();
  }
});

emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", () => {
  validatePassword();
  if (confirmInput.value) validateConfirm();
});
confirmInput.addEventListener("input", validateConfirm);

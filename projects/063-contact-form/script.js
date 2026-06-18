// EP63: ฟอร์มติดต่อ

const contactForm = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

function validateForm() {
  const isNameValid = setFieldError(
    nameInput,
    nameError,
    nameInput.value.trim() ? "" : "กรุณากรอกชื่อ"
  );

  const emailValue = emailInput.value.trim();
  let emailMessage = "";

  if (!emailValue) {
    emailMessage = "กรุณากรอกอีเมล";
  } else if (!emailRegex.test(emailValue)) {
    emailMessage = "รูปแบบอีเมลไม่ถูกต้อง";
  }

  const isEmailValid = setFieldError(emailInput, emailError, emailMessage);

  const isMessageValid = setFieldError(
    messageInput,
    messageError,
    messageInput.value.trim() ? "" : "กรุณากรอกข้อความ"
  );

  return isNameValid && isEmailValid && isMessageValid;
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateForm()) return;

  contactForm.hidden = true;
  successMsg.hidden = false;
});

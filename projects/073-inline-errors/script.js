// EP73: แสดงข้อผิดพลาดใต้ช่องกรอก — ล้างเมื่อแก้ไขค่า
const form = document.getElementById("contactForm");

const fields = {
  name: {
    input: document.getElementById("nameInput"),
    error: document.getElementById("nameError"),
    validate(value) {
      if (!value.trim()) return "กรุณากรอกชื่อ-นามสกุล";
      if (value.trim().length < 2) return "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร";
      return "";
    },
  },
  email: {
    input: document.getElementById("emailInput"),
    error: document.getElementById("emailError"),
    validate(value) {
      if (!value.trim()) return "กรุณากรอกอีเมล";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "รูปแบบอีเมลไม่ถูกต้อง";
      return "";
    },
  },
  phone: {
    input: document.getElementById("phoneInput"),
    error: document.getElementById("phoneError"),
    validate(value) {
      const digits = value.replace(/\D/g, "");
      if (!digits) return "กรุณากรอกเบอร์โทร";
      if (digits.length < 9 || digits.length > 10) return "เบอร์โทรต้องมี 9–10 หลัก";
      return "";
    },
  },
};

function showError(fieldKey, message) {
  const field = fields[fieldKey];
  field.error.textContent = message;
  field.error.hidden = !message;
  field.input.classList.toggle("is-invalid", Boolean(message));
}

function validateField(fieldKey) {
  const field = fields[fieldKey];
  const message = field.validate(field.input.value);
  showError(fieldKey, message);
  return !message;
}

function validateAll() {
  return Object.keys(fields).every((key) => validateField(key));
}

Object.keys(fields).forEach((key) => {
  fields[key].input.addEventListener("input", () => {
    validateField(key);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateAll()) {
    form.reset();
    Object.keys(fields).forEach((key) => showError(key, ""));
  }
});

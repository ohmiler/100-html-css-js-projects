// EP72: วัดความแข็งแรงรหัสผ่าน — ความยาว, ตัวเลข, สัญลักษณ์
const passwordInput = document.getElementById("passwordInput");
const strengthBar = document.getElementById("strengthBar");
const strengthLabel = document.getElementById("strengthLabel");
const strengthHint = document.getElementById("strengthHint");

const LEVELS = {
  weak: { label: "อ่อนแอ", className: "is-weak" },
  medium: { label: "ปานกลาง", className: "is-medium" },
  strong: { label: "แข็งแรง", className: "is-strong" },
};

function scorePassword(value) {
  let score = 0;

  if (value.length >= 6) score += 1;
  if (value.length >= 10) score += 1;
  if (/\d/.test(value)) score += 1;
  if (/[^A-Za-z0-9]/.test(value)) score += 1;

  if (score <= 1) return "weak";
  if (score <= 3) return "medium";
  return "strong";
}

function updateStrength() {
  const value = passwordInput.value;

  strengthBar.classList.remove("is-weak", "is-medium", "is-strong");
  strengthLabel.classList.remove("is-weak", "is-medium", "is-strong");

  if (!value) {
    strengthLabel.textContent = "—";
    strengthHint.hidden = true;
    return;
  }

  const level = scorePassword(value);
  const { label, className } = LEVELS[level];

  strengthBar.classList.add(className);
  strengthLabel.classList.add(className);
  strengthLabel.textContent = label;
  strengthHint.hidden = level !== "weak";
}

passwordInput.addEventListener("input", updateStrength);

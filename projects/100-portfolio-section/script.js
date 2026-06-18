// EP100: พอร์ตโฟลิโอ — navbar, smooth scroll, dark mode, validation

const themeToggle = document.getElementById("themeToggle");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const THEME_KEY = "portfolio-theme";

// ── Dark mode ──

function getPreferredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  applyTheme(current === "dark" ? "light" : "dark");
}

themeToggle.addEventListener("click", toggleTheme);
applyTheme(getPreferredTheme());

// ── Smooth scroll สำหรับลิงก์ navbar ──

document.querySelectorAll('.nav-link, .navbar__brand, .hero__cta').forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ── Contact form validation ──

const validators = {
  contactName: (value) => {
    if (!value.trim()) return "กรุณากรอกชื่อ";
    if (value.trim().length < 2) return "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร";
    return "";
  },
  contactEmail: (value) => {
    if (!value.trim()) return "กรุณากรอกอีเมล";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "รูปแบบอีเมลไม่ถูกต้อง";
    return "";
  },
  contactMessage: (value) => {
    if (!value.trim()) return "กรุณากรอกข้อความ";
    if (value.trim().length < 10) return "ข้อความต้องมีอย่างน้อย 10 ตัวอักษร";
    return "";
  },
};

function showFieldError(fieldId, message) {
  const input = document.getElementById(fieldId);
  const errorEl = document.querySelector(`[data-for="${fieldId}"]`);
  if (message) {
    input.classList.add("is-invalid");
    errorEl.textContent = message;
  } else {
    input.classList.remove("is-invalid");
    errorEl.textContent = "";
  }
}

function validateField(fieldId) {
  const input = document.getElementById(fieldId);
  const error = validators[fieldId](input.value);
  showFieldError(fieldId, error);
  return !error;
}

// ตรวจสอบแบบ real-time เมื่อผู้ใช้พิมพ์
Object.keys(validators).forEach((fieldId) => {
  const input = document.getElementById(fieldId);
  input.addEventListener("blur", () => validateField(fieldId));
  input.addEventListener("input", () => {
    if (input.classList.contains("is-invalid")) {
      validateField(fieldId);
    }
  });
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const isValid = Object.keys(validators).every((fieldId) => validateField(fieldId));

  if (!isValid) {
    formStatus.textContent = "กรุณาแก้ไขข้อมูลที่ไม่ถูกต้อง";
    formStatus.className = "form-status form-status--error";
    return;
  }

  formStatus.textContent = "ส่งข้อความสำเร็จ! ขอบคุณที่ติดต่อ";
  formStatus.className = "form-status form-status--success";
  contactForm.reset();
  Object.keys(validators).forEach((fieldId) => showFieldError(fieldId, ""));
});

// ── Animate skill bars เมื่อเลื่อนมาเห็น ──

const skillFills = document.querySelectorAll(".skill-item__fill");
const savedWidths = new Map();

skillFills.forEach((fill) => {
  savedWidths.set(fill, fill.style.width);
  fill.style.width = "0%";
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = savedWidths.get(fill);
        observer.unobserve(fill);
      }
    });
  },
  { threshold: 0.3 }
);

skillFills.forEach((fill) => observer.observe(fill));

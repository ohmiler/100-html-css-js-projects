// EP65: ฟอร์มหลายขั้นตอน

const wizardForm = document.getElementById("wizardForm");
const steps = [...wizardForm.querySelectorAll(".wizard-step")];
const stepLabel = document.getElementById("stepLabel");
const progressBar = document.getElementById("progressBar");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const summaryPanel = document.getElementById("summaryPanel");
const summaryList = document.getElementById("summaryList");

const fieldLabels = {
  firstName: "ชื่อ",
  lastName: "นามสกุล",
  email: "อีเมล",
  phone: "เบอร์โทร",
  province: "จังหวัด",
  zip: "รหัสไปรษณีย์",
};

let currentStep = 1;
const totalSteps = steps.length;

function updateProgress() {
  stepLabel.textContent = `${currentStep}/${totalSteps}`;
  progressBar.style.setProperty("--progress", `${(currentStep / totalSteps) * 100}%`);
}

function showStep(stepNumber) {
  steps.forEach((step) => {
    step.hidden = Number(step.dataset.step) !== stepNumber;
  });

  backBtn.hidden = stepNumber === 1;
  nextBtn.hidden = stepNumber === totalSteps;
  submitBtn.hidden = stepNumber !== totalSteps;

  currentStep = stepNumber;
  updateProgress();
}

// ตรวจสอบช่องกรอกในขั้นตอนปัจจุบัน
function validateStep(stepNumber) {
  const step = steps.find((item) => Number(item.dataset.step) === stepNumber);
  const inputs = step.querySelectorAll(".field-input");
  let isValid = true;

  inputs.forEach((input) => {
    const errorEl = input.parentElement.querySelector(".field-error");
    const value = input.value.trim();

    if (!value) {
      input.classList.add("input--error");
      errorEl.textContent = "กรุณากรอกข้อมูล";
      isValid = false;
      return;
    }

    if (input.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      input.classList.add("input--error");
      errorEl.textContent = "รูปแบบอีเมลไม่ถูกต้อง";
      isValid = false;
      return;
    }

    if (input.name === "zip" && !/^\d{5}$/.test(value)) {
      input.classList.add("input--error");
      errorEl.textContent = "รหัสไปรษณีย์ต้องเป็นตัวเลข 5 หลัก";
      isValid = false;
      return;
    }

    input.classList.remove("input--error");
    errorEl.textContent = "";
  });

  return isValid;
}

function renderSummary(formData) {
  summaryList.innerHTML = "";

  Object.entries(fieldLabels).forEach(([name, label]) => {
    const row = document.createElement("div");
    row.innerHTML = `<dt>${label}</dt><dd>${formData.get(name)}</dd>`;
    summaryList.appendChild(row);
  });
}

nextBtn.addEventListener("click", () => {
  if (!validateStep(currentStep)) return;
  showStep(currentStep + 1);
});

backBtn.addEventListener("click", () => {
  showStep(currentStep - 1);
});

wizardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateStep(currentStep)) return;

  const formData = new FormData(wizardForm);
  wizardForm.hidden = true;
  renderSummary(formData);
  summaryPanel.hidden = false;
});

steps.forEach((step) => {
  step.querySelectorAll(".field-input").forEach((input) => {
    input.addEventListener("input", () => {
      input.classList.remove("input--error");
      input.parentElement.querySelector(".field-error").textContent = "";
    });
  });
});

showStep(1);

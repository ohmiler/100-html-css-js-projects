// EP75: Date picker — min=วันนี้, แสดงผลรูปแบบไทย (พ.ศ.)
const THAI_MONTHS = [
  "ม.ค.",
  "ก.พ.",
  "มี.ค.",
  "เม.ย.",
  "พ.ค.",
  "มิ.ย.",
  "ก.ค.",
  "ส.ค.",
  "ก.ย.",
  "ต.ค.",
  "พ.ย.",
  "ธ.ค.",
];

const dateInput = document.getElementById("dateInput");
const dateTrigger = document.getElementById("dateTrigger");
const dateDisplay = document.getElementById("dateDisplay");

function formatTodayForInput(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatThaiDate(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const buddhistYear = year + 543;
  const monthLabel = THAI_MONTHS[month - 1];
  return `${day} ${monthLabel} ${buddhistYear}`;
}

function updateDisplay() {
  const value = dateInput.value;

  if (!value) {
    dateDisplay.textContent = "เลือกวันที่";
    dateDisplay.classList.add("is-placeholder");
    return;
  }

  dateDisplay.textContent = formatThaiDate(value);
  dateDisplay.classList.remove("is-placeholder");
}

dateInput.min = formatTodayForInput();

dateTrigger.addEventListener("click", () => {
  if (typeof dateInput.showPicker === "function") {
    dateInput.showPicker();
  } else {
    dateInput.focus();
    dateInput.click();
  }
});

dateInput.addEventListener("change", updateDisplay);
updateDisplay();

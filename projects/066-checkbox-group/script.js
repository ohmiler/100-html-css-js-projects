// EP66: กลุ่มช่องทำเครื่องหมาย — รวบรวมค่าและสลับเลือกทั้งหมด

const interestGroup = document.getElementById("interestGroup");
const toggleAllBtn = document.getElementById("toggleAllBtn");
const summaryValue = document.getElementById("summaryValue");

// แผนที่ value → ข้อความภาษาไทย
const labelMap = {
  technology: "เทคโนโลยี",
  music: "ดนตรี",
  travel: "ท่องเที่ยว",
  sports: "กีฬา",
  cooking: "ทำอาหาร",
  reading: "อ่านหนังสือ",
};

const checkboxes = interestGroup.querySelectorAll('input[type="checkbox"]');

// ดึงรายการที่ถูกเลือก
function getCheckedValues() {
  return Array.from(checkboxes)
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);
}

// อัปเดตสรุปบนหน้าจอ
function updateSummary() {
  const selected = getCheckedValues();

  if (selected.length === 0) {
    summaryValue.textContent = "ยังไม่ได้เลือก";
    return;
  }

  const labels = selected.map((val) => labelMap[val] || val);
  summaryValue.textContent = labels.join(", ");
}

// ตรวจว่าเลือกครบทุกช่องหรือไม่
function areAllChecked() {
  return Array.from(checkboxes).every((cb) => cb.checked);
}

// อัปเดตข้อความปุ่มเลือกทั้งหมด
function updateToggleButton() {
  toggleAllBtn.textContent = areAllChecked() ? "ยกเลิกทั้งหมด" : "เลือกทั้งหมด";
}

// สลับเลือก/ยกเลิกทั้งหมด
function toggleAll() {
  const shouldCheck = !areAllChecked();
  checkboxes.forEach((cb) => {
    cb.checked = shouldCheck;
  });
  updateSummary();
  updateToggleButton();
}

checkboxes.forEach((cb) => {
  cb.addEventListener("change", () => {
    updateSummary();
    updateToggleButton();
  });
});

toggleAllBtn.addEventListener("click", toggleAll);

updateSummary();
updateToggleButton();

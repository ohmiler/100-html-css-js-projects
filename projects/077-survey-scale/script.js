// EP77: แบบสำรวจความพึงพอใจ 1–5
const scaleGroup = document.getElementById("scaleGroup");
const options = [...scaleGroup.querySelectorAll(".scale-option")];
const inputs = [...scaleGroup.querySelectorAll(".scale-input")];
const thankYouEl = document.getElementById("thankYou");

const labels = {
  1: "ไม่พอใจเลย",
  2: "ไม่ค่อยพอใจ",
  3: "ปานกลาง",
  4: "พอใจ",
  5: "พอใจมาก",
};

// ล้างคลาสพรีวิวและเลือกทั้งหมด
function clearHighlights() {
  options.forEach((opt) => {
    opt.classList.remove("is-preview", "is-selected");
  });
}

// ไฮไลต์ถึงคะแนนที่กำหนด (รวมคะแนนนั้นด้วย)
function highlightUpTo(score, className) {
  options.forEach((opt, index) => {
    opt.classList.toggle(className, index < score);
  });
}

// พรีวิวเมื่อ hover
options.forEach((option, index) => {
  option.addEventListener("mouseenter", () => {
    const selectedIndex = inputs.findIndex((input) => input.checked);
    if (selectedIndex === -1) {
      clearHighlights();
      highlightUpTo(index + 1, "is-preview");
    }
  });

  option.addEventListener("mouseleave", () => {
    options.forEach((opt) => opt.classList.remove("is-preview"));

    const selectedIndex = inputs.findIndex((input) => input.checked);
    if (selectedIndex !== -1) {
      highlightUpTo(selectedIndex + 1, "is-selected");
    }
  });
});

// แสดงข้อความขอบคุณหลังเลือก
inputs.forEach((input, index) => {
  input.addEventListener("change", () => {
    clearHighlights();
    highlightUpTo(index + 1, "is-selected");

    const score = input.value;
    thankYouEl.hidden = false;
    thankYouEl.textContent = `ขอบคุณสำหรับคะแนน ${score} — ${labels[score]}`;
  });
});

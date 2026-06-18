const cards = document.querySelectorAll(".pricing-card");
const selectedPlan = document.getElementById("selectedPlan");

// ชื่อแพ็กเกจภาษาไทยตาม data-plan
const planLabels = {
  basic: "พื้นฐาน",
  pro: "โปร",
  enterprise: "องค์กร",
};

// เลือกการ์ดและไฮไลต์
function selectCard(card) {
  cards.forEach((item) => item.classList.remove("selected"));
  card.classList.add("selected");

  const planKey = card.dataset.plan;
  selectedPlan.textContent = planLabels[planKey];
}

cards.forEach((card) => {
  card.addEventListener("click", () => selectCard(card));

  // รองรับ Enter/Space เมื่อโฟกัส
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectCard(card);
    }
  });
});

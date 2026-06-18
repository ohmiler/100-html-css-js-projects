const cards = document.querySelectorAll(".feature-card");

// สลับเปิด/ปิดรายละเอียดของการ์ด
function toggleCard(card) {
  const isExpanded = card.classList.contains("is-expanded");

  // ปิดการ์ดอื่นก่อน (ให้เปิดทีละใบ)
  cards.forEach((item) => item.classList.remove("is-expanded"));

  // ถ้ากดการ์ดเดิมที่เปิดอยู่ ให้ปิด; ถ้ายังไม่เปิด ให้เปิด
  if (!isExpanded) {
    card.classList.add("is-expanded");
  }
}

cards.forEach((card) => {
  card.addEventListener("click", () => toggleCard(card));

  // รองรับ Enter/Space เมื่อโฟกัส
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard(card);
    }
  });
});

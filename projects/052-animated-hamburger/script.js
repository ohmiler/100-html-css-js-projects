// EP52: แฮมเบอร์เกอร์เคลื่อนไหว

const hamburgerBtn = document.getElementById("hamburgerBtn");
const navPanel = document.getElementById("navPanel");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = hamburgerBtn.classList.toggle("is-open");
  navPanel.classList.toggle("is-open", isOpen);

  hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
  hamburgerBtn.setAttribute("aria-label", isOpen ? "ปิดเมนู" : "เปิดเมนู");
  navPanel.setAttribute("aria-hidden", String(!isOpen));
});

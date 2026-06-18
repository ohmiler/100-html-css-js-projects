// EP53: กลับด้านบน

const backToTopBtn = document.getElementById("backToTop");
const SCROLL_THRESHOLD = 300;

// แสดง/ซ่อนปุ่มตามตำแหน่ง scroll
function updateBackToTopVisibility() {
  const shouldShow = window.scrollY > SCROLL_THRESHOLD;

  backToTopBtn.classList.toggle("is-visible", shouldShow);
  backToTopBtn.hidden = !shouldShow;
}

window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });

// เลื่อนกลับด้านบนอย่างนุ่มนวล
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

updateBackToTopVisibility();

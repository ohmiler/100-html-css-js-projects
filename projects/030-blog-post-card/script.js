const excerptText = document.getElementById("excerptText");
const readMoreBtn = document.getElementById("readMoreBtn");

let isExpanded = false;

// สลับแสดง excerpt เต็ม / ย่อ 2 บรรทัด
readMoreBtn.addEventListener("click", () => {
  isExpanded = !isExpanded;

  excerptText.classList.toggle("is-clamped", !isExpanded);
  readMoreBtn.textContent = isExpanded ? "ย่อ" : "อ่านต่อ";
  readMoreBtn.classList.toggle("is-expanded", isExpanded);
});

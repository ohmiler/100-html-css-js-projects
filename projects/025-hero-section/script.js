const ctaBtn = document.getElementById("ctaBtn");
const nextSection = document.getElementById("next");

// คลิก CTA — smooth scroll ไป section ถัดไป
ctaBtn.addEventListener("click", () => {
  nextSection.scrollIntoView({ behavior: "smooth" });
});

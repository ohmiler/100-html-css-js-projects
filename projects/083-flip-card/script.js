const flipCard = document.getElementById("flipCard");

// สลับคลาส flipped เมื่อคลิก
flipCard.addEventListener("click", () => {
  const isFlipped = flipCard.classList.toggle("flipped");
  flipCard.setAttribute("aria-pressed", String(isFlipped));
});

// รองรับ Enter / Space สำหรับ accessibility
flipCard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    flipCard.click();
  }
});

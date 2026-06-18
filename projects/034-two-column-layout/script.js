const layout = document.getElementById("layout");
const swapBtn = document.getElementById("swapBtn");

// สลับลำดับคอลัมน์ด้วย class ที่เปลี่ยน flex-direction
swapBtn.addEventListener("click", () => {
  layout.classList.toggle("is-reversed");
});

const neonText = document.getElementById("neonText");
const colorBtn = document.getElementById("colorBtn");

// สีนีออนที่สลับได้
const neonColors = ["pink", "cyan", "green"];
let colorIndex = 0;

colorBtn.addEventListener("click", () => {
  colorIndex = (colorIndex + 1) % neonColors.length;
  neonText.dataset.color = neonColors[colorIndex];
});

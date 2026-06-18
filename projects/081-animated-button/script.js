const ctaBtn = document.getElementById("ctaBtn");

// สร้าง ripple จากตำแหน่งคลิก
ctaBtn.addEventListener("click", (event) => {
  const rect = ctaBtn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  ctaBtn.appendChild(ripple);

  ripple.addEventListener("animationend", () => ripple.remove());
});

const slider = document.getElementById("slider");
const track = document.getElementById("track");
const dotsContainer = document.getElementById("dots");
const prevBtn = slider.querySelector(".slider-btn--prev");
const nextBtn = slider.querySelector(".slider-btn--next");
const slides = track.querySelectorAll(".slide");

const AUTOPLAY_MS = 3000;
let currentIndex = 0;
let autoplayTimer = null;

// สร้างจุดบอกตำแหน่งสไลด์
slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "dot" + (i === 0 ? " is-active" : "");
  dot.type = "button";
  dot.setAttribute("aria-label", `สไลด์ที่ ${i + 1}`);
  dot.addEventListener("click", () => goTo(i));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll(".dot");

// เลื่อน track ด้วย translateX
function goTo(index) {
  currentIndex = ((index % slides.length) + slides.length) % slides.length;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("is-active", i === currentIndex);
  });
}

function next() {
  goTo(currentIndex + 1);
}

function prev() {
  goTo(currentIndex - 1);
}

// เริ่มเล่นอัตโนมัติ
function startAutoplay() {
  stopAutoplay();
  autoplayTimer = setInterval(next, AUTOPLAY_MS);
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

prevBtn.addEventListener("click", () => {
  prev();
  startAutoplay();
});

nextBtn.addEventListener("click", () => {
  next();
  startAutoplay();
});

// หยุด autoplay เมื่อ hover
slider.addEventListener("mouseenter", stopAutoplay);
slider.addEventListener("mouseleave", startAutoplay);

startAutoplay();

// เลือก element จาก DOM
const swapImage = document.getElementById("swapImage");
const swapBtn = document.getElementById("swapBtn");

// URL รูป 2 รูปจาก picsum — ใช้ seed ต่างกันเพื่อให้รูปไม่ซ้ำ
const images = [
  "https://picsum.photos/seed/ep11a/400/300",
  "https://picsum.photos/seed/ep11b/400/300",
];

// ติดตาม index รูปปัจจุบัน
let currentIndex = 0;

// ฟัง event คลิกปุ่มสลับรูป
swapBtn.addEventListener("click", () => {
  // วนลูป index 0 → 1 → 0 → ...
  currentIndex = (currentIndex + 1) % images.length;
  swapImage.src = images[currentIndex];
});

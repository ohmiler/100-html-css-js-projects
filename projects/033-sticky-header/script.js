const siteHeader = document.getElementById("siteHeader");

// จุด scroll ที่เริ่มย่อ header
const COMPACT_THRESHOLD = 100;

function updateHeaderOnScroll() {
  const scrollY = window.scrollY;

  // เพิ่มเงาเมื่อ scroll ลงจากด้านบน
  siteHeader.classList.toggle("is-scrolled", scrollY > 0);

  // ย่อความสูง header เมื่อ scroll ผ่าน 100px
  siteHeader.classList.toggle("is-compact", scrollY > COMPACT_THRESHOLD);
}

window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();

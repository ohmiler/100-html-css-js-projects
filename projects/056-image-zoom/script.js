// EP56: ซูมรูปภาพ — คลิกเพื่อซูม/รีเซ็ต จุดกำเนิดตามตำแหน่งคลิก
const img = document.getElementById("zoomImg");
let isZoomed = false;

img.addEventListener("click", (event) => {
  if (isZoomed) {
    // คลิกซ้ำเพื่อรีเซ็ต
    img.classList.remove("zoomed");
    img.style.transformOrigin = "center center";
    isZoomed = false;
    return;
  }

  // คำนวณ transform-origin จากจุดที่คลิก
  const rect = img.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  const originX = (offsetX / rect.width) * 100;
  const originY = (offsetY / rect.height) * 100;

  img.style.transformOrigin = `${originX}% ${originY}%`;
  img.classList.add("zoomed");
  isZoomed = true;
});

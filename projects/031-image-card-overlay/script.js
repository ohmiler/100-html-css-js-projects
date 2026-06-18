const viewMoreBtn = document.querySelector("[data-view-more]");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const cardImg = document.querySelector(".image-card__img");
const closeTargets = document.querySelectorAll("[data-close-lightbox]");

// URL รูปใหญ่สำหรับ lightbox
const largeImageUrl = "https://picsum.photos/seed/ep31/960/640";

// เปิด lightbox และใส่รูปขนาดใหญ่
function openLightbox() {
  lightboxImg.src = largeImageUrl;
  lightbox.hidden = false;
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lightbox.querySelector(".lightbox__close").focus();
}

// ปิด lightbox และคืน scroll ของหน้า
function closeLightbox() {
  lightbox.hidden = true;
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  document.body.style.overflow = "";
  viewMoreBtn.focus();
}

viewMoreBtn.addEventListener("click", (event) => {
  // กัน event ไม่ให้ bubble ไปที่การ์ด
  event.stopPropagation();
  openLightbox();
});

closeTargets.forEach((el) => {
  el.addEventListener("click", closeLightbox);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) {
    closeLightbox();
  }
});

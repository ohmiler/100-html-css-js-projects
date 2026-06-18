const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

// กรองแสดงเฉพาะรายการที่ตรงหมวด
function filterGallery(category) {
  galleryItems.forEach((item) => {
    const itemCategory = item.dataset.category;
    const shouldShow = category === "all" || itemCategory === category;
    item.classList.toggle("is-hidden", !shouldShow);
  });
}

// อัปเดตปุ่ม filter ที่ active
function setActiveFilter(activeBtn) {
  filterButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn === activeBtn);
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setActiveFilter(btn);
    filterGallery(btn.dataset.filter);
  });
});

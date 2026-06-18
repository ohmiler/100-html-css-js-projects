const gallery = document.getElementById("gallery");
const items = gallery.querySelectorAll(".gallery__item");

// คลิกรูปเพื่อ toggle highlight — คลิกซ้ำจะยกเลิก
items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("is-selected");
  });
});

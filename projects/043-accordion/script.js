const accordion = document.getElementById("accordion");
const items = accordion.querySelectorAll(".accordion__item");

// เปิดรายการเดียว ปิดรายการอื่นทั้งหมด
function openItem(targetItem) {
  items.forEach((item) => {
    const header = item.querySelector(".accordion__header");
    const content = item.querySelector(".accordion__content");
    const isTarget = item === targetItem;
    const willOpen = isTarget && !item.classList.contains("is-open");

    item.classList.toggle("is-open", willOpen);
    header.setAttribute("aria-expanded", String(willOpen));

    if (willOpen) {
      content.style.maxHeight = `${content.scrollHeight}px`;
    } else {
      content.style.maxHeight = "0";
    }
  });
}

items.forEach((item) => {
  const header = item.querySelector(".accordion__header");

  header.addEventListener("click", () => {
    openItem(item);
  });
});

// ปรับ max-height ใหม่เมื่อ resize หน้าจอ
window.addEventListener("resize", () => {
  const openItemEl = accordion.querySelector(".accordion__item.is-open");

  if (openItemEl) {
    const content = openItemEl.querySelector(".accordion__content");
    content.style.maxHeight = `${content.scrollHeight}px`;
  }
});

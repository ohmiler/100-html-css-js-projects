// EP64: ค้นหาพร้อมคำแนะนำ

const suggestions = [
  "กรุงเทพมหานคร",
  "เชียงใหม่",
  "ภูเก็ต",
  "ขอนแก่น",
  "อุดรธานี",
  "หาดใหญ่",
  "นครราชสีมา",
  "ผัดไทย",
  "ต้มยำกุ้ง",
  "ส้มตำ",
  "ข้าวมันไก่",
  "แกงเขียวหวาน",
  "ข้าวซอย",
  "มาม่าต้มยำ",
  "ลาบหมู",
  "ก๋วยเตี๋ยวเรือ",
  "หมูสะเต๊ะ",
  "ข้าวผัด",
  "แกงมัสมั่น",
  "ปลาทอดน้ำปลา",
];

const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestionsList");

let filteredItems = [];
let activeIndex = -1;
let debounceTimer = null;

// กรองรายการตามคำค้นหา
function filterSuggestions(query) {
  const keyword = query.trim().toLowerCase();
  if (!keyword) return [];

  return suggestions.filter((item) => item.toLowerCase().includes(keyword));
}

// เรนเดอร์รายการคำแนะนำ
function renderSuggestions(items) {
  suggestionsList.innerHTML = "";
  activeIndex = -1;

  if (items.length === 0) {
    suggestionsList.hidden = true;
    searchInput.setAttribute("aria-expanded", "false");
    return;
  }

  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.setAttribute("role", "option");
    li.dataset.index = String(index);

    li.addEventListener("mousedown", (event) => {
      event.preventDefault();
      selectSuggestion(item);
    });

    suggestionsList.appendChild(li);
  });

  suggestionsList.hidden = false;
  searchInput.setAttribute("aria-expanded", "true");
}

function highlightActive() {
  const items = suggestionsList.querySelectorAll("li");

  items.forEach((li, index) => {
    li.classList.toggle("is-active", index === activeIndex);
    li.setAttribute("aria-selected", String(index === activeIndex));
  });

  if (activeIndex >= 0 && items[activeIndex]) {
    items[activeIndex].scrollIntoView({ block: "nearest" });
  }
}

function selectSuggestion(value) {
  searchInput.value = value;
  suggestionsList.hidden = true;
  searchInput.setAttribute("aria-expanded", "false");
  filteredItems = [];
  activeIndex = -1;
}

function handleInput() {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    filteredItems = filterSuggestions(searchInput.value);
    renderSuggestions(filteredItems);
  }, 300);
}

searchInput.addEventListener("input", handleInput);

searchInput.addEventListener("keydown", (event) => {
  if (suggestionsList.hidden || filteredItems.length === 0) return;

  if (event.key === "ArrowDown") {
    event.preventDefault();
    activeIndex = (activeIndex + 1) % filteredItems.length;
    highlightActive();
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    activeIndex = activeIndex <= 0 ? filteredItems.length - 1 : activeIndex - 1;
    highlightActive();
  }

  if (event.key === "Enter" && activeIndex >= 0) {
    event.preventDefault();
    selectSuggestion(filteredItems[activeIndex]);
  }

  if (event.key === "Escape") {
    suggestionsList.hidden = true;
    searchInput.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-wrap")) {
    suggestionsList.hidden = true;
    searchInput.setAttribute("aria-expanded", "false");
  }
});

// EP74: Autocomplete เมืองไทย — กรอง, ไฮไลต์, ลูกศร, Enter, ปิดเมื่อ blur/คลิกนอก
const THAI_CITIES = [
  "กรุงเทพมหานคร",
  "เชียงใหม่",
  "เชียงราย",
  "ขอนแก่น",
  "นครราชสีมา",
  "ภูเก็ต",
  "สงขลา",
  "อุดรธานี",
  "พัทยา",
  "หาดใหญ่",
  "นครศรีธรรมราช",
  "ลำปาง",
  "อุบลราชธานี",
  "สุราษฎร์ธานี",
  "ระยอง",
  "นนทบุรี",
  "ปทุมธานี",
  "สมุทรปราการ",
  "ชลบุรี",
  "พระนครศรีอยุธยา",
];

const combobox = document.getElementById("combobox");
const input = document.getElementById("cityInput");
const listbox = document.getElementById("cityListbox");

let filteredCities = [];
let activeIndex = -1;

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function highlightMatch(city, query) {
  if (!query) return escapeHtml(city);

  const lowerCity = city.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const matchIndex = lowerCity.indexOf(lowerQuery);

  if (matchIndex === -1) return escapeHtml(city);

  const before = city.slice(0, matchIndex);
  const match = city.slice(matchIndex, matchIndex + query.length);
  const after = city.slice(matchIndex + query.length);

  return `${escapeHtml(before)}<mark>${escapeHtml(match)}</mark>${escapeHtml(after)}`;
}

function filterCities(query) {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [...THAI_CITIES];
  return THAI_CITIES.filter((city) => city.toLowerCase().includes(trimmed));
}

function openListbox() {
  listbox.hidden = false;
  input.setAttribute("aria-expanded", "true");
}

function closeListbox() {
  listbox.hidden = true;
  input.setAttribute("aria-expanded", "false");
  activeIndex = -1;
}

function setActiveOption(index) {
  const options = listbox.querySelectorAll(".combobox__option");
  options.forEach((option, i) => {
    option.classList.toggle("is-active", i === index);
    option.setAttribute("aria-selected", i === index ? "true" : "false");
  });
  activeIndex = index;

  if (index >= 0 && options[index]) {
    options[index].scrollIntoView({ block: "nearest" });
  }
}

function selectCity(city) {
  input.value = city;
  closeListbox();
  input.focus();
}

function renderSuggestions(query) {
  filteredCities = filterCities(query);
  listbox.innerHTML = "";

  if (filteredCities.length === 0) {
    const empty = document.createElement("li");
    empty.className = "combobox__empty";
    empty.textContent = "ไม่พบเมืองที่ค้นหา";
    listbox.appendChild(empty);
    openListbox();
    return;
  }

  filteredCities.forEach((city, index) => {
    const option = document.createElement("li");
    option.className = "combobox__option";
    option.role = "option";
    option.id = `city-option-${index}`;
    option.innerHTML = highlightMatch(city, query);
    option.addEventListener("mousedown", (event) => {
      event.preventDefault();
      selectCity(city);
    });
    listbox.appendChild(option);
  });

  openListbox();
  setActiveOption(-1);
}

input.addEventListener("input", () => {
  renderSuggestions(input.value);
});

input.addEventListener("focus", () => {
  renderSuggestions(input.value);
});

input.addEventListener("blur", () => {
  closeListbox();
});

input.addEventListener("keydown", (event) => {
  if (listbox.hidden) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      renderSuggestions(input.value);
    }
    return;
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    const nextIndex = activeIndex < filteredCities.length - 1 ? activeIndex + 1 : 0;
    setActiveOption(nextIndex);
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    const prevIndex = activeIndex > 0 ? activeIndex - 1 : filteredCities.length - 1;
    setActiveOption(prevIndex);
  }

  if (event.key === "Enter") {
    event.preventDefault();
    if (activeIndex >= 0 && filteredCities[activeIndex]) {
      selectCity(filteredCities[activeIndex]);
    }
  }

  if (event.key === "Escape") {
    closeListbox();
  }
});

document.addEventListener("click", (event) => {
  if (!combobox.contains(event.target)) {
    closeListbox();
  }
});

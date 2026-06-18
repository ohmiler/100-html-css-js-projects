const dropdown = document.getElementById("dropdown");
const trigger = document.getElementById("dropdownTrigger");
const menu = document.getElementById("dropdownMenu");
const result = document.getElementById("dropdownResult");
const items = menu.querySelectorAll(".dropdown__item");

let focusIndex = -1;

function isOpen() {
  return trigger.getAttribute("aria-expanded") === "true";
}

function openMenu(focusFirst = false) {
  trigger.setAttribute("aria-expanded", "true");
  menu.hidden = false;

  if (focusFirst) {
    focusIndex = 0;
    updateFocus();
  }
}

function closeMenu() {
  trigger.setAttribute("aria-expanded", "false");
  menu.hidden = true;
  clearFocus();
  focusIndex = -1;
}

function toggleMenu() {
  if (isOpen()) {
    closeMenu();
  } else {
    openMenu();
  }
}

function clearFocus() {
  items.forEach((item) => item.classList.remove("is-focused"));
}

function updateFocus() {
  clearFocus();

  if (focusIndex >= 0 && focusIndex < items.length) {
    items[focusIndex].classList.add("is-focused");
    items[focusIndex].focus();
  }
}

function selectItem(item) {
  const labels = {
    edit: "แก้ไข",
    duplicate: "ทำสำเนา",
    archive: "เก็บถาวร",
    delete: "ลบ",
  };

  result.textContent = `เลือก: ${labels[item.dataset.value]}`;
  closeMenu();
  trigger.focus();
}

trigger.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMenu();
});

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    selectItem(item);
  });

  item.addEventListener("mouseenter", () => {
    focusIndex = index;
    updateFocus();
  });
});

// ปิดเมื่อคลิกนอก dropdown
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target) && isOpen()) {
    closeMenu();
  }
});

// นำทางด้วย ArrowDown / ArrowUp และ Enter
trigger.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();

    if (!isOpen()) {
      openMenu(true);
      return;
    }

    if (event.key === "ArrowDown") {
      focusIndex = (focusIndex + 1) % items.length;
    } else {
      focusIndex = (focusIndex - 1 + items.length) % items.length;
    }

    updateFocus();
  }

  if (event.key === "Enter" && isOpen() && focusIndex >= 0) {
    event.preventDefault();
    selectItem(items[focusIndex]);
  }

  if (event.key === "Escape" && isOpen()) {
    closeMenu();
  }
});

menu.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown") {
    event.preventDefault();
    focusIndex = (focusIndex + 1) % items.length;
    updateFocus();
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    focusIndex = (focusIndex - 1 + items.length) % items.length;
    updateFocus();
  }

  if (event.key === "Enter" && focusIndex >= 0) {
    event.preventDefault();
    selectItem(items[focusIndex]);
  }

  if (event.key === "Escape") {
    closeMenu();
    trigger.focus();
  }
});

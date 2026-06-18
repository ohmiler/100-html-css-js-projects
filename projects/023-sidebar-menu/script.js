const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const menuLinks = document.querySelectorAll(".sidebar__link");

// key สำหรับเก็บสถานะใน localStorage
const STORAGE_KEY = "sidebarCollapsed";

// อ่านสถานะที่บันทึกไว้
function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "true") {
    sidebar.classList.add("collapsed");
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.setAttribute("aria-label", "ขยายเมนู");
  }
}

// บันทึกสถานะลง localStorage
function saveState() {
  const isCollapsed = sidebar.classList.contains("collapsed");
  localStorage.setItem(STORAGE_KEY, String(isCollapsed));
}

// สลับ class collapsed
function toggleSidebar() {
  sidebar.classList.toggle("collapsed");

  const isCollapsed = sidebar.classList.contains("collapsed");
  toggleBtn.setAttribute("aria-expanded", String(!isCollapsed));
  toggleBtn.setAttribute("aria-label", isCollapsed ? "ขยายเมนู" : "ย่อเมนู");

  saveState();
}

toggleBtn.addEventListener("click", toggleSidebar);

// เปลี่ยน active เมนู
menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    menuLinks.forEach((item) => item.classList.remove("sidebar__link--active"));
    link.classList.add("sidebar__link--active");
  });
});

loadState();

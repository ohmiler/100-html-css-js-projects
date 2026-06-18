const toggleBtn = document.querySelector(".navbar__toggle");
const nav = document.querySelector(".navbar__nav");
const navLinks = document.querySelectorAll(".navbar__link");

// เปิด/ปิดเมนูบนมือถือ
function toggleMenu() {
  const isOpen = nav.classList.toggle("nav--open");
  toggleBtn.setAttribute("aria-expanded", String(isOpen));
  toggleBtn.setAttribute("aria-label", isOpen ? "ปิดเมนู" : "เปิดเมนู");
}

toggleBtn.addEventListener("click", toggleMenu);

// ปิดเมนูเมื่อคลิกลิงก์บนมือถือ
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("navbar__link--active"));
    link.classList.add("navbar__link--active");

    // ปิดเมนูถ้าหน้าจอแคบ (mobile)
    if (window.matchMedia("(max-width: 768px)").matches) {
      nav.classList.remove("nav--open");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.setAttribute("aria-label", "เปิดเมนู");
    }
  });
});

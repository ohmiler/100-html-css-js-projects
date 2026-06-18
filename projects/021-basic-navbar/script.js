// เลือกลิงก์ทั้งหมดใน navbar
const navLinks = document.querySelectorAll(".navbar__link");

// เมื่อคลิกลิงก์ — เปลี่ยน active และแสดง underline
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // ลบ class active จากทุกลิงก์
    navLinks.forEach((item) => item.classList.remove("navbar__link--active"));

    // เพิ่ม active ให้ลิงก์ที่คลิก
    link.classList.add("navbar__link--active");
  });
});

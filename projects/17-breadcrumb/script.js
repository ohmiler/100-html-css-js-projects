const breadcrumbLinks = document.querySelectorAll(".breadcrumb-link");
const pageDisplay = document.getElementById("pageDisplay");
const currentPage = document.querySelector(".breadcrumb-current");

// ชื่อหน้าภาษาไทยตาม data-page
const pageLabels = {
  home: "หน้าแรก",
  products: "สินค้า",
  electronics: "อิเล็กทรอนิกส์",
};

// แสดงชื่อหน้าที่คลิกด้านล่าง breadcrumb
function showPage(pageKey) {
  const label = pageLabels[pageKey];
  pageDisplay.textContent = `หน้าปัจจุบัน: ${label}`;
}

breadcrumbLinks.forEach((link) => {
  link.addEventListener("click", () => {
    showPage(link.dataset.page);
  });
});

// ค่าเริ่มต้นจากรายการสุดท้าย (ข้อความธรรมดา)
pageDisplay.textContent = `หน้าปัจจุบัน: ${currentPage.textContent}`;

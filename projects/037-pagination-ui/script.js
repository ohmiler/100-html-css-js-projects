const pageContent = document.getElementById("pageContent");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageButtons = document.querySelectorAll(".page-btn--num");

const TOTAL_PAGES = 5;
let currentPage = 1;

// ข้อมูลจำลองแต่ละหน้า
const mockPages = {
  1: { title: "หน้า 1 — สินค้าใหม่", items: ["เสื้อยืดออร์แกนิก", "กระเป๋าผ้า", "แก้วเก็บความร้อน"] },
  2: { title: "หน้า 2 — ขายดี", items: ["หูฟังไร้สาย", "เมาส์เกมมิ่ง", "คีย์บอร์ดเมคานิคัล"] },
  3: { title: "หน้า 3 — ลดราคา", items: ["รองเท้าวิ่ง", "นาฬิกาสมาร์ท", "กล้องอCompact"] },
  4: { title: "หน้า 4 — ของขวัญ", items: ["ชุดเทียนหอม", "สมุดโน้ต", "กล่องของขวัญ"] },
  5: { title: "หน้า 5 — สินค้าสุดท้าย", items: ["หมวกกันแดด", "ผ้าพันคอ", "ถุงมือ"] },
};

// แสดงเนื้อหาตามหน้าปัจจุบัน
function renderPage(page) {
  const data = mockPages[page];
  const listItems = data.items.map((item) => `<li>${item}</li>`).join("");

  pageContent.innerHTML = `
    <h2>${data.title}</h2>
    <ul>${listItems}</ul>
  `;
}

// อัปเดตสถานะปุ่ม active และ disabled
function updateControls() {
  pageButtons.forEach((btn) => {
    const pageNum = Number(btn.dataset.page);
    btn.classList.toggle("is-active", pageNum === currentPage);
  });

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === TOTAL_PAGES;
}

// เปลี่ยนไปหน้าที่กำหนด
function goToPage(page) {
  if (page < 1 || page > TOTAL_PAGES) return;
  currentPage = page;
  renderPage(currentPage);
  updateControls();
}

pageButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    goToPage(Number(btn.dataset.page));
  });
});

prevBtn.addEventListener("click", () => {
  goToPage(currentPage - 1);
});

nextBtn.addEventListener("click", () => {
  goToPage(currentPage + 1);
});

goToPage(1);

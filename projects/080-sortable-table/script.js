// EP80: ตารางเรียงลำดับด้วยหัวคอลัมน์
const products = [
  { name: "เสื้อยืดคอวี", price: 390 },
  { name: "กางเกงยีนส์", price: 1290 },
  { name: "รองเท้าผ้าใบ", price: 1990 },
  { name: "เสื้อเชิ้ต", price: 890 },
  { name: "กระเป๋าสะพาย", price: 1590 },
  { name: "หมวกแก๊ป", price: 290 },
  { name: "ถุงเท้า (แพ็ก 3)", price: 190 },
  { name: "แจ็กเก็ตลม", price: 2490 },
];

const tableBody = document.getElementById("tableBody");
const headers = [...document.querySelectorAll(".sortable")];

let sortKey = "name";
let sortDir = "asc";

// เรียงข้อมูลตามคีย์และทิศทาง
function getSortedProducts() {
  const sorted = [...products];

  sorted.sort((a, b) => {
    const valA = a[sortKey];
    const valB = b[sortKey];

    let cmp = 0;
    if (typeof valA === "string") {
      cmp = valA.localeCompare(valB, "th");
    } else {
      cmp = valA - valB;
    }

    return sortDir === "asc" ? cmp : -cmp;
  });

  return sorted;
}

// อัปเดตลูกศรบนหัวคอลัมน์ที่ใช้งาน
function updateHeaderIndicators() {
  headers.forEach((th) => {
    const isActive = th.dataset.key === sortKey;
    th.classList.toggle("is-active", isActive);
    th.classList.toggle("is-asc", isActive && sortDir === "asc");
    th.classList.toggle("is-desc", isActive && sortDir === "desc");

    if (isActive) {
      th.setAttribute("aria-sort", sortDir === "asc" ? "ascending" : "descending");
    } else {
      th.removeAttribute("aria-sort");
    }
  });
}

// เรนเดอร์แถวใหม่ตามลำดับที่เรียง
function renderTable() {
  const sorted = getSortedProducts();

  tableBody.innerHTML = sorted
    .map(
      (p) => `
        <tr>
          <td>${p.name}</td>
          <td class="price-cell">฿${p.price.toLocaleString("th-TH")}</td>
        </tr>
      `
    )
    .join("");
}

// คลิกหัวคอลัมน์ — สลับ asc/desc หรือเปลี่ยนคอลัมน์
headers.forEach((th) => {
  th.addEventListener("click", () => {
    const key = th.dataset.key;

    if (sortKey === key) {
      sortDir = sortDir === "asc" ? "desc" : "asc";
    } else {
      sortKey = key;
      sortDir = "asc";
    }

    updateHeaderIndicators();
    renderTable();
  });
});

updateHeaderIndicators();
renderTable();

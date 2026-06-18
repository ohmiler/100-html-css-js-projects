// รายการเมนูอาหารไทย
const items = [
  { name: "ผัดไทย", category: "เส้น" },
  { name: "ต้มยำกุ้ง", category: "แกง" },
  { name: "แกงเขียวหวาน", category: "แกง" },
  { name: "ส้มตำ", category: "ยำ" },
  { name: "ข้าวมันไก่", category: "ข้าว" },
  { name: "ข้าวผัด", category: "ข้าว" },
  { name: "ลาบหมู", category: "ยำ" },
  { name: "แกงมัสมั่น", category: "แกง" },
  { name: "ข้าวซอย", category: "เส้น" },
  { name: "ปลาทอดน้ำปลา", category: "ทอด" },
  { name: "หมูสะเต๊ะ", category: "ย่าง" },
  { name: "ก๋วยเตี๋ยวเรือ", category: "เส้น" },
];

const searchInput = document.getElementById("searchInput");
const itemList = document.getElementById("itemList");
const emptyMsg = document.getElementById("emptyMsg");

// กรองและเรนเดอร์รายการใหม่
function renderList(query) {
  const keyword = query.trim().toLowerCase();
  const filtered = keyword
    ? items.filter((item) => item.name.toLowerCase().includes(keyword))
    : items;

  itemList.innerHTML = "";

  if (filtered.length === 0) {
    emptyMsg.hidden = false;
    return;
  }

  emptyMsg.hidden = true;

  filtered.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="item-name">${item.name}</span>
      <span class="item-category">${item.category}</span>
    `;
    itemList.appendChild(li);
  });
}

searchInput.addEventListener("input", (e) => {
  renderList(e.target.value);
});

renderList("");

// EP79: ตัวกรองหมวดหมู่แบบชิป
const products = [
  { id: 1, name: "เสื้อยืดคอวี", category: "shirt", price: 390 },
  { id: 2, name: "เสื้อเชิ้ตลายทาง", category: "shirt", price: 890 },
  { id: 3, name: "กางเกงยีนส์สแล็ก", category: "pants", price: 1290 },
  { id: 4, name: "กางเกงขาสั้น", category: "pants", price: 590 },
  { id: 5, name: "รองเท้าผ้าใบขาว", category: "shoes", price: 1990 },
  { id: 6, name: "รองเท้าแตะ", category: "shoes", price: 490 },
  { id: 7, name: "เสื้อโปโล", category: "shirt", price: 790 },
  { id: 8, name: "กางเกงวอร์ม", category: "pants", price: 690 },
];

const categoryLabels = {
  shirt: "เสื้อ",
  pants: "กางเกง",
  shoes: "รองเท้า",
};

const chipGroup = document.getElementById("chipGroup");
const chips = [...chipGroup.querySelectorAll(".chip")];
const productList = document.getElementById("productList");
const resultCount = document.getElementById("resultCount");
const clearBtn = document.getElementById("clearFilters");

// เก็บหมวดหมู่ที่เลือกไว้ (หลายตัวพร้อมกันได้)
const activeCategories = new Set(["all"]);

// อัปเดตสไตล์ชิปตาม Set
function syncChipStyles() {
  chips.forEach((chip) => {
    const category = chip.dataset.category;
    chip.classList.toggle("is-active", activeCategories.has(category));
  });
}

// กรองสินค้าตามหมวดหมู่ที่เลือก
function getFilteredProducts() {
  if (activeCategories.has("all") || activeCategories.size === 0) {
    return products;
  }
  return products.filter((p) => activeCategories.has(p.category));
}

// แสดงรายการสินค้า
function renderProducts() {
  const filtered = getFilteredProducts();

  productList.innerHTML = filtered
    .map(
      (p) => `
        <li class="product-item">
          <div class="product-info">
            <p class="product-name">${p.name}</p>
            <p class="product-category">${categoryLabels[p.category]}</p>
          </div>
          <span class="product-price">฿${p.price.toLocaleString("th-TH")}</span>
        </li>
      `
    )
    .join("");

  resultCount.textContent = `แสดง ${filtered.length} รายการ`;
}

// สลับชิป — รองรับเลือกหลายหมวด
chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const category = chip.dataset.category;

    if (category === "all") {
      activeCategories.clear();
      activeCategories.add("all");
    } else {
      activeCategories.delete("all");

      if (activeCategories.has(category)) {
        activeCategories.delete(category);
      } else {
        activeCategories.add(category);
      }

      // ถ้าไม่มีหมวดใดเลือก กลับไป "ทั้งหมด"
      if (activeCategories.size === 0) {
        activeCategories.add("all");
      }
    }

    syncChipStyles();
    renderProducts();
  });
});

// ล้างตัวกรอง — รีเซ็ตเป็น "ทั้งหมด"
clearBtn.addEventListener("click", () => {
  activeCategories.clear();
  activeCategories.add("all");
  syncChipStyles();
  renderProducts();
});

syncChipStyles();
renderProducts();

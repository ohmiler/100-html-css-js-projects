// EP58: โหลดเพิ่มจาก mock data — แสดงทีละ 5 รายการ
const mockItems = [
  { icon: "🍜", title: "ก๋วยเตี๋ยวเรือ", desc: "เส้นเล็ก น้ำซุปเข้มข้น" },
  { icon: "🍛", title: "ข้าวมันไก่", desc: "ไก่ต้มนุ่ม น้ำจิ้มรสเด็ด" },
  { icon: "🥗", title: "สลัดผักสด", desc: "ผักออร์แกนิก น้ำสลัดงา" },
  { icon: "🍕", title: "พิซซ่าหน้าชีส", desc: "ชีสยืด แป้งบางกรอบ" },
  { icon: "🍣", title: "ซูชิแซลมอน", desc: "ปลาสด ข้าวปั้นพอดีคำ" },
  { icon: "🥘", title: "ต้มยำกุ้ง", desc: "รสจัดจ้าน หอมใบมะกรูด" },
  { icon: "🍔", title: "เบอร์เกอร์ชีส", desc: "เนื้อย่าง ชีสละลาย" },
  { icon: "🌮", title: "ทาโก้เนื้อ", desc: "แป้งกรอบ ซัลซ่าสด" },
  { icon: "🍝", title: "พาสต้าซอสครีม", desc: "เบคอนกรอบ ชีสละลาย" },
  { icon: "🥪", title: "แซนด์วิชไก่", desc: "ขนมปังโฮลวีท ผักสด" },
  { icon: "🍱", title: "ข้าวกล่องซาบะ", desc: "ปลาดิบ ไข่ปลาแดง" },
  { icon: "🧁", title: "คัพเค้กวานิลลา", desc: "ครีมนุ่ม หวานพอดี" },
  { icon: "🍩", title: "โดนัทช็อกโกแลต", desc: "โกโก้เข้ม แป้งฟู" },
  { icon: "🥤", title: "ชาไข่มุก", desc: "ไข่มุกเหนียว ชานมหอม" },
  { icon: "🍦", title: "ไอศกรีมมะพร้าว", desc: "มะพร้าวสด หวานเย็น" },
  { icon: "🥟", title: "ขนมจีบญี่ปุ่น", desc: "แป้งบาง ไส้หมูสับ" },
  { icon: "🍲", title: "หม้อไฟทะเล", desc: "อาหารทะเลสด น้ำซุปใส" },
  { icon: "🌯", title: "ห่อหมูย่าง", desc: "แป้งห่อ ไส้แน่น" },
];

const BATCH_SIZE = 5;
const listEl = document.getElementById("itemList");
const loadMoreBtn = document.getElementById("loadMoreBtn");
let loadedCount = 0;

function createItemElement(item, index) {
  const li = document.createElement("li");
  li.className = "item-card";
  li.innerHTML = `
    <span class="item-icon" aria-hidden="true">${item.icon}</span>
    <div class="item-body">
      <p class="item-title">${item.title}</p>
      <p class="item-desc">${item.desc}</p>
    </div>
  `;
  li.dataset.index = index;
  return li;
}

function renderBatch() {
  const nextBatch = mockItems.slice(loadedCount, loadedCount + BATCH_SIZE);

  nextBatch.forEach((item, i) => {
    listEl.appendChild(createItemElement(item, loadedCount + i));
  });

  loadedCount += nextBatch.length;

  // ซ่อนปุ่มเมื่อโหลดครบแล้ว
  if (loadedCount >= mockItems.length) {
    loadMoreBtn.classList.add("is-hidden");
  }
}

loadMoreBtn.addEventListener("click", renderBatch);

// แสดง 5 รายการแรกตอนเริ่มต้น
renderBatch();

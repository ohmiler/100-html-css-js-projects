const tagInput = document.getElementById("tagInput");
const tagList = document.getElementById("tagList");
const duplicateMsg = document.getElementById("duplicateMsg");

// เก็บ tag ที่มีอยู่เพื่อตรวจสอบซ้ำ
const tags = new Set();

// สร้าง chip element สำหรับ tag หนึ่งรายการ
function createTagChip(label) {
  const item = document.createElement("li");
  item.className = "tag-chip";
  item.dataset.tag = label;

  const text = document.createElement("span");
  text.textContent = label;

  const removeBtn = document.createElement("button");
  removeBtn.className = "tag-remove";
  removeBtn.type = "button";
  removeBtn.setAttribute("aria-label", `ลบ tag ${label}`);
  removeBtn.textContent = "×";

  // ลบ tag เมื่อกดปุ่ม x
  removeBtn.addEventListener("click", () => {
    tags.delete(label);
    item.remove();
  });

  item.append(text, removeBtn);
  return item;
}

// เพิ่ม tag ใหม่ถ้ายังไม่ซ้ำ
function addTag(rawValue) {
  const label = rawValue.trim();

  // ไม่เพิ่มถ้าว่าง
  if (!label) {
    return;
  }

  // ป้องกัน tag ซ้ำ
  if (tags.has(label)) {
    duplicateMsg.textContent = `"${label}" มีอยู่แล้ว`;
    return;
  }

  duplicateMsg.textContent = "";
  tags.add(label);
  tagList.appendChild(createTagChip(label));
}

// กด Enter ในช่อง input เพื่อเพิ่ม tag
tagInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  event.preventDefault();
  addTag(tagInput.value);
  tagInput.value = "";
  tagInput.focus();
});

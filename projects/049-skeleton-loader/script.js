const skeleton = document.getElementById("skeleton");
const content = document.getElementById("content");

const LOAD_DELAY_MS = 2500;

// หลังดีเลย์ สลับจากสเกเลตันเป็นเนื้อหาจริง
setTimeout(() => {
  skeleton.hidden = true;
  content.hidden = false;
}, LOAD_DELAY_MS);

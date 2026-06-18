// EP97: คำคมสุ่ม — อาร์เรย์คำคมภาษาไทยพร้อมผู้แต่ง

const quotes = [
  { text: "จงมั่นหวังในความอดทน จงอดทนในความทุกข์รำคาญ", author: "พระไบเบิล" },
  { text: "ความสำเร็จไม่ใช่จุดหมาย แต่คือการเดินทาง", author: "อาร์ทูร์ แอชลีย์" },
  { text: "วันนี้คือวันที่ดีที่สุดในการเริ่มต้นใหม่", author: "นิทานพื้นบ้าน" },
  { text: "การเรียนรู้ไม่มีที่สิ้นสุด", author: "คอนฟิวเชียส" },
  { text: "จงทำในวันนี้ให้ดีที่สุด วันพรุ่งนี้จะดูแลตัวเอง", author: "คำกล่าวไทย" },
  { text: "ความกล้าหาญคือการก้าวข้ามความกลัว", author: "เนลสัน แมนเดลา" },
  { text: "ทุกปัญหามีทางออกเสมอ", author: "คำกล่าวไทย" },
  { text: "จงเป็นตัวของตัวเอง เพราะคนอื่นมีคนอื่นแล้ว", author: "ออสการ์ ไวล์ด์" },
  { text: "ความพยายามอยู่ที่ไหน ความสำเร็จอยู่ที่นั่น", author: "คำกล่าวไทย" },
  { text: "อดทนอีกนิด แล้วจะเห็นผลลัพธ์", author: "คำกล่าวไทย" },
];

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const randomBtn = document.getElementById("randomBtn");
const copyBtn = document.getElementById("copyBtn");
const toast = document.getElementById("toast");

let currentIndex = -1;
let toastTimer = null;

// สุ่มคำคมที่ไม่ซ้ำกับคำคมปัจจุบัน
function pickRandomIndex() {
  if (quotes.length === 1) return 0;
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === currentIndex);
  return index;
}

// แสดงคำคมพร้อมเอฟเฟกต์ fade
function showQuote(index) {
  quoteText.classList.add("is-fading");
  quoteAuthor.classList.add("is-fading");

  setTimeout(() => {
    const quote = quotes[index];
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `— ${quote.author}`;
    currentIndex = index;

    quoteText.classList.remove("is-fading");
    quoteAuthor.classList.remove("is-fading");
  }, 350);
}

// สุ่มคำคมใหม่
function randomize() {
  showQuote(pickRandomIndex());
}

// คัดลอกคำคมไปยังคลิปบอร์ด
async function copyQuote() {
  if (currentIndex < 0) return;
  const quote = quotes[currentIndex];
  const text = `"${quote.text}" — ${quote.author}`;

  try {
    await navigator.clipboard.writeText(text);
    showToast("คัดลอกแล้ว!");
  } catch {
    showToast("ไม่สามารถคัดลอกได้");
  }
}

// แสดงข้อความแจ้งเตือนชั่วคราว
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2000);
}

randomBtn.addEventListener("click", randomize);
copyBtn.addEventListener("click", copyQuote);

// แสดงคำคมแรกเมื่อโหลดหน้า
randomize();

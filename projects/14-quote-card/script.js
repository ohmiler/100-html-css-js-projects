const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const randomBtn = document.getElementById("randomBtn");

// อาร์เรย์คำคมภาษาไทย 3 รายการ
const quotes = [
  { text: "การเดินทางพันไมล์ เริ่มต้นด้วยก้าวแรก", author: "Lao Tsu" },
  { text: "ความสำเร็จคือการลุกขึ้นอีกครั้งทุกครั้งที่ล้ม", author: "นิทานพื้นบ้าน" },
  { text: "วันนี้คือของขวัญ นั่นคือเหตุผลที่เรียกมันว่าปัจจุบัน", author: "Alice Walker" },
];

let lastIndex = 0;

// สุ่มคำคมโดยหลีกเลี่ยงคำคมซ้ำติดกัน
function getRandomQuoteIndex() {
  if (quotes.length <= 1) return 0;

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (newIndex === lastIndex);

  return newIndex;
}

function showQuote(index) {
  const quote = quotes[index];
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = `— ${quote.author}`;
  lastIndex = index;
}

randomBtn.addEventListener("click", () => {
  showQuote(getRandomQuoteIndex());
});

// EP90: เกมจำคู่ 4 การ์ด (2 คู่) — นับพลิกและแสดงข้อความชนะ

const symbols = ["🐱", "🐶"];
let cards = [];
let flipped = [];
let flipCount = 0;
let lockBoard = false;
let matchedPairs = 0;

const board = document.getElementById("board");
const flipCountEl = document.getElementById("flipCount");
const winMessage = document.getElementById("winMessage");
const restartBtn = document.getElementById("restartBtn");

// สุ่มลำดับการ์ด
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// สร้างกระดานเกม
function createBoard() {
  board.innerHTML = "";
  cards = shuffle([...symbols, ...symbols]);

  cards.forEach((symbol, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index;
    card.dataset.symbol = symbol;
    card.innerHTML = `
      <div class="card__inner">
        <div class="card__face card__face--front">?</div>
        <div class="card__face card__face--back">${symbol}</div>
      </div>
    `;
    card.addEventListener("click", () => flipCard(card));
    board.appendChild(card);
  });
}

// พลิกการ์ด
function flipCard(card) {
  if (
    lockBoard ||
    card.classList.contains("card--flipped") ||
    card.classList.contains("card--matched")
  ) {
    return;
  }

  card.classList.add("card--flipped");
  flipped.push(card);
  flipCount += 1;
  flipCountEl.textContent = flipCount;

  if (flipped.length === 2) {
    checkMatch();
  }
}

// ตรวจว่าจับคู่ได้หรือไม่
function checkMatch() {
  lockBoard = true;
  const [first, second] = flipped;
  const isMatch = first.dataset.symbol === second.dataset.symbol;

  if (isMatch) {
    first.classList.add("card--matched");
    second.classList.add("card--matched");
    matchedPairs += 1;
    resetTurn();

    if (matchedPairs === symbols.length) {
      winMessage.hidden = false;
    }
  } else {
    setTimeout(() => {
      first.classList.remove("card--flipped");
      second.classList.remove("card--flipped");
      resetTurn();
    }, 800);
  }
}

// รีเซ็ตรอบพลิก
function resetTurn() {
  flipped = [];
  lockBoard = false;
}

// เริ่มเกมใหม่
function restartGame() {
  flipCount = 0;
  matchedPairs = 0;
  flipCountEl.textContent = "0";
  winMessage.hidden = true;
  resetTurn();
  createBoard();
}

restartBtn.addEventListener("click", restartGame);
createBoard();

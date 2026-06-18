// EP91: เกม X O — ตรรกะกระดาน 2D, ตรวจชนะ/เสมอ, ไฮไลต์แถวที่ชนะ

const boardEl = document.getElementById("board");
const statusEl = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");

const SIZE = 3;
const WIN_LINES = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]],
];

// กระดาน 2D: null = ว่าง, "X" หรือ "O"
let board = createEmptyBoard();
let currentPlayer = "X";
let gameOver = false;
let winningLine = null;

function createEmptyBoard() {
  return Array.from({ length: SIZE }, () => Array(SIZE).fill(null));
}

// สร้างปุ่มกระดาน 3x3
function renderBoard() {
  boardEl.innerHTML = "";

  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "cell";
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.setAttribute("role", "gridcell");
      cell.setAttribute("aria-label", `ช่อง ${row + 1}-${col + 1}`);

      const value = board[row][col];
      if (value) {
        cell.textContent = value;
        cell.classList.add(value === "X" ? "cell--x" : "cell--o");
        cell.disabled = true;
      }

      if (winningLine && isWinningCell(row, col)) {
        cell.classList.add("cell--win");
      }

      if (!gameOver && !value) {
        cell.addEventListener("click", () => handleMove(row, col));
      } else if (gameOver) {
        cell.disabled = true;
      }

      boardEl.appendChild(cell);
    }
  }
}

function isWinningCell(row, col) {
  return winningLine.some(([r, c]) => r === row && c === col);
}

function handleMove(row, col) {
  if (gameOver || board[row][col]) return;

  board[row][col] = currentPlayer;

  const result = checkGameState();
  if (result === "win") {
    gameOver = true;
    statusEl.textContent = `${currentPlayer} ชนะ!`;
  } else if (result === "draw") {
    gameOver = true;
    statusEl.textContent = "เสมอ!";
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusEl.textContent = `ตาของ ${currentPlayer}`;
  }

  renderBoard();
}

// ตรวจชนะด้วย WIN_LINES บนอาร์เรย์ 2D
function checkGameState() {
  for (const line of WIN_LINES) {
    const [[r0, c0], [r1, c1], [r2, c2]] = line;
    const a = board[r0][c0];
    const b = board[r1][c1];
    const c = board[r2][c2];

    if (a && a === b && b === c) {
      winningLine = line;
      return "win";
    }
  }

  const isFull = board.every((row) => row.every((cell) => cell !== null));
  return isFull ? "draw" : "playing";
}

function resetGame() {
  board = createEmptyBoard();
  currentPlayer = "X";
  gameOver = false;
  winningLine = null;
  statusEl.textContent = "ตาของ X";
  renderBoard();
}

resetBtn.addEventListener("click", resetGame);
renderBoard();

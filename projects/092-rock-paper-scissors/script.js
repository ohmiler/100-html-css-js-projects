// EP92: ค้อน กรรไกร กระดาษ — สุ่มคอม, นับคะแนน, แข่ง 3 จาก 5

const playerScoreEl = document.getElementById("playerScore");
const cpuScoreEl = document.getElementById("cpuScore");
const roundResultEl = document.getElementById("roundResult");
const choicesEl = document.getElementById("choices");
const matchEndEl = document.getElementById("matchEnd");
const winnerTextEl = document.getElementById("winnerText");
const playAgainBtn = document.getElementById("playAgainBtn");

const CHOICES = ["rock", "scissors", "paper"];
const LABELS = {
  rock: "ค้อน",
  scissors: "กรรไกร",
  paper: "กระดาษ",
};
const WIN_TARGET = 3;

let playerScore = 0;
let cpuScore = 0;
let matchFinished = false;

// ค้อนชนะกรรไกร, กรรไกรชนะกระดาษ, กระดาษชนะค้อน
function getWinner(player, cpu) {
  if (player === cpu) return "draw";
  if (
    (player === "rock" && cpu === "scissors") ||
    (player === "scissors" && cpu === "paper") ||
    (player === "paper" && cpu === "rock")
  ) {
    return "player";
  }
  return "cpu";
}

function randomCpuChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function updateScoreboard() {
  playerScoreEl.textContent = String(playerScore);
  cpuScoreEl.textContent = String(cpuScore);
}

function setChoicesEnabled(enabled) {
  choicesEl.querySelectorAll(".choice-btn").forEach((btn) => {
    btn.disabled = !enabled;
  });
}

function endMatch(winner) {
  matchFinished = true;
  setChoicesEnabled(false);
  matchEndEl.classList.remove("hidden");

  if (winner === "player") {
    winnerTextEl.textContent = "🎉 คุณชนะแมตช์!";
  } else {
    winnerTextEl.textContent = "😔 คอมชนะแมตช์";
  }
}

function handleChoice(playerChoice) {
  if (matchFinished) return;

  const cpuChoice = randomCpuChoice();
  const result = getWinner(playerChoice, cpuChoice);

  if (result === "draw") {
    roundResultEl.textContent = `เสมอ! คุณ ${LABELS[playerChoice]} — คอม ${LABELS[cpuChoice]}`;
  } else if (result === "player") {
    playerScore += 1;
    roundResultEl.textContent = `คุณชนะรอบ! ${LABELS[playerChoice]} ชนะ ${LABELS[cpuChoice]}`;
  } else {
    cpuScore += 1;
    roundResultEl.textContent = `คอมชนะรอบ! ${LABELS[cpuChoice]} ชนะ ${LABELS[playerChoice]}`;
  }

  updateScoreboard();

  if (playerScore >= WIN_TARGET) {
    endMatch("player");
  } else if (cpuScore >= WIN_TARGET) {
    endMatch("cpu");
  }
}

function resetMatch() {
  playerScore = 0;
  cpuScore = 0;
  matchFinished = false;
  roundResultEl.textContent = "\u00a0";
  matchEndEl.classList.add("hidden");
  updateScoreboard();
  setChoicesEnabled(true);
}

choicesEl.addEventListener("click", (event) => {
  const btn = event.target.closest(".choice-btn");
  if (!btn) return;
  handleChoice(btn.dataset.choice);
});

playAgainBtn.addEventListener("click", resetMatch);
updateScoreboard();

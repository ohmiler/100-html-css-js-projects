// EP89: การ์ดควิซ — ตอบคำถามและแสดงคะแนนสุดท้าย

const questions = [
  {
    text: "เมืองหลวงของประเทศไทยคือเมืองใด?",
    options: ["เชียงใหม่", "กรุงเทพมหานคร", "ภูเก็ต", "ขอนแก่น"],
    correct: 1,
  },
  {
    text: "สีธงชาติไทยมีกี่สี?",
    options: ["2 สี", "3 สี", "4 สี", "5 สี"],
    correct: 3,
  },
  {
    text: "วันสงกรานต์ตรงกับเดือนใด?",
    options: ["มกราคม", "เมษายน", "กรกฎาคม", "ธันวาคม"],
    correct: 1,
  },
  {
    text: "อาหารไทยที่ขึ้นชื่อเรื่องความเผ็ดคือ?",
    options: ["ต้มยำกุ้ง", "ผัดไทย", "ส้มตำ", "แกงเขียวหวาน"],
    correct: 2,
  },
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const quizCard = document.getElementById("quizCard");
const resultCard = document.getElementById("resultCard");
const questionCounter = document.getElementById("questionCounter");
const questionText = document.getElementById("questionText");
const optionsList = document.getElementById("optionsList");
const nextBtn = document.getElementById("nextBtn");
const finalScore = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");
const restartBtn = document.getElementById("restartBtn");

// แสดงคำถามปัจจุบัน
function renderQuestion() {
  const q = questions[currentQuestion];
  answered = false;
  questionCounter.textContent = `ข้อ ${currentQuestion + 1} / ${questions.length}`;
  questionText.textContent = q.text;
  nextBtn.hidden = true;
  optionsList.innerHTML = "";

  q.options.forEach((option, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "quiz-card__option";
    btn.type = "button";
    btn.textContent = option;
    btn.addEventListener("click", () => selectAnswer(index, btn));
    li.appendChild(btn);
    optionsList.appendChild(li);
  });
}

// ตรวจคำตอบและไฮไลต์ถูก/ผิด
function selectAnswer(index, clickedBtn) {
  if (answered) return;
  answered = true;

  const q = questions[currentQuestion];
  const allBtns = optionsList.querySelectorAll(".quiz-card__option");

  allBtns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) {
      btn.classList.add("quiz-card__option--correct");
    }
    if (i === index && index !== q.correct) {
      btn.classList.add("quiz-card__option--wrong");
    }
  });

  if (index === q.correct) {
    score += 1;
  }

  nextBtn.hidden = false;
  nextBtn.textContent =
    currentQuestion < questions.length - 1 ? "ข้อถัดไป" : "ดูผลคะแนน";
}

// ไปข้อถัดไปหรือแสดงผลคะแนน
function goNext() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

// แสดงคะแนนสุดท้าย
function showResult() {
  quizCard.hidden = true;
  resultCard.hidden = false;
  finalScore.textContent = `${score} / ${questions.length}`;

  const percent = (score / questions.length) * 100;
  if (percent === 100) {
    resultMessage.textContent = "เยี่ยมมาก! ตอบถูกทุกข้อ";
  } else if (percent >= 50) {
    resultMessage.textContent = "ทำได้ดี! ลองเล่นอีกครั้งเพื่อคะแนนเต็ม";
  } else {
    resultMessage.textContent = "ลองใหม่อีกครั้งนะ";
  }
}

// เริ่มควิซใหม่
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultCard.hidden = true;
  quizCard.hidden = false;
  renderQuestion();
}

nextBtn.addEventListener("click", goNext);
restartBtn.addEventListener("click", restartQuiz);

renderQuestion();

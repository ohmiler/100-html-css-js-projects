// EP59: เอฟเฟกต์พิมพ์ทีละตัวอักษร วนผ่าน 3 ประโยคภาษาไทย
const sentences = [
  "สวัสดีครับ ยินดีต้อนรับสู่เว็บของเรา",
  "เรียนรู้ JavaScript ได้ง่ายและสนุก",
  "ลองพิมพ์ข้อความของคุณเองดูสิ",
];

const textEl = document.getElementById("typewriterText");
const TYPE_SPEED = 80;
const PAUSE_AFTER = 1800;
const DELETE_SPEED = 45;

let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;
let intervalId = null;

function clearTypeTimer() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function startInterval(speed, callback) {
  clearTypeTimer();
  intervalId = setInterval(callback, speed);
}

function typeChar() {
  const current = sentences[sentenceIndex];
  charIndex += 1;
  textEl.textContent = current.slice(0, charIndex);

  if (charIndex >= current.length) {
    clearTypeTimer();
    setTimeout(() => {
      isDeleting = true;
      startInterval(DELETE_SPEED, deleteChar);
    }, PAUSE_AFTER);
  }
}

function deleteChar() {
  const current = sentences[sentenceIndex];
  charIndex -= 1;
  textEl.textContent = current.slice(0, charIndex);

  if (charIndex <= 0) {
    clearTypeTimer();
    isDeleting = false;
    sentenceIndex = (sentenceIndex + 1) % sentences.length;
    startInterval(TYPE_SPEED, typeChar);
  }
}

startInterval(TYPE_SPEED, typeChar);

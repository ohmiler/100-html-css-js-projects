// EP71: นับตัวอักษรแบบเรียลไทม์ — maxlength 200, เตือนที่ 90%+
const MAX_LENGTH = 200;
const WARNING_THRESHOLD = Math.ceil(MAX_LENGTH * 0.9);

const textarea = document.getElementById("messageInput");
const counter = document.getElementById("charCounter");

function updateCounter() {
  const length = textarea.value.length;
  counter.textContent = `${length}/${MAX_LENGTH}`;
  counter.classList.toggle("is-warning", length >= WARNING_THRESHOLD);
}

textarea.addEventListener("input", updateCounter);
updateCounter();

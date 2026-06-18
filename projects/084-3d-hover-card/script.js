const tiltCard = document.getElementById("tiltCard");
const MAX_TILT = 15;

// คำนวณมุมเอียงจากตำแหน่งเมาส์ แล้วจำกัดไม่เกิน 15 องศา
function handleTilt(event) {
  const rect = tiltCard.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateY = clamp(((x - centerX) / centerX) * MAX_TILT, -MAX_TILT, MAX_TILT);
  const rotateX = clamp(((centerY - y) / centerY) * MAX_TILT, -MAX_TILT, MAX_TILT);

  tiltCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const percentX = (x / rect.width) * 100;
  const percentY = (y / rect.height) * 100;
  tiltCard.style.setProperty("--mouse-x", `${percentX}%`);
  tiltCard.style.setProperty("--mouse-y", `${percentY}%`);
}

function resetTilt() {
  tiltCard.style.transform = "rotateX(0deg) rotateY(0deg)";
  tiltCard.style.setProperty("--mouse-x", "50%");
  tiltCard.style.setProperty("--mouse-y", "50%");
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

tiltCard.addEventListener("mousemove", handleTilt);
tiltCard.addEventListener("mouseleave", resetTilt);

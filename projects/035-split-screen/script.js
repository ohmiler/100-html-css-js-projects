const split = document.getElementById("split");
const swapBtn = document.getElementById("swapBtn");
const signupForm = document.getElementById("signupForm");

// สลับ panel ซ้าย/ขวา
swapBtn.addEventListener("click", () => {
  split.classList.toggle("is-reversed");
});

// กัน submit จริง — demo แสดง alert เท่านั้น
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("สมัครสมาชิกสำเร็จ");
  signupForm.reset();
});

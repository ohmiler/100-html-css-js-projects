const teamCard = document.getElementById("teamCard");
const socialBtns = document.querySelectorAll(".social-btn");

// คลิกสลับ bio overlay (เหมาะกับมือถือ)
teamCard.addEventListener("click", (event) => {
  if (event.target.closest(".social-btn")) return;
  teamCard.classList.toggle("is-bio-open");
});

teamCard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    teamCard.classList.toggle("is-bio-open");
  }
});

// คลิกไอคอน social แสดง alert ชื่อ platform
socialBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    const platform = btn.dataset.platform;
    alert(`เปิด ${platform}`);
  });
});

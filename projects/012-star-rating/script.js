// เลือก element จาก DOM
const starGroup = document.getElementById("starGroup");
const scoreText = document.getElementById("scoreText");
const stars = starGroup.querySelectorAll(".star");

// คะแนนที่เลือก (0 = ยังไม่เลือก)
let selectedRating = 0;

// ไฮไลต์ดาวตั้งแต่ดวงแรกถึงคะแนนที่เลือก
function highlightStars(rating) {
  stars.forEach((star) => {
    const starRating = Number(star.dataset.rating);
    // ใส่ class star--active ถ้าดาวนี้อยู่ในช่วงคะแนนที่เลือก
    star.classList.toggle("star--active", starRating <= rating);
  });
}

// อัปเดตข้อความคะแนนใต้ดาว
function updateScoreText(rating) {
  scoreText.textContent = rating === 0 ? "" : `${rating}/5`;
}

// ฟัง event คลิกแต่ละดาว
stars.forEach((star) => {
  star.addEventListener("click", () => {
    selectedRating = Number(star.dataset.rating);
    highlightStars(selectedRating);
    updateScoreText(selectedRating);
  });
});

const followBtn = document.getElementById("followBtn");

// state เก็บว่ากำลังติดตามอยู่หรือไม่
let isFollowing = false;

followBtn.addEventListener("click", () => {
  // สลับสถานะติดตาม
  isFollowing = !isFollowing;

  // เปลี่ยนข้อความบนปุ่มตาม state
  followBtn.textContent = isFollowing ? "กำลังติดตาม" : "ติดตาม";

  // toggle class เพื่อเปลี่ยนสไตล์ปุ่ม
  followBtn.classList.toggle("profile-card__btn--following", isFollowing);
});

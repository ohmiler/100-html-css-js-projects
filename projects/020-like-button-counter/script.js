const likeBtn = document.getElementById("likeBtn");
const countEl = document.getElementById("count");

// state: สถานะ liked และจำนวน like
let isLiked = false;
let count = 0;

// อัปเดต UI ตาม state ปัจจุบัน
function renderLikeState() {
  likeBtn.classList.toggle("liked", isLiked);
  likeBtn.setAttribute("aria-pressed", String(isLiked));
  likeBtn.setAttribute(
    "aria-label",
    isLiked ? "กดเพื่อ unlike" : "กดเพื่อ like"
  );
  countEl.textContent = String(count);
}

likeBtn.addEventListener("click", () => {
  if (isLiked) {
    // unlike: ลด count แต่ไม่ให้ต่ำกว่า 0
    isLiked = false;
    count = Math.max(0, count - 1);
  } else {
    // like: เพิ่ม count
    isLiked = true;
    count += 1;
  }

  renderLikeState();
});

renderLikeState();

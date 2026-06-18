const loadBtn = document.getElementById("loadBtn");
const loadingArea = document.getElementById("loadingArea");
const contentArea = document.getElementById("contentArea");

const LOAD_DELAY_MS = 2000;

loadBtn.addEventListener("click", () => {
  // ปิดปุ่มและซ่อนเนื้อหาเดิม
  loadBtn.disabled = true;
  contentArea.hidden = true;
  loadingArea.hidden = false;

  // รอ 2 วินาทีแล้วแสดงผล
  setTimeout(() => {
    loadingArea.hidden = true;
    contentArea.hidden = false;
    loadBtn.disabled = false;
  }, LOAD_DELAY_MS);
});

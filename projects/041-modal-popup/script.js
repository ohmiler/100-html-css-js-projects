const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelModal");
const overlay = document.getElementById("modalOverlay");

// เปิด modal ด้วย class modal--open
function openModal() {
  overlay.classList.add("modal--open");
  overlay.setAttribute("aria-hidden", "false");
}

// ปิด modal ลบ class modal--open
function closeModal() {
  overlay.classList.remove("modal--open");
  overlay.setAttribute("aria-hidden", "true");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);

// กด Escape เพื่อปิด modal
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && overlay.classList.contains("modal--open")) {
    closeModal();
  }
});

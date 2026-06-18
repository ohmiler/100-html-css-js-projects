const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelModal");
const overlay = document.getElementById("modalOverlay");

function openModal() {
  overlay.classList.add("modal--open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  overlay.classList.remove("modal--open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);

// คลิก overlay โดยตรงเท่านั้น — ไม่ปิดเมื่อคลิกภายใน modal
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && overlay.classList.contains("modal--open")) {
    closeModal();
  }
});

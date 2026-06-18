// EP55: กล่องยืนยัน (Confirm Dialog)

const taskList = document.getElementById("taskList");
const dialogOverlay = document.getElementById("dialogOverlay");
const dialogMessage = document.getElementById("dialogMessage");
const dialogConfirm = document.getElementById("dialogConfirm");
const dialogCancel = document.getElementById("dialogCancel");

let activeOnOk = null;
let activeOnCancel = null;

// ฟังก์ชัน confirm ใช้ซ้ำได้ — Enter ยืนยัน, Escape ยกเลิก
function confirm(message, onOk, onCancel) {
  dialogMessage.textContent = message;
  dialogOverlay.hidden = false;
  dialogConfirm.focus();

  activeOnOk = onOk;
  activeOnCancel = onCancel;
}

function closeDialog() {
  dialogOverlay.hidden = true;
  activeOnOk = null;
  activeOnCancel = null;
}

function handleConfirm() {
  const callback = activeOnOk;
  closeDialog();
  if (typeof callback === "function") callback();
}

function handleCancel() {
  const callback = activeOnCancel;
  closeDialog();
  if (typeof callback === "function") callback();
}

dialogConfirm.addEventListener("click", handleConfirm);
dialogCancel.addEventListener("click", handleCancel);

dialogOverlay.addEventListener("click", (event) => {
  if (event.target === dialogOverlay) handleCancel();
});

document.addEventListener("keydown", (event) => {
  if (dialogOverlay.hidden) return;

  if (event.key === "Enter") {
    event.preventDefault();
    handleConfirm();
  }

  if (event.key === "Escape") {
    event.preventDefault();
    handleCancel();
  }
});

// ลบรายการเมื่อกดปุ่มลบ
taskList.addEventListener("click", (event) => {
  const deleteBtn = event.target.closest(".delete-btn");
  if (!deleteBtn) return;

  const taskItem = deleteBtn.closest(".task-item");
  const taskName = taskItem.querySelector(".task-name").textContent;

  confirm(
    `ต้องการลบ "${taskName}" ใช่หรือไม่?`,
    () => taskItem.remove(),
    () => {}
  );
});

const showBtn = document.getElementById("showToast");
const toastStack = document.getElementById("toastStack");

const MAX_TOASTS = 3;
const AUTO_DISMISS_MS = 3500;

const toastMessages = [
  { title: "บันทึกสำเร็จ", message: "ข้อมูลของคุณถูกบันทึกเรียบร้อยแล้ว" },
  { title: "อัปเดตแล้ว", message: "โปรไฟล์ได้รับการอัปเดต" },
  { title: "ส่งข้อความแล้ว", message: "ทีมงานจะติดต่อกลับภายใน 1 วันทำการ" },
  { title: "คัดลอกแล้ว", message: "คัดลอกลิงก์ไปยังคลิปบอร์ดแล้ว" },
];

let messageIndex = 0;

function removeToast(toast) {
  toast.classList.remove("is-visible");
  toast.classList.add("is-leaving");

  toast.addEventListener("transitionend", () => {
    toast.remove();
  }, { once: true });
}

function dismissOldestToast() {
  const toasts = toastStack.querySelectorAll(".toast:not(.is-leaving)");

  if (toasts.length >= MAX_TOASTS) {
    removeToast(toasts[toasts.length - 1]);
  }
}

function createToast({ title, message }) {
  dismissOldestToast();

  const toast = document.createElement("article");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="toast__icon" aria-hidden="true"></span>
    <div class="toast__content">
      <p class="toast__title">${title}</p>
      <p class="toast__message">${message}</p>
    </div>
    <button class="toast__close" type="button" aria-label="ปิด">×</button>
  `;

  const closeBtn = toast.querySelector(".toast__close");
  toastStack.prepend(toast);

  // trigger slide-in หลัง append DOM
  requestAnimationFrame(() => {
    toast.classList.add("is-visible");
  });

  const timer = setTimeout(() => {
    removeToast(toast);
  }, AUTO_DISMISS_MS);

  closeBtn.addEventListener("click", () => {
    clearTimeout(timer);
    removeToast(toast);
  });
}

showBtn.addEventListener("click", () => {
  const data = toastMessages[messageIndex % toastMessages.length];
  messageIndex += 1;
  createToast(data);
});

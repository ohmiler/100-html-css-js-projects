const copyText = document.getElementById("copyText");
const copyBtn = document.getElementById("copyBtn");
const copyStatus = document.getElementById("copyStatus");

const DEFAULT_BTN_LABEL = "คัดลอก";
const SUCCESS_LABEL = "คัดลอกแล้ว";
const FEEDBACK_MS = 2000;

let resetTimer = null;

// คัดลอกข้อความด้วย Clipboard API หรือ fallback
async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  // fallback สำหรับเบราว์เซอร์เก่าหรือ HTTP
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

// แสดงข้อความ "คัดลอกแล้ว" แล้วกลับเป็นปกติหลัง 2 วินาที
function showCopyFeedback() {
  copyBtn.textContent = SUCCESS_LABEL;
  copyStatus.textContent = SUCCESS_LABEL;

  if (resetTimer) {
    clearTimeout(resetTimer);
  }

  resetTimer = setTimeout(() => {
    copyBtn.textContent = DEFAULT_BTN_LABEL;
    copyStatus.textContent = "";
    resetTimer = null;
  }, FEEDBACK_MS);
}

copyBtn.addEventListener("click", async () => {
  const text = copyText.textContent;

  copyBtn.disabled = true;

  try {
    await copyToClipboard(text);
    showCopyFeedback();
  } catch {
    copyStatus.textContent = "คัดลอกไม่สำเร็จ ลองอีกครั้ง";
  } finally {
    copyBtn.disabled = false;
  }
});

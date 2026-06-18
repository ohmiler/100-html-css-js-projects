// EP54: ทูลทิป JS กำหนดตำแหน่ง

const tooltip = document.getElementById("tooltip");
const triggers = document.querySelectorAll("[data-tip]");
const GAP = 8;
const VIEWPORT_PADDING = 8;

// คำนวณตำแหน่งจาก getBoundingClientRect และปรับเมื่อชิดขอบขวา
function positionTooltip(target) {
  const rect = target.getBoundingClientRect();
  const tipRect = tooltip.getBoundingClientRect();

  let left = rect.left + rect.width / 2 - tipRect.width / 2;
  let top = rect.top - tipRect.height - GAP;

  // ปรับเมื่อใกล้ขอบขวาของ viewport
  const maxLeft = window.innerWidth - tipRect.width - VIEWPORT_PADDING;
  left = Math.max(VIEWPORT_PADDING, Math.min(left, maxLeft));

  // ถ้าชิดขอบบน ให้แสดงด้านล่างแทน
  if (top < VIEWPORT_PADDING) {
    top = rect.bottom + GAP;
  }

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

function showTooltip(target) {
  const message = target.getAttribute("data-tip");
  if (!message) return;

  tooltip.textContent = message;
  tooltip.hidden = false;

  // วัดขนาดหลังแสดงแล้วค่อยจัดตำแหน่ง
  positionTooltip(target);
}

function hideTooltip() {
  tooltip.hidden = true;
}

triggers.forEach((el) => {
  el.addEventListener("mouseenter", () => showTooltip(el));
  el.addEventListener("mouseleave", hideTooltip);
  el.addEventListener("focus", () => showTooltip(el));
  el.addEventListener("blur", hideTooltip);
});

window.addEventListener(
  "scroll",
  () => {
    const active = document.activeElement;
    if (active && active.hasAttribute("data-tip") && !tooltip.hidden) {
      positionTooltip(active);
    }
  },
  { passive: true }
);

window.addEventListener("resize", () => {
  const hovered = [...triggers].find((el) => el.matches(":hover"));
  if (hovered && !tooltip.hidden) {
    positionTooltip(hovered);
  }
});

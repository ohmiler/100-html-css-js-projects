const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

// สลับแท็บที่ active และแสดง panel ที่ตรงกัน
function activateTab(targetTab) {
  tabButtons.forEach((btn) => {
    const isActive = btn.dataset.tab === targetTab;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
  });

  tabPanels.forEach((panel) => {
    const isVisible = panel.dataset.panel === targetTab;

    if (isVisible) {
      // fade out ก่อนแล้วค่อย fade in panel ใหม่
      panel.classList.remove("is-visible");
      panel.removeAttribute("hidden");

      requestAnimationFrame(() => {
        panel.classList.add("is-visible");
      });
    } else {
      panel.classList.remove("is-visible");
      panel.setAttribute("hidden", "");
    }
  });
}

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activateTab(btn.dataset.tab);
  });
});

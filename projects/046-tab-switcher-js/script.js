// คีย์เก็บแท็บล่าสุดใน sessionStorage
const STORAGE_KEY = "activeTab";

const tabs = document.querySelectorAll("[data-tab]");
const panels = document.querySelectorAll("[data-panel]");

// เปิดแท็บตาม id ที่จับคู่กับ data-panel
function activateTab(tabId) {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.tab === tabId;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", isActive);
  });

  panels.forEach((panel) => {
    const isActive = panel.dataset.panel === tabId;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });

  sessionStorage.setItem(STORAGE_KEY, tabId);
}

// ผูกคลิกปุ่มแท็บ
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activateTab(tab.dataset.tab);
  });
});

// โหลดแท็บที่จำไว้ หรือใช้แท็บแรก
const savedTab = sessionStorage.getItem(STORAGE_KEY);
const defaultTab = tabs[0]?.dataset.tab;
const initialTab = savedTab && document.querySelector(`[data-tab="${savedTab}"]`)
  ? savedTab
  : defaultTab;

if (initialTab) {
  activateTab(initialTab);
}

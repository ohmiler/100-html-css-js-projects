// EP76: สวิตช์เปิดปิดสไตล์ iOS
const toggle = document.getElementById("notifyToggle");
const statusEl = document.getElementById("toggleStatus");

// อัปเดตข้อความสถานะตามค่า checkbox
function updateStatus() {
  const isOn = toggle.checked;

  statusEl.textContent = isOn ? "สถานะ: เปิด" : "สถานะ: ปิด";
  statusEl.classList.toggle("is-on", isOn);
  statusEl.classList.toggle("is-off", !isOn);
}

toggle.addEventListener("change", updateStatus);
updateStatus();

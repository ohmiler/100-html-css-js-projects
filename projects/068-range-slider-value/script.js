// EP68: สไลเดอร์ช่วงค่า — อัปเดตค่าแบบเรียลไทม์

const slider = document.getElementById("brightness");
const output = document.getElementById("sliderOutput");

// อัปเดตตัวเลขที่แสดง
function updateValue() {
  output.textContent = slider.value;
}

slider.addEventListener("input", updateValue);

updateValue();

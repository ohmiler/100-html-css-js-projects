const colorInput = document.getElementById("colorInput");
const previewBox = document.getElementById("previewBox");
const hexValue = document.getElementById("hexValue");

// อัปเดตพรีวิวและรหัส hex ตามสีที่เลือก
function updatePreview(color) {
  previewBox.style.backgroundColor = color;
  hexValue.textContent = color;
}

// ตั้งค่าเริ่มต้นตามค่า input
updatePreview(colorInput.value);

colorInput.addEventListener("input", () => {
  updatePreview(colorInput.value);
});

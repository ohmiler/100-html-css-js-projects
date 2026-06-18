// EP69: อัปโหลดไฟล์พร้อมพรีวิว — ใช้ FileReader แสดงรูป

const fileInput = document.getElementById("fileInput");
const uploadZone = document.getElementById("uploadZone");
const previewArea = document.getElementById("previewArea");
const previewImage = document.getElementById("previewImage");
const previewName = document.getElementById("previewName");
const clearBtn = document.getElementById("clearBtn");

// ตรวจว่าเป็นไฟล์รูปภาพ
function isImageFile(file) {
  return file.type.startsWith("image/");
}

// ล้างพรีวิว
function clearPreview() {
  previewImage.src = "";
  previewName.textContent = "";
  previewArea.hidden = true;
  uploadZone.hidden = false;
  fileInput.value = "";
}

// อ่านไฟล์และแสดงพรีวิว
function handleFile(file) {
  if (!isImageFile(file)) {
    alert("กรุณาเลือกไฟล์รูปภาพเท่านั้น (PNG, JPG, GIF, WebP)");
    fileInput.value = "";
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    previewImage.src = reader.result;
    previewName.textContent = file.name;
    uploadZone.hidden = true;
    previewArea.hidden = false;
  };

  reader.onerror = () => {
    alert("ไม่สามารถอ่านไฟล์ได้ กรุณาลองใหม่อีกครั้ง");
    fileInput.value = "";
  };

  reader.readAsDataURL(file);
}

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    handleFile(file);
  }
});

clearBtn.addEventListener("click", clearPreview);

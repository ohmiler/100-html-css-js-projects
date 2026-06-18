// EP67: กลุ่มปุ่มเลือกสไตล์ — แสดงราคาตามแพ็กเกจที่เลือก

const planGroup = document.getElementById("planGroup");
const priceValue = document.getElementById("priceValue");

const radios = planGroup.querySelectorAll('input[type="radio"]');

// จัดรูปแบบตัวเลขเป็นราคาไทย
function formatPrice(amount) {
  return "฿" + Number(amount).toLocaleString("th-TH");
}

// อัปเดตราคาที่แสดง
function updatePrice() {
  const selected = planGroup.querySelector('input[type="radio"]:checked');

  if (!selected) {
    priceValue.textContent = "—";
    return;
  }

  priceValue.textContent = formatPrice(selected.dataset.price);
}

radios.forEach((radio) => {
  radio.addEventListener("change", updatePrice);
});

updatePrice();

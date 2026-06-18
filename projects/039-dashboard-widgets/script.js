const refreshBtn = document.getElementById("refreshBtn");
const widgetValues = document.querySelectorAll(".widget-value");

// สุ่มตัวเลขในช่วง min–max
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// จัดรูปแบบตัวเลขเป็นเงินบาท
function formatCurrency(value) {
  return `฿${value.toLocaleString("th-TH")}`;
}

// สุ่มค่าใหม่ทุก widget
function refreshWidgets() {
  widgetValues.forEach((el) => {
    const type = el.dataset.widget;

    switch (type) {
      case "sales":
        el.textContent = formatCurrency(randomInRange(80000, 250000));
        break;
      case "users":
        el.textContent = randomInRange(2000, 8000).toLocaleString("th-TH");
        break;
      case "orders":
        el.textContent = randomInRange(200, 900).toLocaleString("th-TH");
        break;
      case "revenue":
        el.textContent = formatCurrency(randomInRange(50000, 180000));
        break;
      default:
        break;
    }
  });
}

refreshBtn.addEventListener("click", refreshWidgets);

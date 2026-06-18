// EP98: เครื่องคำนวณ BMI — แปลงซม. เป็น ม. อัตโนมัติ

const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultBox = document.getElementById("result");
const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");

// เกณฑ์ BMI ตามมาตรฐานไทย (4 หมวด)
const categories = [
  { min: 0, max: 18.5, label: "น้ำหนักน้อย", className: "result--underweight" },
  { min: 18.5, max: 23, label: "ปกติ", className: "result--normal" },
  { min: 23, max: 25, label: "เกิน", className: "result--overweight" },
  { min: 25, max: Infinity, label: "อ้วน", className: "result--obese" },
];

// หาหมวด BMI จากค่าที่คำนวณได้
function getCategory(bmi) {
  return categories.find((cat) => bmi >= cat.min && bmi < cat.max) || categories[categories.length - 1];
}

// คำนวณและแสดงผล
function calculate() {
  const weight = parseFloat(weightInput.value);
  const heightCm = parseFloat(heightInput.value);

  if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
    resultBox.classList.add("result--hidden");
    return;
  }

  // แปลงส่วนสูงจากซม. เป็นเมตร
  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const category = getCategory(bmi);

  bmiValue.textContent = bmi.toFixed(1);
  bmiCategory.textContent = category.label;

  // ลบคลาสสีเดิมแล้วใส่คลาสใหม่
  categories.forEach((cat) => resultBox.classList.remove(cat.className));
  resultBox.classList.add(category.className);
  resultBox.classList.remove("result--hidden");
}

weightInput.addEventListener("input", calculate);
heightInput.addEventListener("input", calculate);

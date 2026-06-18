// EP99: บันทึกรายจ่าย — เก็บข้อมูลใน localStorage

const STORAGE_KEY = "expense-entry-data";

const expenseForm = document.getElementById("expenseForm");
const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const expenseList = document.getElementById("expenseList");
const totalEl = document.getElementById("total");

let expenses = [];

// จัดรูปแบบเงินบาทไทย
function formatCurrency(amount) {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    minimumFractionDigits: 2,
  }).format(amount);
}

// โหลดข้อมูลจาก localStorage
function loadExpenses() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    expenses = saved ? JSON.parse(saved) : [];
  } catch {
    expenses = [];
  }
}

// บันทึกข้อมูลลง localStorage
function saveExpenses() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
}

// คำนวณยอดรวม
function getTotal() {
  return expenses.reduce((sum, item) => sum + item.amount, 0);
}

// แสดงรายการและยอดรวม
function render() {
  expenseList.innerHTML = "";

  expenses.forEach((item) => {
    const li = document.createElement("li");
    li.className = "expense-item";
    li.dataset.id = item.id;
    li.innerHTML = `
      <div class="expense-item__info">
        <p class="expense-item__name">${escapeHtml(item.name)}</p>
        <p class="expense-item__amount">${formatCurrency(item.amount)}</p>
      </div>
      <button class="btn--delete" type="button" data-id="${item.id}">ลบ</button>
    `;
    expenseList.appendChild(li);
  });

  totalEl.textContent = formatCurrency(getTotal());
}

// ป้องกัน XSS เมื่อแสดงชื่อรายการ
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// เพิ่มรายจ่ายใหม่
function addExpense(name, amount) {
  expenses.unshift({
    id: Date.now().toString(),
    name: name.trim(),
    amount: parseFloat(amount),
  });
  saveExpenses();
  render();
}

// ลบรายจ่าย
function deleteExpense(id) {
  expenses = expenses.filter((item) => item.id !== id);
  saveExpenses();
  render();
}

// จัดการฟอร์มเพิ่มรายการ
expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const amount = parseFloat(amountInput.value);

  if (!name.trim() || !amount || amount <= 0) return;

  addExpense(name, amount);
  expenseForm.reset();
  nameInput.focus();
});

// จัดการปุ่มลบ (event delegation)
expenseList.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn--delete");
  if (!btn) return;
  deleteExpense(btn.dataset.id);
});

// โหลดข้อมูลเมื่อเปิดหน้า
loadExpenses();
render();

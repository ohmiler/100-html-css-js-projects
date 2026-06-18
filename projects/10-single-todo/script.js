// เลือก element จาก DOM
const todoInput = document.getElementById("todoInput");
const todoLabel = document.getElementById("todoLabel");

// อัปเดตข้อความรายการจากค่าใน input
function updateTodoText() {
  const text = todoInput.value.trim();
  // ถ้าว่างให้ใช้ข้อความเริ่มต้น
  if (text) {
    todoLabel.textContent = text;
    todoInput.value = "";
  }
}

// ฟัง event กด Enter ในช่อง input
todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    updateTodoText();
  }
});

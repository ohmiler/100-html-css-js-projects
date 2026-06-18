// EP95: เครื่องคิดเลข — state machine สำหรับ digit, operator, equals, clear, backspace

const displayEl = document.getElementById("display");
const calcPad = document.getElementById("calcPad");

// สถานะเครื่องคิดเลข
const state = {
  display: "0",
  storedValue: null,
  operator: null,
  waitingForOperand: false,
  justEvaluated: false,
};

function updateDisplay() {
  displayEl.textContent = state.display;
}

function formatNumber(num) {
  const str = String(num);
  if (str.length > 12) {
    return Number.parseFloat(num.toPrecision(10)).toString();
  }
  return str;
}

function compute(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? "Error" : a / b;
    default:
      return b;
  }
}

function clearAll() {
  state.display = "0";
  state.storedValue = null;
  state.operator = null;
  state.waitingForOperand = false;
  state.justEvaluated = false;
  updateDisplay();
}

function backspace() {
  if (state.waitingForOperand || state.justEvaluated) return;

  if (state.display.length <= 1 || (state.display.length === 2 && state.display.startsWith("-"))) {
    state.display = "0";
  } else {
    state.display = state.display.slice(0, -1);
  }
  updateDisplay();
}

function inputDigit(digit) {
  if (state.waitingForOperand || state.justEvaluated) {
    state.display = digit;
    state.waitingForOperand = false;
    state.justEvaluated = false;
  } else if (state.display === "0") {
    state.display = digit;
  } else {
    state.display += digit;
  }
  updateDisplay();
}

function inputDecimal() {
  if (state.waitingForOperand || state.justEvaluated) {
    state.display = "0.";
    state.waitingForOperand = false;
    state.justEvaluated = false;
    updateDisplay();
    return;
  }

  if (!state.display.includes(".")) {
    state.display += ".";
    updateDisplay();
  }
}

function inputOperator(nextOp) {
  const current = Number.parseFloat(state.display);

  if (state.operator !== null && !state.waitingForOperand) {
    const result = compute(state.storedValue, current, state.operator);
    if (result === "Error") {
      state.display = "Error";
      state.storedValue = null;
      state.operator = null;
      state.waitingForOperand = true;
      updateDisplay();
      return;
    }
    state.storedValue = result;
    state.display = formatNumber(result);
  } else {
    state.storedValue = current;
  }

  state.operator = nextOp;
  state.waitingForOperand = true;
  state.justEvaluated = false;
  updateDisplay();
}

function inputEquals() {
  if (state.operator === null || state.waitingForOperand) return;

  const current = Number.parseFloat(state.display);
  const result = compute(state.storedValue, current, state.operator);

  if (result === "Error") {
    state.display = "Error";
    state.storedValue = null;
    state.operator = null;
  } else {
    state.display = formatNumber(result);
    state.storedValue = null;
    state.operator = null;
  }

  state.waitingForOperand = true;
  state.justEvaluated = true;
  updateDisplay();
}

calcPad.addEventListener("click", (event) => {
  const btn = event.target.closest(".key");
  if (!btn) return;

  const { action, value } = btn.dataset;

  if (state.display === "Error" && action !== "clear") {
    clearAll();
    if (action !== "digit" && action !== "decimal") return;
  }

  switch (action) {
    case "clear":
      clearAll();
      break;
    case "backspace":
      backspace();
      break;
    case "digit":
      inputDigit(value);
      break;
    case "decimal":
      inputDecimal();
      break;
    case "operator":
      inputOperator(value);
      break;
    case "equals":
      inputEquals();
      break;
    default:
      break;
  }
});

updateDisplay();

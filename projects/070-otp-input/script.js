// EP70: OTP 6 ช่อง — โฟกัสอัตโนมัติ, backspace, และวางรหัส

const otpGroup = document.getElementById("otpGroup");
const verifyBtn = document.getElementById("verifyBtn");
const result = document.getElementById("result");
const resultCode = document.getElementById("resultCode");

const inputs = Array.from(otpGroup.querySelectorAll(".otp-input"));

// รวมค่าจากทุกช่อง
function getOtpValue() {
  return inputs.map((input) => input.value).join("");
}

// ใส่ตัวเลขลงในช่องตามลำดับ
function fillDigits(digits, startIndex) {
  digits.forEach((digit, i) => {
    const idx = startIndex + i;
    if (idx < inputs.length) {
      inputs[idx].value = digit;
    }
  });

  const nextEmpty = inputs.findIndex((input) => input.value === "");
  const focusIndex = nextEmpty === -1 ? inputs.length - 1 : nextEmpty;
  inputs[focusIndex].focus();
}

// จัดการการพิมพ์ในช่องเดียว
function handleInput(event, index) {
  const input = event.target;
  const digit = input.value.replace(/\D/g, "").slice(-1);
  input.value = digit;

  if (digit && index < inputs.length - 1) {
    inputs[index + 1].focus();
  }
}

// จัดการ backspace และลูกศร
function handleKeydown(event, index) {
  const input = event.target;

  if (event.key === "Backspace") {
    if (input.value === "" && index > 0) {
      inputs[index - 1].focus();
      inputs[index - 1].value = "";
    }
    return;
  }

  if (event.key === "ArrowLeft" && index > 0) {
    event.preventDefault();
    inputs[index - 1].focus();
  }

  if (event.key === "ArrowRight" && index < inputs.length - 1) {
    event.preventDefault();
    inputs[index + 1].focus();
  }
}

// วางรหัส 6 หลักพร้อมกัน
function handlePaste(event) {
  event.preventDefault();

  const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, inputs.length);

  if (pasted.length === 0) {
    return;
  }

  inputs.forEach((input) => {
    input.value = "";
  });

  fillDigits(pasted.split(""), 0);
}

inputs.forEach((input, index) => {
  input.addEventListener("input", (event) => handleInput(event, index));
  input.addEventListener("keydown", (event) => handleKeydown(event, index));
  input.addEventListener("paste", handlePaste);
  input.addEventListener("focus", () => input.select());
});

verifyBtn.addEventListener("click", () => {
  const code = getOtpValue();

  if (code.length < inputs.length) {
    alert("กรุณากรอกรหัสให้ครบ 6 หลัก");
    const firstEmpty = inputs.find((input) => input.value === "");
    (firstEmpty || inputs[0]).focus();
    return;
  }

  resultCode.textContent = code;
  result.hidden = false;
});

inputs[0].focus();

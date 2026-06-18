// ข้อมูลรีวิว 3 รายการ
const reviews = [
  {
    quote: "เรียนเข้าใจง่ายมาก อธิบายทีละขั้นตอนชัดเจน เหมาะกับมือใหม่จริงๆ",
    name: "สมชาย ใจดี",
    role: "นักเรียนออนไลน์",
    avatar: "https://i.pravatar.cc/96?img=12",
  },
  {
    quote: "ได้ฝึกเขียนโค้ดจริงทุกวัน รู้สึกมั่นใจขึ้นเยอะหลังทำครบหลาย component",
    name: "มนัสนันท์ รักเรียน",
    role: "Freelancer",
    avatar: "https://i.pravatar.cc/96?img=32",
  },
  {
    quote: "ชอบที่โค้ดสั้น อ่านง่าย และมี comment ภาษาไทยช่วยทบทวนตอนทำซ้ำ",
    name: "วิชัย โค้ดเก่ง",
    role: "Junior Developer",
    avatar: "https://i.pravatar.cc/96?img=68",
  },
];

const quoteText = document.getElementById("quoteText");
const avatarImg = document.getElementById("avatarImg");
const authorName = document.getElementById("authorName");
const authorRole = document.getElementById("authorRole");
const dotGroup = document.getElementById("dotGroup");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

// สร้างปุ่มจุด indicator ตามจำนวนรีวิว
function buildDots() {
  reviews.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot-btn";
    dot.setAttribute("aria-label", `รีวิวที่ ${index + 1}`);
    dot.addEventListener("click", () => goToIndex(index));
    dotGroup.appendChild(dot);
  });
}

// อัปเดตเนื้อหาและ highlight จุดปัจจุบัน
function renderReview() {
  const review = reviews[currentIndex];

  quoteText.textContent = review.quote;
  avatarImg.src = review.avatar;
  avatarImg.alt = `รูปโปรไฟล์ ${review.name}`;
  authorName.textContent = review.name;
  authorRole.textContent = review.role;

  const dots = dotGroup.querySelectorAll(".dot-btn");
  dots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === currentIndex);
  });
}

function goToIndex(index) {
  currentIndex = index;
  renderReview();
}

function goPrev() {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  renderReview();
}

function goNext() {
  currentIndex = (currentIndex + 1) % reviews.length;
  renderReview();
}

prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);

buildDots();
renderReview();

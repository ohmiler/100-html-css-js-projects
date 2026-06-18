const scrollTopBtn = document.getElementById("scrollTopBtn");

// คลิกปุ่ม — scroll กลับด้านบนหน้า
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

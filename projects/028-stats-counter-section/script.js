const statNumbers = document.querySelectorAll(".stat-number");

// นับเลขจาก 0 ไปถึง target ด้วย requestAnimationFrame
function animateCount(element) {
  const target = Number(element.dataset.target);
  const duration = 1500;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.floor(progress * target);

    element.textContent = current.toLocaleString("th-TH");

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString("th-TH");
    }
  }

  requestAnimationFrame(update);
}

// ใช้ IntersectionObserver ให้แต่ละ stat นับเมื่อเข้าจอ
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const numberEl = entry.target;
        animateCount(numberEl);
        observer.unobserve(numberEl);
      }
    });
  },
  { threshold: 0.5 }
);

statNumbers.forEach((stat) => observer.observe(stat));

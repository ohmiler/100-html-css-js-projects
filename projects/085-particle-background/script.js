const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

const particles = [];
let animationId = null;

// ปรับขนาด canvas ให้ตรง viewport
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// สร้างอนุภาคเริ่มต้น
function createParticle(x, y) {
  return {
    x,
    y,
    radius: Math.random() * 2.5 + 1,
    vx: (Math.random() - 0.5) * 1.2,
    vy: (Math.random() - 0.5) * 1.2,
    alpha: Math.random() * 0.5 + 0.4,
  };
}

function seedParticles(count) {
  for (let i = 0; i < count; i += 1) {
    particles.push(
      createParticle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      )
    );
  }
}

// วนลูปอนิเมชันด้วย requestAnimationFrame
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const particle of particles) {
    particle.x += particle.vx;
    particle.y += particle.vy;

    // สะท้อนขอบจอ
    if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(147, 197, 253, ${particle.alpha})`;
    ctx.fill();
  }

  animationId = requestAnimationFrame(animate);
}

// คลิกเพื่อเพิ่มอนุภาคที่ตำแหน่งนั้น
canvas.addEventListener("click", (event) => {
  particles.push(createParticle(event.clientX, event.clientY));
});

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
seedParticles(80);
animate();

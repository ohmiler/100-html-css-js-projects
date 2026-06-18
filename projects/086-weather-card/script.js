// EP86: การ์ดสภาพอากาศ — สลับเมืองและเปลี่ยนพื้นหลังตามสภาพอากาศ

const cities = [
  {
    name: "กรุงเทพมหานคร",
    temp: 34,
    icon: "☀️",
    desc: "แดดจัด อุณหภูมิสูง",
    gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  },
  {
    name: "เชียงใหม่",
    temp: 22,
    icon: "🌧️",
    desc: "ฝนตกปรอย ๆ เย็นสบาย",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    name: "ภูเก็ต",
    temp: 29,
    icon: "⛅",
    desc: "เมฆบางส่วน ลมทะเลเย็น",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
];

let currentIndex = 0;

const cityName = document.getElementById("cityName");
const weatherDesc = document.getElementById("weatherDesc");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const cycleBtn = document.getElementById("cycleBtn");

// อัปเดต UI ตามข้อมูลเมืองที่เลือก
function renderWeather(index) {
  const data = cities[index];
  cityName.textContent = data.name;
  weatherDesc.textContent = data.desc;
  weatherIcon.textContent = data.icon;
  temperature.textContent = `${data.temp}°`;
  document.body.style.background = data.gradient;
}

// สลับไปเมืองถัดไป
function cycleCity() {
  currentIndex = (currentIndex + 1) % cities.length;
  renderWeather(currentIndex);
}

cycleBtn.addEventListener("click", cycleCity);
renderWeather(currentIndex);

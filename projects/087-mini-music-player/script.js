// EP87: เครื่องเล่นเพลงขนาดเล็ก — เล่น/หยุดและสลับเพลงจำลอง

const playlist = [
  { title: "รักแท้", artist: "นภ พรชำนะ", duration: 210 },
  { title: "ดาวหางฮัลเลย์", artist: "พงษ์สิต วงศ์สิทธิ์กุล", duration: 245 },
  { title: "ขอบคุณที่รักกัน", artist: "เบิร์ด ธงไชย", duration: 198 },
];

let currentSong = 0;
let isPlaying = false;
let elapsed = 0;
let intervalId = null;

const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// แปลงวินาทีเป็นรูปแบบ m:ss
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// อัปเดต UI เพลงปัจจุบัน
function loadSong(index) {
  const song = playlist[index];
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
  totalTime.textContent = formatTime(song.duration);
  elapsed = 0;
  updateProgress();
}

// อัปเดตแถบความคืบหน้า
function updateProgress() {
  const duration = playlist[currentSong].duration;
  const percent = (elapsed / duration) * 100;
  progressBar.style.width = `${percent}%`;
  currentTime.textContent = formatTime(elapsed);
}

// เริ่มจำลองการเล่นเพลง
function startPlayback() {
  if (intervalId) return;
  intervalId = setInterval(() => {
    const duration = playlist[currentSong].duration;
    if (elapsed >= duration) {
      nextSong();
      return;
    }
    elapsed += 1;
    updateProgress();
  }, 1000);
}

// หยุดจำลองการเล่น
function stopPlayback() {
  clearInterval(intervalId);
  intervalId = null;
}

// สลับสถานะเล่น/หยุด
function togglePlay() {
  isPlaying = !isPlaying;
  playBtn.textContent = isPlaying ? "⏸" : "▶";
  playBtn.setAttribute("aria-label", isPlaying ? "หยุดชั่วคราว" : "เล่น");
  if (isPlaying) {
    startPlayback();
  } else {
    stopPlayback();
  }
}

// เพลงก่อนหน้า
function prevSong() {
  currentSong = (currentSong - 1 + playlist.length) % playlist.length;
  loadSong(currentSong);
  if (isPlaying) startPlayback();
}

// เพลงถัดไป
function nextSong() {
  currentSong = (currentSong + 1) % playlist.length;
  loadSong(currentSong);
  if (isPlaying) startPlayback();
}

playBtn.addEventListener("click", togglePlay);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

loadSong(currentSong);

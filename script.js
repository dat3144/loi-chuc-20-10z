// Tạo trái tim bay ngẫu nhiên
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 400);

// Âm nhạc
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const volumeControl = document.getElementById("volumeControl");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "🔇 Phát Nhạc";
  } else {
    music.play();
    musicBtn.textContent = "🎵 Tạm Dừng";
  }
  isPlaying = !isPlaying;
});

volumeControl.addEventListener("input", () => {
  music.volume = volumeControl.value;
});

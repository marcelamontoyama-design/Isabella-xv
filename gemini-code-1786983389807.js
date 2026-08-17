const WHATSAPP_NUMBER = "573005787933";
const message = encodeURIComponent("Hola, quiero confirmar mi asistencia a los XV años de Isabella.");
const whatsappBtn = document.getElementById("whatsappBtn");
if (whatsappBtn) whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

const eventDate = new Date("2026-10-02T19:00:00-05:00").getTime();
function updateCountdown(){
  let distance = Math.max(0, eventDate - Date.now());
  const days = Math.floor(distance / 86400000); distance %= 86400000;
  const hours = Math.floor(distance / 3600000); distance %= 3600000;
  const minutes = Math.floor(distance / 60000); distance %= 60000;
  const seconds = Math.floor(distance / 1000);
  
  if (document.getElementById("days")) document.getElementById("days").textContent = String(days).padStart(2, "0");
  if (document.getElementById("hours")) document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  if (document.getElementById("minutes")) document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  if (document.getElementById("seconds")) document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown(); 
setInterval(updateCountdown, 1000);

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");

async function playMusic(){
  try {
    await music.play();
    if(musicBtn) musicBtn.textContent = "❚❚";
  } catch(e) {
    if(musicBtn) musicBtn.textContent = "♫";
  }
}

if (openBtn) {
  openBtn.addEventListener("click", async () => {
    opening.classList.add("hidden");
    await playMusic();
  });
}

if (musicBtn) {
  musicBtn.addEventListener("click", async () => {
    if (music.paused) await playMusic();
    else {
      music.pause();
      musicBtn.textContent = "♫";
    }
  });
}
const WHATSAPP_NUMBER = "573005787933";

// Texto simple para WhatsApp
const rawMessage = `¡Hola! Quiero confirmar mi asistencia a los XV años de Isabella. 🎉✨`;

const message = encodeURIComponent(rawMessage);

const whatsappBtn = document.getElementById("whatsappBtn");
if (whatsappBtn) {
  whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

// --- Contador Regresivo ---
const eventDate = new Date("2026-10-02T19:00:00-05:00").getTime();

function updateCountdown() {
  let distance = Math.max(0, eventDate - Date.now());
  const days = Math.floor(distance / 86400000);
  distance %= 86400000;
  const hours = Math.floor(distance / 3600000);
  distance %= 3600000;
  const minutes = Math.floor(distance / 60000);
  distance %= 60000;
  const seconds = Math.floor(distance / 1000);

  const dEl = document.getElementById("days");
  const hEl = document.getElementById("hours");
  const mEl = document.getElementById("minutes");
  const sEl = document.getElementById("seconds");

  if (dEl) dEl.textContent = String(days).padStart(2, "0");
  if (hEl) hEl.textContent = String(hours).padStart(2, "0");
  if (mEl) mEl.textContent = String(minutes).padStart(2, "0");
  if (sEl) sEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// --- Control de Música y Apertura ---
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");

async function playMusic() {
  if (!music) return;
  try {
    await music.play();
    if (musicBtn) musicBtn.textContent = "❚❚";
  } catch (e) {
    if (musicBtn) musicBtn.textContent = "♫";
  }
}

if (openBtn && opening) {
  openBtn.addEventListener("click", () => {
    opening.classList.add("hidden");
    playMusic();
  });
}

if (musicBtn && music) {
  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      playMusic();
    } else {
      music.pause();
      musicBtn.textContent = "♫";
    }
  });
}
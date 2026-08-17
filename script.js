const WHATSAPP_NUMBER="573005787933";
const message=encodeURIComponent("Hola, quiero confirmar mi asistencia a los XV años de Isabella.");
const whatsappBtn=document.getElementById("whatsappBtn");
if(whatsappBtn) whatsappBtn.href=`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

const eventDate=new Date("2026-10-02T19:00:00-05:00").getTime();
function updateCountdown(){
 let d=Math.max(0,eventDate-Date.now());
 const days=Math.floor(d/86400000);d%=86400000;
 const hours=Math.floor(d/3600000);d%=3600000;
 const minutes=Math.floor(d/60000);d%=60000;
 const seconds=Math.floor(d/1000);
 document.getElementById("days").textContent=String(days).padStart(2,"0");
 document.getElementById("hours").textContent=String(hours).padStart(2,"0");
 document.getElementById("minutes").textContent=String(minutes).padStart(2,"0");
 document.getElementById("seconds").textContent=String(seconds).padStart(2,"0");
}
updateCountdown();setInterval(updateCountdown,1000);

const music=document.getElementById("music"),musicBtn=document.getElementById("musicBtn");
const openBtn=document.getElementById("openBtn"),opening=document.getElementById("opening");
async function playMusic(){try{await music.play();musicBtn.textContent="❚❚"}catch(e){musicBtn.textContent="♫"}}
openBtn.addEventListener("click",async()=>{opening.classList.add("hidden");await playMusic()});
musicBtn.addEventListener("click",async()=>{if(music.paused)await playMusic();else{music.pause();musicBtn.textContent="♫"}});

# INVITACIÓN DIGITAL — MIS XV AÑOS ISABELLA

Esta versión:
- Mantiene la estructura inspirada en la página de referencia de Astravex.
- Elimina la fotografía y la galería.
- Incluye cuenta regresiva de días, horas, minutos y segundos.
- Mantiene los nombres de los papás de la tarjeta original:
  - Papá: John Jaime Durán Varela
  - Mamá: Marcela Montoya Martínez
- Lugar:
  El Cielo Eventos Campestre
  Vereda Chaparral Km 30
  Sector 4 Esquinas, Rionegro
- Fecha: Viernes 2 de octubre de 2026.
- Programa y código de vestuario según lo solicitado.
- Incluye botón de confirmación por WhatsApp.
- Incluye reproductor de música que se activa al tocar "TOCA PARA ABRIR".

## PASO 1 — WhatsApp
Abre `script.js` y busca:

const WHATSAPP_NUMBER = "57XXXXXXXXXX";

Cambia `57XXXXXXXXXX` por tu número real en formato internacional, sin +, espacios ni guiones.

Ejemplo:
const WHATSAPP_NUMBER = "573001234567";

## PASO 2 — Música
Coloca el archivo MP3 que quieras usar dentro de esta misma carpeta y nómbralo:

musica.mp3

La página está preparada para iniciar la música cuando el invitado toca "TOCA PARA ABRIR", igual que el comportamiento de la página de referencia.

No se incluye una copia de la canción de la página de referencia. Para usar exactamente esa canción debes tener el archivo de audio y los derechos/licencia correspondientes.

## PASO 3 — Probar
Haz doble clic en `index.html`. Se abrirá en Chrome.

## PASO 4 — Publicar
Una opción sencilla es subir toda la carpeta a un servicio de hosting estático. Puedes usar GitHub Pages, Netlify o cualquier hosting que permita archivos HTML/CSS/JS.

Debes subir juntos:
- index.html
- styles.css
- script.js
- musica.mp3

## PASO 5 — Compartir
Una vez publicada, obtendrás un enlace como:
https://tusitio.com/isabella/

Ese es el enlace que enviarás por WhatsApp a los invitados.

## IMPORTANTE
Para que la confirmación funcione, debes reemplazar el número de ejemplo en `script.js`.

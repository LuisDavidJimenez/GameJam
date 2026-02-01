function voltearPista(elemento) {
    // toggle añade la clase si no está, y la quita si ya está
    elemento.classList.toggle('is-flipped');

    // Opcional: Sonido de "click" o vibración en móvil
    if (window.navigator.vibrate) {
        window.navigator.vibrate(50); // Vibración sutil al descubrir pista
    }
}

function abrirSecreto() {
    const videoID = "dQw4w9WgXcQ"; // El ID del video de Rick Astley

    // Intentamos detectar si es un dispositivo móvil (iOS o Android)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        // Protocolo para abrir la App de YouTube directamente
        window.location.href = `youtube://www.youtube.com/watch?v=${videoID}`;

        // Ponemos un pequeño temporizador: si en 2 segundos no se ha abierto la app 
        // (porque no la tiene instalada), lo abre en el navegador normal.
        setTimeout(function () {
            window.location.href = `https://www.youtube.com/watch?v=${videoID}`;
        }, 2000);
    } else {
        // Si es PC, abre en una pestaña nueva normal
        window.open(`https://www.youtube.com/watch?v=${videoID}`, '_blank');
    }
}
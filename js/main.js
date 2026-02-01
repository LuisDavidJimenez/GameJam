function voltearPista(elemento) {
    // toggle añade la clase si no está, y la quita si ya está
    elemento.classList.toggle('is-flipped');

    // Opcional: Sonido de "click" o vibración en móvil
    if (window.navigator.vibrate) {
        window.navigator.vibrate(50); // Vibración sutil al descubrir pista
    }
}

function abrirSecreto() {
    if (confirm("ADVERTENCIA: Esta prueba contiene información sensible que podría cambiar el destino de Aurea. ¿Deseas continuar?")) {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
    }
}
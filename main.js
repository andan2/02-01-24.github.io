const body = document.querySelector("body");

let meteorNumber = 25;
for (let i = 1; i <= meteorNumber; i++) {
    body.innerHTML += `<div class="meteor-${i}"></div>`;
}

// Función para manejar la reproducción de un audio específico
function playAudio(audioElement, button) {
    // Obtener todos los elementos de audio
    var allAudios = document.querySelectorAll('audio');
    var allButtons = document.querySelectorAll('.audio-button');

    // Pausar cualquier otro audio que esté reproduciéndose y cambiar su ícono a 'play'
    allAudios.forEach(function(audio, index) {
        if (audio !== audioElement) {
            audio.pause();
            allButtons[index].querySelector('i').classList.remove('fa-pause');
            allButtons[index].querySelector('i').classList.add('fa-play');
        }
    });

    // Reproducir o pausar el audio actual y cambiar el ícono del botón
    if (audioElement.paused) {
        audioElement.play();
        button.querySelector('i').classList.remove('fa-play');
        button.querySelector('i').classList.add('fa-pause');
    } else {
        audioElement.pause();
        button.querySelector('i').classList.remove('fa-pause');
        button.querySelector('i').classList.add('fa-play');
    }
}

// Asignar el evento de clic a cada botón de reproducción de audio
document.querySelectorAll('.audio-button').forEach(function(button) {
    button.addEventListener('click', function() {
        // Obtener el elemento de audio asociado
        var audioId = this.getAttribute('data-audio');
        var audioElement = document.getElementById(audioId);

        // Llamar a la función de reproducción
        playAudio(audioElement, this);
    });
});

// Función para pausar todos los audios
function pauseAllAudios() {
    var allAudios = document.querySelectorAll('audio');
    allAudios.forEach(function(audio) {
        audio.pause();
    });
}

// Manejar la caja de luz existente
document.querySelector('.heart').addEventListener('click', function() {
    document.getElementById('miLightbox').style.display = 'block';
    pauseAllAudios(); // Pausar todos los audios al abrir la caja de luz
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('miLightbox').style.display = 'none';
});

// Cerrar la lightbox al hacer clic fuera de ella
window.onclick = function(event) {
    if (event.target == document.getElementById('miLightbox')) {
        document.getElementById('miLightbox').style.display = 'none';
    }
};

// Añadir evento para el emoji que abre la caja de luz del video
document.getElementById('emojiBoton').addEventListener('click', function() {
    document.getElementById('cajaLuz').style.display = 'block';
    pauseAllAudios(); // Pausar todos los audios al abrir la caja de luz del video
});

// Función para cerrar la caja de luz del video
function cerrarCajaLuz() {
    var video = document.querySelector('#cajaLuz video');

    // Pausar el video
    if (video) {
        video.pause();
        video.currentTime = 0;
    }

    document.getElementById('cajaLuz').style.display = 'none';
}

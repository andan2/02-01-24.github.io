const body = document.querySelector("body");

let meteorNumber = 25;
for (let i = 1; i <= meteorNumber; i++) {
    body.innerHTML += `<div class="meteor-${i}"></div>`;
}

// Función para manejar la reproducción de un audio específico
function playAudio(audioElement, button) {
    var allAudios = document.querySelectorAll('audio');
    var allButtons = document.querySelectorAll('.audio-button');

    allAudios.forEach(function(audio, index) {
        if (audio !== audioElement) {
            audio.pause();
            allButtons[index].querySelector('i').classList.remove('fa-pause');
            allButtons[index].querySelector('i').classList.add('fa-play');
        }
    });

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

document.querySelectorAll('.audio-button').forEach(function(button) {
    button.addEventListener('click', function() {
        var audioId = this.getAttribute('data-audio');
        var audioElement = document.getElementById(audioId);
        playAudio(audioElement, this);
    });
});

function pauseAllAudiosAndUpdateButtons() {
    var allAudios = document.querySelectorAll('audio');
    var allButtons = document.querySelectorAll('.audio-button');

    allAudios.forEach(function(audio, index) {
        audio.pause();
        allButtons[index].querySelector('i').classList.remove('fa-pause');
        allButtons[index].querySelector('i').classList.add('fa-play');
    });
}

document.querySelector('.heart').addEventListener('click', function() {
    document.getElementById('miLightbox').style.display = 'block';
    pauseAllAudiosAndUpdateButtons();
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('miLightbox').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('miLightbox')) {
        document.getElementById('miLightbox').style.display = 'none';
    }
};

document.getElementById('emojiBoton').addEventListener('click', function() {
    document.getElementById('cajaLuz').style.display = 'block';
    pauseAllAudiosAndUpdateButtons();
});

function cerrarCajaLuz() {
    var video = document.querySelector('#cajaLuz video');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
    document.getElementById('cajaLuz').style.display = 'none';
}

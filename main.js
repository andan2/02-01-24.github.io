const body = document.querySelector("body");

let meteorNumber = 25;
for (let i = 1; i <= meteorNumber; i++) {
    body.innerHTML += `<div class="meteor-${i}"></div>`;
}

// js carta //

document.querySelector('.heart').addEventListener('click', function() {
    document.getElementById('miLightbox').style.display = 'block';
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


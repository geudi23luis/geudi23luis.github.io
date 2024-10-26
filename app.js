// Lista de películas con nombres de archivos (sin extensiones)
const peliculas = [
    { titulo: "Chica Rica", archivo: "video1" },
    { titulo: "Pesadilla marina", archivo: "video2" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video3" },
    { titulo: "jhon wick 1", archivo: "video4" },
    { titulo: "jhon wick 2", archivo: "video5" },
    { titulo: "jhon wick 3", archivo: "video6" },
    { titulo: "Serpiente gigante", archivo: "video7" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video6" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video7" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video8" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video9" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video10" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video11" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video12" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video13" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video14" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video15" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video3" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video3" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video3" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video3" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video3" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video3" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video3" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video3" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video3" },
    { titulo: "El ataque del tiburon de 5 cabeza", archivo: "video3" },
    // Añade aquí más películas según sea necesario
];

// Función para mostrar las películas locales en la página
function mostrarPeliculasLocales(filtro = "") {
    const container = document.getElementById('peliculas-container');
    container.innerHTML = "";  // Limpiar contenido previo

    peliculas
        .filter(pelicula => pelicula.titulo.toLowerCase().includes(filtro.toLowerCase()))
        .forEach(pelicula => {
            const peliculaDiv = document.createElement('div');
            peliculaDiv.classList.add('pelicula');
            
            peliculaDiv.innerHTML = `
                <img src="peliculas/${pelicula.archivo}.jpg" alt="${pelicula.titulo}" onclick="abrirModal('${pelicula.titulo}', 'peliculas/${pelicula.archivo}.mp4')">
                <h3>${pelicula.titulo}</h3>
            `;
            
            container.appendChild(peliculaDiv);
        });
}

// Función para abrir el modal y reproducir el video
function abrirModal(titulo, videoSrc) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalVideo = document.getElementById('modal-video');

    modalTitle.textContent = titulo;
    modalVideo.src = videoSrc;
    modal.style.display = "flex";
}

// Cerrar el modal al hacer clic en el botón de cerrar
document.getElementById('close-button').onclick = function() {
    const modal = document.getElementById('modal');
    const modalVideo = document.getElementById('modal-video');

    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.src = "";  // Detener el video y limpiar la fuente
}

// Función para manejar la búsqueda en tiempo real
document.getElementById('search-input').addEventListener('input', (event) => {
    const filtro = event.target.value;
    mostrarPeliculasLocales(filtro);
});

// Llama a la función al cargar la página para mostrar todas las películas
document.addEventListener('DOMContentLoaded', () => mostrarPeliculasLocales());

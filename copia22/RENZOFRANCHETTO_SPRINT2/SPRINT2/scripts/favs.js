document.addEventListener("DOMContentLoaded", function () {
    const contenidoFavoritos = document.getElementById('favorites-content');

    const apiUrl = 'https://moviestack.onrender.com/api/movies';
    const apiKey = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd';

    function quitarPeliculaDeFavoritos(movieId) {
        let peliculasFavoritas = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
        peliculasFavoritas = peliculasFavoritas.filter(id => id !== movieId);
        localStorage.setItem('favoriteMovies', JSON.stringify(peliculasFavoritas));
    }

    function actualizarContenidoFavoritos() {
        contenidoFavoritos.innerHTML = ''; 

        const opcionesSolicitud = {
            method: 'GET',
            headers: {
                'x-api-key': apiKey,
            },
        };

        fetch(apiUrl, opcionesSolicitud)
            .then(response => response.json())
            .then(data => {
                const peliculas = data.movies;
                const peliculasFavoritas = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
                const peliculasFavoritasData = peliculas.filter(pelicula => peliculasFavoritas.includes(pelicula.id));

                if (peliculasFavoritasData.length === 0) {
                    const mensaje = document.createElement("p");
                    mensaje.textContent = "No se encontraron películas favoritas.";
                    mensaje.classList.add("text-red-500");
                    contenidoFavoritos.appendChild(mensaje);
                } else {
                    peliculasFavoritasData.forEach(pelicula => {
                        const tarjetaHTML = `
                            <div class="border-2 md:w-1/5 h-96 p-2 flex flex-col m-5">
                                <img class="w-72 mx-auto py-4" src="https://moviestack.onrender.com/static/${pelicula.image}" alt="">
                                <h3 class="text-white py-2 px-2">${pelicula.title}</h3>
                                <p class="text-white py-2 px-2 line-clamp-5">${pelicula.overview}</p>
                                <div class="flex justify-between">
                                    <button class="favorite-button text-white border-solid border-2 w-1/3" data-movie-id="${pelicula.id}">REMOVE</button>
                                    <a class="text-white border-solid border-2 w-1/3 self-center" href="./detalle.html?id=${pelicula.id}">GO TO DETAILS</a>
                                </div>
                            </div>`;
                        contenidoFavoritos.innerHTML += tarjetaHTML;
                    });

                    const botonesFavoritos = document.querySelectorAll('.favorite-button');
                    botonesFavoritos.forEach(boton => {
                        boton.addEventListener('click', function () {
                            const movieId = this.getAttribute('data-movie-id');

                            quitarPeliculaDeFavoritos(movieId);
                            actualizarContenidoFavoritos();
                        });
                    });
                }
            })
            .catch(error => console.error('Error al obtener datos de la API:', error));
    }

    actualizarContenidoFavoritos();
});

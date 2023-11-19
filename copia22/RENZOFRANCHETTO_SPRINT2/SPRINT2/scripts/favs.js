document.addEventListener("DOMContentLoaded", function () {
    const favoritesContent = document.getElementById('favorites-content');

    const apiUrl = 'https://moviestack.onrender.com/api/movies';
    const apiKey = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd';

    function removeMovieFromFavorites(movieId) {
        let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
        favoriteMovies = favoriteMovies.filter(id => id !== movieId);
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    }

    function updateFavoritesContent() {
        favoritesContent.innerHTML = ''; 

        const requestOptions = {
            method: 'GET',
            headers: {
                'x-api-key': apiKey,
            },
        };

        fetch(apiUrl, requestOptions)
            .then(response => response.json())
            .then(data => {
                const movies = data.movies;
                const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
                const favoriteMoviesData = movies.filter(movie => favoriteMovies.includes(movie.id));

                if (favoriteMoviesData.length === 0) {
                    const mensaje = document.createElement("p");
                    mensaje.textContent = "No se encontraron películas favoritas.";
                    mensaje.classList.add("text-red-500");
                    favoritesContent.appendChild(mensaje);
                } else {
                    favoriteMoviesData.forEach(movie => {
                        const tarjetaHTML = `
                            <div class="border-2 w-1/5 h-96 p-2 flex flex-col m-5">
                                <img class="w-72 mx-auto py-4" src="https://moviestack.onrender.com/static/${movie.image}" alt="">
                                <h3 class="text-white py-2 px-2">${movie.title}</h3>
                                <p class="text-white py-2 px-2 line-clamp-5">${movie.overview}</p>
                                <div class="flex justify-between">
                                    <button class="favorite-button text-white border-solid border-2 w-1/3" data-movie-id="${movie.id}">Quitar de Favoritos</button>
                                    <a class="text-white border-solid border-2 w-1/3 self-center" href="./detalle.html?id=${movie.id}">Ir al detalle</a>
                                </div>
                            </div>`;
                        favoritesContent.innerHTML += tarjetaHTML;
                    });

                    const favoriteButtons = document.querySelectorAll('.favorite-button');
                    favoriteButtons.forEach(button => {
                        button.addEventListener('click', function () {
                            const movieId = this.getAttribute('data-movie-id');

                            removeMovieFromFavorites(movieId);
                            updateFavoritesContent();
                        });
                    });
                }
            })
            .catch(error => console.error('Error al obtener datos de la API:', error));
    }

    updateFavoritesContent();
});

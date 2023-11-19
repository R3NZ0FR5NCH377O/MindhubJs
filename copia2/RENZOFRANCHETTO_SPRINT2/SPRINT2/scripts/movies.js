document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = 'https://moviestack.onrender.com/api/movies';
  const apiKey = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd';
  let moviesData;
  let movies = [];
  let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
  const tarjetasPorPagina = 4;
  let paginaActual = 1;
  let filtroCategoria = "todos";
  let filtroNombre = "";

  function crearTarjeta(foto, nombre, descripcion, id, isFavorite) {
    const tarjetaHTML = `
        <div class="border-2 w-1/5 h-96 p-2 flex flex-col">
            <img class="w-72 mx-auto py-4" src="https://moviestack.onrender.com/static/${foto}" alt="">
            <h3 class="text-white py-2 px-2">${nombre}</h3>
            <p class="text-white py-2 px-2 line-clamp-5">${descripcion}</p>
            <div class="flex justify-between">
              <button class="favorite-button border p-1 text-fuchsia-600" data-movie-id="${id}">${isFavorite ? 'Quitar de Favoritos' : 'Añadir a Favoritos'}</button>
              <a class="text-white border-solid border-2 w-1/3" href="./detalle.html?id=${id}">Ir al detalle</a>
            </div>
        </div>`;
    return tarjetaHTML;
  }

  function mostrarTarjetasEnPagina(pagina, peliculasParaMostrar) {
    const inicio = (pagina - 1) * tarjetasPorPagina;
    const fin = inicio + tarjetasPorPagina;
    const peliculasAMostrar = peliculasParaMostrar.slice(inicio, fin);

    const contenedor = document.getElementById("main-content");
    contenedor.innerHTML = "";

    if (peliculasAMostrar.length === 0) {
      const mensaje = document.createElement("p");
      mensaje.textContent = "No se encontraron películas.";
      mensaje.classList.add("text-red-500");
      contenedor.appendChild(mensaje);
    } else {
      peliculasAMostrar.forEach((pelicula, index) => {
        const tarjeta = crearTarjeta(pelicula.image, pelicula.title, pelicula.overview, pelicula.id, pelicula.isFavorite);
        contenedor.innerHTML += tarjeta;
      });
    }

    const totalPeliculas = peliculasParaMostrar.length;
    const totalPaginas = Math.ceil(totalPeliculas / tarjetasPorPagina);
    const indicadorPagina = document.getElementById("pageIndicator");
    indicadorPagina.textContent = `Página ${pagina} de ${totalPaginas}`;

    const botonAnterior = document.getElementById("prevPage");
    const botonSiguiente = document.getElementById("nextPage");

    botonAnterior.disabled = pagina <= 1;
    botonSiguiente.disabled = pagina >= totalPaginas;

    const favoriteButtons = document.querySelectorAll('.favorite-button');
    favoriteButtons.forEach(button => {
      button.addEventListener('click', function () {
        const movieId = this.getAttribute('data-movie-id');
        toggleFavorite(movieId);
      });
    });
  }

  function toggleFavorite(movieId) {
    const index = movies.findIndex(movie => movie.id === movieId);
    if (index !== -1) {
      movies[index].isFavorite = !movies[index].isFavorite;

      if (movies[index].isFavorite) {
        addToFavorites(movieId);
      } else {
        removeFromFavorites(movieId);
      }

      updateFavoritesButton();
    }
  }

  function addToFavorites(movieId) {
    if (!favoriteMovies.includes(movieId)) {
      favoriteMovies.push(movieId);
      localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    }
  }

  function removeFromFavorites(movieId) {
    favoriteMovies = favoriteMovies.filter(id => id !== movieId);
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  }

  function updateFavoritesButton() {
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    favoriteButtons.forEach(button => {
      const buttonMovieId = button.getAttribute('data-movie-id');
      const isFavorite = favoriteMovies.includes(buttonMovieId);

      button.textContent = isFavorite ? 'Quitar de Favoritos' : 'Añadir a Favoritos';
    });
  }

  function aplicarFiltros() {
    const terminoBusqueda = filtroNombre.trim().toLowerCase();

    let peliculasFiltradas = movies;

    if (filtroCategoria !== "todos") {
      peliculasFiltradas = filtrarPeliculasPorCategoria(filtroCategoria, movies);
    }

    if (terminoBusqueda !== "") {
      peliculasFiltradas = filtrarPeliculasPorTerminoBusqueda(terminoBusqueda, peliculasFiltradas);
    }

    mostrarTarjetasEnPagina(paginaActual, peliculasFiltradas);
  }

  function filtrarPeliculasPorCategoria(categoria, peliculasParaFiltrar) {
    return peliculasParaFiltrar.filter((pelicula) => pelicula.genres.includes(categoria));
  }

  function filtrarPeliculasPorTerminoBusqueda(terminoBusqueda, peliculasParaFiltrar) {
    return peliculasParaFiltrar.filter((pelicula) =>
      pelicula.title.toLowerCase().includes(terminoBusqueda)
    );
  }

  const selectCategoria = document.getElementById("categoria");
  const inputBusqueda = document.querySelector('input[type="search"]');
  const botonAnterior = document.getElementById("prevPage");
  const botonSiguiente = document.getElementById("nextPage");

  selectCategoria.addEventListener("change", () => {
    filtroCategoria = selectCategoria.value;
    aplicarFiltros();
  });

  selectCategoria.value = "todos";

  inputBusqueda.addEventListener("input", () => {
    filtroNombre = inputBusqueda.value;
    aplicarFiltros();
  });

  botonAnterior.addEventListener("click", () => {
    if (paginaActual > 1) {
      paginaActual--;
      aplicarFiltros();
    }
  });

  botonSiguiente.addEventListener("click", () => {
    const categoriaSeleccionada = filtroCategoria;
    const terminoBusqueda = filtroNombre;

    let peliculasFiltradas = movies;

    if (categoriaSeleccionada !== "todos") {
      peliculasFiltradas = filtrarPeliculasPorCategoria(categoriaSeleccionada, movies);
    }

    if (terminoBusqueda !== "") {
      peliculasFiltradas = filtrarPeliculasPorTerminoBusqueda(terminoBusqueda, peliculasFiltradas);
    }

    const totalPaginas = Math.ceil(peliculasFiltradas.length / tarjetasPorPagina);
    if (paginaActual < totalPaginas) {
      paginaActual++;
      aplicarFiltros();
    }
  });

  const requestOptions = {
    method: 'GET',
    headers: {
      'x-api-key': apiKey,
    },
  };

  fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .then(data => {
      moviesData = data;
      movies = moviesData.movies.map(movie => ({
        ...movie,
        isFavorite: favoriteMovies.includes(movie.id),
      }));

      const categoriasUnicas = obtenerCategoriasUnicas(movies);
      selectCategoria.innerHTML = "";
      categoriasUnicas.forEach((categoria) => {
        const option = document.createElement("option");
        option.value = categoria;
        option.textContent = categoria;
        selectCategoria.appendChild(option);
      });

      mostrarTarjetasEnPagina(paginaActual, movies);
      updateFavoritesButton();
    })
    .catch(error => console.error('Error al obtener datos de la API:', error));
});

function obtenerCategoriasUnicas(peliculas) {
  const categorias = new Set();
  peliculas.forEach((pelicula) => {
    pelicula.genres.forEach((categoria) => {
      categorias.add(categoria);
    });
  });
  return [...categorias, "todos"];
}
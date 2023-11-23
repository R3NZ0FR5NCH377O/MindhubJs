document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = 'https://moviestack.onrender.com/api/movies';
  const apiKey = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd';
  let moviesData;
  let movies;
  let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
  console.log(favoriteMovies )
  const tarjetasPorPagina = 4;
  let paginaActual = 1;
  let filtroCategoria = "todos";
  let filtroNombre = "";

  function crearTarjeta(foto, nombre, descripcion, id, isFavorite) {
    const corazonColor = isFavorite ? 'text-red-500' : 'text-gray-500';
    const corazonTamaño = isFavorite ? 'h-8 w-8' : 'h-10 w-10';

    const tarjetaHTML = `
        <div class="border-2 w-1/5 h-96 p-2 flex flex-col relative">
            <div class="relative">
                <img class="w-72 mx-auto py-4" src="https://moviestack.onrender.com/static/${foto}" alt="">
                <div class="favorite-button p-2 absolute top-2 right-2 z-10 cursor-pointer" data-movie-id="${id}" data-is-favorite="${isFavorite}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" class="${corazonColor} ${corazonTamaño} rounded-full">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C16.09 3.81 17.76 3 19.5 3 22.58 3 26 6.42 26 9.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </div>
            </div>
            <h3 class="text-white py-2 px-2">${nombre}</h3>
            <p class="text-white py-2 px-2 line-clamp-5">${descripcion}</p>
            <div class="flex justify-between">
                <a class="text-white border-solid border-2 w-1/3" href="./detalle.html?id=${id}">Ir al Detalle</a>
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
        const isFavorite = favoriteMovies.includes(pelicula.id);
        console.log(isFavorite)
        const tarjeta = crearTarjeta(pelicula.image, pelicula.title, pelicula.overview, pelicula.id, isFavorite);
        contenedor.innerHTML += tarjeta;
      });
    }
    const totalPeliculas = peliculasParaMostrar.length;
    const totalPaginas = Math.ceil(totalPeliculas / tarjetasPorPagina);
    const indicadorPagina = document.getElementById("pageIndicator");
    indicadorPagina.textContent = `Página ${pagina} de ${totalPaginas}`

    const botonAnterior = document.getElementById("prevPage");
    const botonSiguiente = document.getElementById("nextPage");

    botonAnterior.disabled = pagina <= 1;
    botonSiguiente.disabled = pagina >= totalPaginas;

    // Pilotear clicks en corazones 
    const favoriteButtons = document.querySelectorAll('.favorite-button')
    favoriteButtons.forEach(button => {
      button.addEventListener('click', function (event) {
        
        const movieId = this.getAttribute('data-movie-id')
        const isFavorite = this.getAttribute('data-is-favorite') === 'true'

        if (isFavorite) {
          favoriteMovies = favoriteMovies.filter(id => id !== movieId);
        } else {
          favoriteMovies.push(movieId);
        }

        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies))
        actualizarBotonesFavoritos(movieId);
      });
    });
  }

  function aplicarFiltros() {
    const terminoBusqueda = filtroNombre.trim().toLowerCase()

    let peliculasFiltradas = movies;

    if (filtroCategoria !== "todos") {
      peliculasFiltradas = filtrarPeliculasPorCategoria(filtroCategoria, movies)
    }

    if (terminoBusqueda !== "") {
      peliculasFiltradas = filtrarPeliculasPorTerminoBusqueda(terminoBusqueda, peliculasFiltradas)
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

  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------selectCategoria.value = "todos";

  inputBusqueda.addEventListener("input", () => {
    filtroNombre = inputBusqueda.value;
    aplicarFiltros();
  });

  botonAnterior.addEventListener("click", () => {
    const categoriaSeleccionada = selectCategoria.value;
    const terminoBusqueda = filtroNombre;

    let peliculasFiltradas = movies;

    if (categoriaSeleccionada !== "todos") {
      peliculasFiltradas = filtrarPeliculasPorCategoria(categoriaSeleccionada, movies);
    }

    if (terminoBusqueda !== "") {
      peliculasFiltradas = filtrarPeliculasPorTerminoBusqueda(terminoBusqueda, peliculasFiltradas);
    }

    if (paginaActual > 1) {
      paginaActual--;
    }

    aplicarFiltros();
  });

  botonSiguiente.addEventListener("click", () => {
    const categoriaSeleccionada = selectCategoria.value;
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
    }

    aplicarFiltros();
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
      movies = moviesData.movies;

      mostrarTarjetasEnPagina(paginaActual, movies);

      const categoriasUnicas = obtenerCategoriasUnicas();
      selectCategoria.innerHTML = "";
      categoriasUnicas.forEach((categoria) => {
        const option = document.createElement("option");
        option.value = categoria;
        option.textContent = categoria;
        selectCategoria.appendChild(option);
      });

      const favoriteButtons = document.querySelectorAll('.favorite-button');
      favoriteButtons.forEach(button => {
        const movieId = button.getAttribute('data-movie-id');
        actualizarBotonesFavoritos(movieId);
      });
    })
    .catch(error => console.error('Error al obtener datos de la API:', error));

  function obtenerCategoriasUnicas() {
    const categorias = new Set();
    movies.forEach((pelicula) => {
      pelicula.genres.forEach((categoria) => {
        categorias.add(categoria);
      });
    });
    return ["todos", ...categorias];
  }

  function actualizarBotonesFavoritos(movieId) {
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    favoriteButtons.forEach(button => {
      const buttonMovieId = button.getAttribute('data-movie-id');
      const isFavorite = favoriteMovies.includes(buttonMovieId);
      if (isFavorite) {
        button.setAttribute('data-is-favorite', 'true');
        button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" class="text-red-500 h-8 w-8 rounded-full">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C16.09 3.81 17.76 3 19.5 3 22.58 3 26 6.42 26 9.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>`;
      } else {
        button.setAttribute('data-is-favorite', 'false');
        button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" class="text-gray-500 h-10 w-10 rounded-full">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C16.09 3.81 17.76 3 19.5 3 22.58 3 26 6.42 26 9.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>`;
      }
    });
  }
});
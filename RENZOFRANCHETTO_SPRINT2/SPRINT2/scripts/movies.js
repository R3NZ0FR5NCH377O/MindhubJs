function crearTarjeta(foto, nombre, descripcion, id) {
  const tarjetaHTML = `
    <div class="border-2 w-1/5 h-96 p-2 flex flex-col">
      <img class="w-72 mx-auto py-4" src="${foto}" alt="">
      <h3 class="text-white py-2 px-2">${nombre}</h3>
      <p class="text-white py-2 px-2 line-clamp-5">${descripcion}</p>
      <a class="text-white border-solid border-2 w-1/3" href="./detalle.html?id=${id}">Ir al detalle</a>
    </div>`;
  return tarjetaHTML;
}

const tarjetasPorPagina = 4;
let paginaActual = 1;
let filtroCategoria = "todos";
let filtroNombre = "";

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
      const tarjeta = crearTarjeta(pelicula.image, pelicula.title, pelicula.overview, pelicula.id);
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
}

function aplicarFiltros() {
  const terminoBusqueda = document.querySelector('input[type="search"]').value.trim().toLowerCase();

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

document.addEventListener("DOMContentLoaded", function () {
  const selectCategoria = document.getElementById("categoria");
  const categoriasUnicas = obtenerCategoriasUnicas();

  selectCategoria.innerHTML = ""; 
  categoriasUnicas.forEach((categoria) => {
    const option = document.createElement("option");
    option.value = categoria;
    option.textContent = categoria;
    selectCategoria.appendChild(option);
  });

  selectCategoria.value = "todos";

  const inputBusqueda = document.querySelector('input[type="search"]');

  selectCategoria.addEventListener("change", () => {
    filtroCategoria = selectCategoria.value;
    aplicarFiltros();
  });

  inputBusqueda.addEventListener("input", () => {
    filtroNombre = inputBusqueda.value.trim().toLowerCase();
    aplicarFiltros();
  });

  aplicarFiltros();
});

const botonAnterior = document.getElementById("prevPage");
const botonSiguiente = document.getElementById("nextPage");

botonAnterior.addEventListener("click", () => {
  if (paginaActual > 1) {
    paginaActual--;
    aplicarFiltros();
  }
});

botonSiguiente.addEventListener("click", () => {
  const categoriaSeleccionada = document.getElementById("categoria").value;
  const terminoBusqueda = document.querySelector('input[type="search"]').value.trim().toLowerCase();

  let peliculasFiltradas = movies;

  if (categoriaSeleccionada !== "todos") {
    peliculasFiltradas = filtrarPeliculasPorCategoria(categoriaSeleccionada, movies);
  }

  if (terminoBusqueda !== "") {
    peliculasFiltradas = filtrarPeliculasPorTerminoBusqueda(terminoBusqueda, peliculasFiltradas);
  }

  const totalPaginas = Math.ceil(peliculasFiltradas.length / tarjetasPorPagina);
  paginaActual = Math.min(paginaActual + 1, totalPaginas);
  aplicarFiltros();
});

function obtenerCategoriasUnicas() {
  const categorias = new Set();
  movies.forEach((pelicula) => {
    pelicula.genres.forEach((categoria) => {
      categorias.add(categoria);
    });
  });
  return [...categorias, "todos"];
}

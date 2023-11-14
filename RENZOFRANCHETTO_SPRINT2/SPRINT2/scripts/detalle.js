import { crearTablaDetalles1, crearTablaDetalles2 } from "./funciones.js";



document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const idPelicula = urlParams.get("id");

  const peliculaSeleccionada = movies.find(pelicula => pelicula.id === idPelicula);

  if (peliculaSeleccionada) {
      const imagen = document.getElementById("movieImage");
      imagen.src = peliculaSeleccionada.image;

      const detallesTabla1 = crearTablaDetalles1(peliculaSeleccionada);
      const contenedorDetalles1 = document.getElementById("movieDetailsTable1");
      contenedorDetalles1.appendChild(detallesTabla1);

      const detallesTabla2 = crearTablaDetalles2(peliculaSeleccionada);
      const contenedorDetalles2 = document.getElementById("movieDetailsTable2");
      contenedorDetalles2.appendChild(detallesTabla2);

      const titulo = document.getElementById("movieTitle");
      const tagline = document.getElementById("movieTagline");
      const generos = document.getElementById("movieGenres");

      titulo.textContent = peliculaSeleccionada.title;
      tagline.textContent = peliculaSeleccionada.tagline;
      generos.textContent = `Género: ${peliculaSeleccionada.genres.join(", ")}`;

      const descripcion = document.createElement("p");
      descripcion.textContent = peliculaSeleccionada.overview;
      const contenedorDescripcion = document.getElementById("movieDescription");
      contenedorDescripcion.innerHTML = "";
      contenedorDescripcion.appendChild(descripcion);
      contenedorDescripcion.classList.add("text-2xl");
  } else {
      console.error("No se encontró la película con el ID proporcionado.");
  }
});



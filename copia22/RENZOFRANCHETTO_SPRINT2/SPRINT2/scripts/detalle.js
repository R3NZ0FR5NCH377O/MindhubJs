document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const idPelicula = urlParams.get("id");

  const apiUrl = 'https://moviestack.onrender.com/api/movies';
  const apiKey = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd';

  fetch(`${apiUrl}/${idPelicula}`, {
    method: 'GET',
    headers: {
      'x-api-key': apiKey,
    },
  })
    .then(response => response.json())
    .then(pelicula => {
      llenarInformacionPelicula(pelicula);
    })
    .catch(error => console.error('Error al obtener datos de la API:', error));

  function llenarInformacionPelicula(pelicula) {
    const imagen = document.getElementById("movieImage");
    imagen.src = `https://moviestack.onrender.com/static/${pelicula.image}.jpg`;

    const detallesTabla1 = crearTablaDetalles1(pelicula);
    const contenedorDetallesTable1 = document.getElementById("movieDetailsTable1");
    contenedorDetallesTable1.appendChild(detallesTabla1);

    const titulo = document.getElementById("movieTitle");
    const tagline = document.getElementById("movieTagline");
    const generos = document.getElementById("movieGenres");

    titulo.textContent = pelicula.title;
    tagline.textContent = pelicula.tagline;
    generos.textContent = `Género: ${pelicula.genres.join(", ")}`;

    const descripcion = document.getElementById("movieDescription");
    descripcion.textContent = pelicula.overview;

    const detallesTabla2 = crearTablaDetalles2(pelicula);
    const contenedorDetallesTable2 = document.getElementById("movieDetailsTable2");
    contenedorDetallesTable2.appendChild(detallesTabla2);
  }

  function crearTablaDetalles1(pelicula) {
    const tabla = document.createElement("table");
    tabla.classList.add("text-white", "border", "border-white", "divide-y", "divide-white");

    agregarFila(tabla, "release date", formatDate(pelicula.release_date));
    agregarFila(tabla, "Duratión", `${pelicula.runtime} minutos`);
    agregarFila(tabla, "Status", pelicula.status);
    agregarFila(tabla, "Language", pelicula.original_language);

    return tabla;
  }

  function crearTablaDetalles2(pelicula) {
    const tabla = document.createElement("table");
    tabla.classList.add("text-white", "border", "border-white", "divide-y", "divide-white");

    agregarFila(tabla, "Qualificatión", pelicula.vote_average);
    agregarFila(tabla, "Budget", `$${pelicula.budget.toLocaleString()}`);
    agregarFila(tabla, "Revenue", `$${pelicula.revenue.toLocaleString()}`);

    return tabla;
  }

  function agregarFila(tabla, etiqueta, valor) {
    const fila = document.createElement("tr");
    const etiquetaCelda = document.createElement("td");
    const valorCelda = document.createElement("td");

    etiquetaCelda.textContent = etiqueta;
    valorCelda.textContent = valor;

    fila.appendChild(etiquetaCelda);
    fila.appendChild(valorCelda);
    tabla.appendChild(fila);
  }

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
});

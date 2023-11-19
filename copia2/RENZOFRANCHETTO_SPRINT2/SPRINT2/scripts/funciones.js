export function crearTablaDetalles1(pelicula) {
    const tabla = document.createElement("table");
    tabla.classList.add("border", "border-collapse", "w-3/4");
  
    const filasDetalles = [
        ["Language", pelicula.original_language],
        ["release date", pelicula.release_date],
        ["duration", `${pelicula.runtime} minutos`],
        ["status", pelicula.status],
    ];
  
    filasDetalles.forEach(([titulo, valor]) => {
        const fila = tabla.insertRow();
        const celdaTitulo = fila.insertCell(0);
        const celdaValor = fila.insertCell(1);
  
        celdaTitulo.textContent = titulo;
        celdaTitulo.classList.add("border", "p-2", "px-10");
  
        celdaValor.textContent = valor;
        celdaValor.classList.add("border", "p-2");
    });
  
    return tabla;
  }
  
export function crearTablaDetalles2(pelicula) {
    const tabla = document.createElement("table");
    tabla.classList.add("border", "border-collapse",);
    tabla.classList.add("w-3/4");
    tabla.classList.add("h-3/4");
  
    const filasDetalles = [
        ["vote average", pelicula.vote_average],
        ["budget", pelicula.budget],
        ["revenue", pelicula.revenue],
    ];
  
    filasDetalles.forEach(([titulo, valor]) => {
        const fila = tabla.insertRow();
        const celdaTitulo = fila.insertCell(0);
        const celdaValor = fila.insertCell(1);
  
        celdaTitulo.textContent = titulo;
        celdaTitulo.classList.add("border", "p-2");
  
        celdaValor.textContent = valor;
        celdaValor.classList.add("border", "p-2");
    });
  
    return tabla;
  }
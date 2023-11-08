function crearCard(foto, nombre, descripcion, enlace) {
   const cardHTML = `
     <div class="border-2 w-1/5 h-96 p-2 flex flex-col">
       <img class="w-72 mx-auto py-4" src="${foto}" alt="">
       <h3 class="text-white py-2 px-2">${nombre}</h3>
       <p class="text-white py-2 px-2 line-clamp-5">${descripcion}</p>
       <button class="text-blue-500 font-semibold hover:underline py-2 px-2" onclick="abrirEnlaceVerMas('${enlace}')">Ver más</button>
     </div>`;
   return cardHTML;
 }
 
 const tarjetasPorPagina = 4;
 let paginaActual = 1;
 
 function mostrarTarjetasEnPagina(pagina) {
   const inicio = (pagina - 1) * tarjetasPorPagina;
   const fin = inicio + tarjetasPorPagina;
   const moviesToDisplay = movies.slice(inicio, fin);
 
   const contenedor = document.getElementById("main-content");
   contenedor.innerHTML = "";
 
   moviesToDisplay.forEach((movie, index) => {
     const card = crearCard(movie.image, movie.title, movie.overview, movie.homepage);
     contenedor.innerHTML += card;
   });
 }
 
 mostrarTarjetasEnPagina(paginaActual);
 
 const prevButton = document.getElementById("prevPage");
 const nextButton = document.getElementById("nextPage");
 const pageIndicator = document.getElementById("pageIndicator");
 
 prevButton.addEventListener("click", () => {
   if (paginaActual > 1) {
     paginaActual--;
     mostrarTarjetasEnPagina(paginaActual);
     actualizarIndicadorPagina();
     nextButton.disabled = false;
   }
 
   if (paginaActual === 1) {
     prevButton.disabled = true;
   }
 });
 
 nextButton.addEventListener("click", () => {
   const totalPages = Math.ceil(movies.length / tarjetasPorPagina);
   if (paginaActual < totalPages) {
     paginaActual++;
     mostrarTarjetasEnPagina(paginaActual);
     actualizarIndicadorPagina();
     prevButton.disabled = false;
   }
 
   if (paginaActual === totalPages) {
     nextButton.disabled = true;
   }
 });
 
 function actualizarIndicadorPagina() {
   const totalPages = Math.ceil(movies.length / tarjetasPorPagina);
   pageIndicator.textContent = `Página ${paginaActual} de ${totalPages}`;
 }
 
 function abrirEnlaceVerMas(enlace) {
   window.open(enlace, "_blank");
 }
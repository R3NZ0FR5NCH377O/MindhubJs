let titulo = document.getElementById("titulo");
titulo.classList.add("text-xl");
let tituloPrincipal = "Frutas";
titulo.textContent = tituloPrincipal;
let mainFooter = document.getElementsByClassName("mainFooter");
let footer = document.querySelector("footer");
let parrafoFooter = document.querySelector("footer p");
let contenedor = document.getElementById("contenedor");
let frutas_dulces = document.getElementById("lista")
let h2_frutas_dulces = document.querySelector("#lista h2");
h2_frutas_dulces.textContent = "Frutas Dulces"
h2_frutas_dulces.classList.add("text-center")


for (let i = 0; i < mainFooter.length; i++) {
  mainFooter[i].classList.add("bg-white");
}
console.log(mainFooter);
footer.classList.add("flex");
parrafoFooter.textContent = "Renzo Franchetto COHORT 52";

function crearCard(nombre, foto, descripcion) {
  let cardHTML = `
      <div class="card flex flex-col items-center border-2 ">
        <img class="card-image w-1/4 h-1/4" src="${foto}" alt="${nombre}">
        <h3 class="card-title">${nombre}</h3>
        <p class="card-description">${descripcion}</p>
      </div>
    `;
  return cardHTML;
}


for(fruta of frutas){
    const card = crearCard(fruta.nombre, fruta.foto, fruta.descripcion);
    contenedor.innerHTML += card;
}
// const frutasDulces = frutas.filter(fruta => fruta.esDulce);

// for (const fruta of frutasDulces) {
//     const card = crearCard(fruta.nombre, fruta.foto, fruta.descripcion);
//     frutas_dulces.innerHTML += card;
// }







const listaElement = document.getElementById("lista");

function crearListaNombresFrutasDulces(frutas) {
  const ulElement = document.createElement("ul");

  for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].esDulce) {

      const liElement = document.createElement("li");
      liElement.textContent = frutas[i].nombre; 
      ulElement.appendChild(liElement); 
    }
  }

  return ulElement; 
}


const listaNombresFrutasDulces = crearListaNombresFrutasDulces(frutas);
listaElement.appendChild(listaNombresFrutasDulces);
listaNombresFrutasDulces.classList.add("text-center")

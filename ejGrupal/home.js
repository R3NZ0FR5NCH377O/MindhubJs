const boton = document.getElementById("miBoton");
const formulario = document.getElementById("miFormulario");
const muro = document.getElementById("miMuro");
const campoTexto = document.getElementById("miCampoTexto");
const seleccionColor = document.getElementById("miSeleccionColor");
const fuenteGraffiti = document.getElementById("miFuenteGraffiti");
const fuentePoster = document.getElementById("miFuentePoster");

boton.addEventListener("click", (evento) => {
  evento.preventDefault();
  if (campoTexto.value.trim() === "") {
    alert("Complete el campo de texto");
  } else {
    const nuevoDiv = document.createElement("div");
    const parrafo = document.createElement("p");
    const botonCerrar = document.createElement("span");

    nuevoDiv.classList.add(
      "w-[290px]",
      "h-[290px]",
      "mt-5",
      "flex",
      "flex-row-reverse",
      "flex-wrap",
      "justify-center",
      "items-center"
    );
    parrafo.classList.add(
      "text-4xl",
      "font-bold",
      "text-center",
      "grow",
      "h-3/5"
    );
    botonCerrar.classList.add(
      "cerrar",
      "m-1",
      "pl-1",
      "pr-1",
      "text-xl",
      "h-1/5",
      "font-bold",
      "w-full",
      "text-left",
      "cursor-pointer"
    );

    nuevoDiv.style.backgroundColor = seleccionColor.value;

    if (fuenteGraffiti.checked) {
      parrafo.classList.add("italic");
    } else if (fuentePoster.checked) {
      parrafo.classList.add("not-italic");
    }

    muro.appendChild(nuevoDiv);
    nuevoDiv.appendChild(botonCerrar);
    nuevoDiv.appendChild(parrafo);
    parrafo.textContent = campoTexto.value;
    botonCerrar.textContent = "X";
  }
  campoTexto.value = "";
  seleccionColor.value = "#000000";

  muro.addEventListener("click", (event) => {
    let elementoClic = event.target;
    if (elementoClic.classList.contains("cerrar")) {
      elementoClic.parentElement.remove();
    }
  });
});

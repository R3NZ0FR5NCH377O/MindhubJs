let cuadro = document.getElementById("cuadro")
let boton = document.getElementById("boton")
let parrafo = document.getElementById("nombreColor")
let colorActual = "gris"




boton.addEventListener("click", ()=> {
    if (colorActual === "gris") {
        cuadro.classList.remove("bg-gray-300");
        cuadro.classList.add("bg-blue-200")
        parrafo.textContent = "SOY COLOR CELSTE"
        colorActual = "celeste";
    }else if(colorActual === "celeste"){
        cuadro.classList.remove("bg-blue-200");
        cuadro.classList.add("bg-red-400")
        parrafo.textContent = "SOY COLOR ROSA"
        colorActual = "rosa"
    }else{
        cuadro.classList.remove("bg-red-400");
        cuadro.classList.add("bg-gray-300");
        parrafo.innerHTML = "SOY COLOR GRIS";
        colorActual = "gris";
    }
})

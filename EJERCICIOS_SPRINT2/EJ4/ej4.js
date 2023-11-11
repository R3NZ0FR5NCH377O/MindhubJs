let local = document.getElementById("inputLocal");
let dolar = document.getElementById("inputDolar");
let resultado = document.getElementById("resultadoInput");
let botonCalcular = document.getElementById("botonCalcular");
let botonBorrar = document.getElementById("botonBorrar");


function pesoDolar() {
    let resultadoCalculado = parseInt(local.value) / 500;
    return resultadoCalculado;
}

function dolarPeso() {
    let resultadoCalculado = parseInt(dolar.value) * 500;
    return resultadoCalculado;
}

botonCalcular.addEventListener("click", () => {
    if (local.value !== "") {
        resultado.value = pesoDolar();
    } else if (dolar.value !== "") {
        resultado.value = dolarPeso();
    } else {
        alert("Ingresa un valor a convertir, por favor.");
    }
});

botonBorrar.addEventListener("click",()=>{
    resultado.value = ""
    local.value = ""
    dolar.value = ""
})
// let local = document.getElementById("inputLocal");
// let dolar = document.getElementById("inputDolar");
// let resultado = document.getElementById("resultadoInput");
// let boton = document.getElementById("boton");

// function pesoDolar() {
//     let resultadoCalculado = parseInt(local.value) * 500;
//     return resultadoCalculado;
// }

// function dolarPeso() {
//     let resultadoCalculado = dolar.value / 500;
//     return resultadoCalculado;
// }

// boton.addEventListener("click", () => {
//     if (local.value !== "") {
//         resultado.value = pesoDolar();
//     } else if (dolar.value !== "") {
//         resultado.value = dolarPeso();
//     } else {
//         alert("Ingresa un valor a convertir, por favor.");
//     }
// });
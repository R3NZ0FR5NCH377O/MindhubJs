let estaturaInput = document.getElementById("inputEstatura");
let pesoInput = document.getElementById("inputPeso");
let boton = document.getElementById("boton");
let resultadoInput = document.getElementById("resultadoInput");

function calcularResultado() {
    let estaturaEnMetros = estaturaInput.value / 100; 
    let estaturaAlCuadrado = Math.pow(estaturaEnMetros, 2);
    let resultado = pesoInput.value / estaturaAlCuadrado;
    return resultado;
}

boton.addEventListener("click", () => {
   resultadoInput.value = calcularResultado();
});
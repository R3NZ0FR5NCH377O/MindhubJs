const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function crearMultiplicacion2(numero1, numero2) {
  let resultado = numero1 * numero2;
  return resultado;
}

const newArray = array.map(function (element) {
  return crearMultiplicacion2(element, 2);
});

console.log(newArray);
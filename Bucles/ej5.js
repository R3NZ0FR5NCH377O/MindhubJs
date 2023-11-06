let mayorQueCero = true;
let suma = 0;
let intentos = 0; 
const numeroSecreto = suma; 

while (mayorQueCero) {
    let numero = parseInt(prompt("Ingrese un número"));

    if (numero === numeroSecreto) {
        intentos++;
        console.log("¡Felicidades! Adivinaste el número secreto en " + intentos + " intentos.");
        mayorQueCero = false;
    } else if (numero > numeroSecreto) {
        intentos++;
        console.log("El número es menor. Intento #" + intentos);
    } else if (numero < numeroSecreto) {
        intentos++;
        console.log("El número es mayor. Intento #" + intentos);
    } else if (numero === 0 || isNaN(numero)) {
        mayorQueCero = false;
    }

    suma += numero;
}
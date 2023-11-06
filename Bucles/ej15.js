let sumaPares = 0;
let sumaImpares = 0;

while (true) {
    let numero = parseInt(prompt("Ingrese un número (0 para terminar):"));

    if (numero === 0) {
        break; // Si el usuario ingresa 0, salimos del bucle
    }

    if (numero % 2 === 0) {
        // Número par
        sumaPares += numero;
    } else {
        // Número impar
        sumaImpares += numero;
    }
}

console.log("Suma de números pares: " + sumaPares);
console.log("Suma de números impares: " + sumaImpares);
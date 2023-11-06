const numeros = [8, 15, 4, 22, 11, 30, 19, 27, 7, 13];

let numeroMasGrande = numeros[0]; // Inicializamos con el primer número del array

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMasGrande) {
        numeroMasGrande = numeros[i];
    }
}

console.log("El número más grande del array es: " + numeroMasGrande);
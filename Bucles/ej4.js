suma = 0
let numero = parseInt(prompt("ingrese numero"))

do {
    numero = parseInt(prompt("ingrese numero"))
    
    if (numero == 0 || numero == undefined) {
        console.log(suma)
        break;
    } else {
        suma += numero
    }
    
} while (true);
let mayorQueCero = true
let suma = 0
while (mayorQueCero) {
    let numero = parseInt(prompt("Ingrese un numero"))
    
    if (numero === 0 || isNaN(numero)) {  
        console.log(suma)
        mayorQueCero = false
    } 
        suma += numero
    
}
let numero = parseInt(prompt("Ingresa un numero del 1 al 3:"))
let numeroAleatorio = parseInt(prompt("Ingresa un numero aleatorio:"))

if(numero <= 3){
    alert(`el numero ingresado es ${numeroAleatorio}`)
    let numeroAleatorioDoble = 2 * numeroAleatorio
    alert(`el doble del numero ingresado es ${numeroAleatorioDoble}`)
    let numeroAleatorioTriple = 3 * numeroAleatorio
    alert(`el triple del numero ingresado es ${numeroAleatorioTriple}`)

}
else{
    alert("ese valor no esta permitido")
}
let nombre = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido")
let dni = parseInt(prompt("ingrese su dni"))
let domicilio = prompt("ingrese su domicilio")
let nacimineto = prompt("ingrese su fecha de nacimiento")

alert(`Su nombre es ${nombre}, su apellido es ${apellido}, su dni es ${dni}, su domicilio es ${domicilio} y su fecha de nacimiento es ${nacimineto}`)
let datosCorrectos = prompt("Los datos presentados son correctos?(si / no):")
if(datosCorrectos == "si"){
    let datosIngresados = new Object()
    datosIngresados.nombre = nombre;
    datosIngresados.apellido = apellido;
    datosIngresados.dni = dni;
    datosIngresados.domicilio = domicilio;
    datosIngresados.naciminetoo = nacimineto;
    console.table(datosIngresados)


}
else{
    alert(`vuelva a \rintentarlo dentro de un mes`)
}

// let miNombre = "Renzo"
// let miApellido = "Franchetto"
// let miEdad = 20
// let miMascota = "Biena_Thor"
// let edadMascota = 3.5

// console.log(miNombre,miApellido,miEdad,miMascota,edadMascota)

// let nombreCompleto = miNombre +" "+miApellido

// console.log(nombreCompleto)
// let textoPresentacion = ` Hola me llamo ${miNombre} ${miApellido}, TENGO ${miEdad} años, mis perros se llaman ${miMascota} y tienen ${edadMascota}`
// console.log(textoPresentacion)

// let sumaEdades = miEdad + edadMascota
// let restaEdades = miEdad - edadMascota
// let productoEdades = miEdad * edadMascota
// let divisionEdades = miEdad / edadMascota

// let alumno = {
//     nombre : "Renzo",
//     apellido : "Franchetto",
//     especialidad : "It",
//     experiencia : 3,
//     comida_favorita : "Pollo al champiñon"

// }
// console.table(alumno)
// console.table(alumno.nombre)
// console.table(alumno.apellido)
// console.table(alumno.especialidad)
// console.table(alumno.experiencia)
// console.table(alumno.comida_favorita)


// let mascota = {
//     nombre : "Thor_Biena",
//     apellido : "Franchetto",
//     raza : "salchicha",
//     caracter : "juguetones",
//     comida_favorita : "Arroz"

// }
// console.table(mascota)
// console.table(mascota.nombre)
// console.table(mascota.apellido)
// console.table(mascota.raza)
// console.table(mascota.caracter)
// console.table(mascota.comida_favorita)

// let frutas = ["banana","Manzana","Frutilla","Durazno","Sandia"]

// console.table(frutas)
// console.table(frutas[0])
// console.table(frutas[1])
// console.table(frutas[2])
// console.table(frutas[3])
// console.table(frutas[4])


// // let soyMayorDeEdad = (prompt("Introduce tu edad:")) >=18
// // let mensaje = `Soy mayor de edad ${soyMayorDeEdad}`

// // console.table(mensaje)

// let numeros = [1,2,3,4,5]
// console.table(numeros)
// console.table(numeros[0])
// console.table(numeros[1])
// console.table(numeros[2])
// console.table(numeros[3])
// console.table(numeros[4])







// let familia = [{nombre:"renzo"},{apellido:"franchetto"},{edad:20},{desendencia:"italiano"},{hobby:"muchas cosas"}]
// console.table(familia)
// console.table(familia[0].nombre)
// console.table(familia[1].apellido)
// console.table(familia[2].edad)
// console.table(familia[3].desendencia)
// console.table(familia[4].hobby)
// let textoAleatorio = `${frutas[1]} ${numeros[3]} ${familia[4].hobby} `

// console.table(textoAleatorio)

// let yo = prompt("Introduce tu edad:")
// let miCompa = prompt("Introduce la edad de tu compa:")

// let edadesIgualesAux = yo == miCompa
// let soyMayorAux = yo > miCompa
// let soyMenorAux = yo < miCompa

// let edadesIguales = `Mi edad es igual a la de mi compa ${edadesIgualesAux}`
// let soyMayor = `Mi edad es mayor a la de mi compa ${soyMayorAux}`
// let soyMenor = `Mi edad e menor a la de mi compa ${soyMenorAux}`


// console.log(soyMenor)

// let edadPuedeSubir = (prompt("indique su edad:"))>=6
// let estaturaPuedeSubir = (prompt("indique su estatura en cm:"))>=120

// let condicion = edadPuedeSubir && estaturaPuedeSubir

// let puedeSubir = `Puede subir a la atraccion ${condicion}`

// console.log(puedeSubir)

let pase = prompt("selecciona tu pase(vip, normal o limitado)")
let saldo = parseInt(prompt("Tu saldo puede ser entre 0 y 5000"))

if (pase === "vip" && saldo > 1000){
   let puedePasar = "La persona puede pasar: " + " "+ true
   console.log(puedePasar)
}
else{
    let puedePasar = "La persona puede pasar:" +" " + false
    console.log(puedePasar)

}


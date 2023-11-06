function crearPersona() {
    let persona = {}
    let nombre = prompt("ingrese su nombre")
    if(nombre == ""){
        alert("El nombre no puede estar vacio")
        return;
    }
    persona.nombre=nombre;
    let apellido = prompt("ingrese su apellido")
    if(apellido == ""){
        alert("El apellido no puede estar vacio")
        return;
    }
    persona.apellido=apellido;
    let edad = prompt("ingrese su edad")
    if(edad == ""){
        alert("La edad no puede estar vacia")
        return;
    }
    persona.edad=edad;
    console.log("Los datos son:")
    console.table(persona)

}
crearPersona();

function saludar(nombre) {
    console.log("Hola, mi nombre es " + nombre);
}

function calcularEdad(nacimiento, añoActual) {
    let edad = añoActual - nacimiento;
    console.log("Tengo " + edad + " años");
}

function presentarse() {
    let nombre = prompt("Ingresa tu nombre");
    saludar(nombre);

    let nacimiento = parseInt(prompt("Ingresa tu año de nacimiento"));
    let fechaActual = new Date();
    let añoActual = fechaActual.getFullYear();

    calcularEdad(nacimiento, añoActual);
}

presentarse();
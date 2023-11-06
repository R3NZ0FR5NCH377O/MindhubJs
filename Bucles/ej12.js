const familia = [
    { nombre: "Juan", edad: 35, relacion: "Padre", ciudad: "Ciudad A" },
    { nombre: "Ana", edad: 30, relacion: "Madre", ciudad: "Ciudad B" },
    { nombre: "Lucía", edad: 12, relacion: "Hija", ciudad: "Ciudad A" },
    { nombre: "Carlos", edad: 8, relacion: "Hijo", ciudad: "Ciudad B" }
];

function presentarFamilia(familia) {
    for (const miembro of familia) {
        console.log(`Hola, soy ${miembro.nombre}. Tengo ${miembro.edad} años y soy ${miembro.relacion}. Vivo en ${miembro.ciudad}.`);
    }
}

presentarFamilia(familia);
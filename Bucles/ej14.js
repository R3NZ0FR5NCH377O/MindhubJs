const miObjeto = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Ciudad A",
    profesión: "Ingeniero",
    hobby: "Pintura"
};

for (const key in miObjeto) {
    console.log(miObjeto[key]);
}
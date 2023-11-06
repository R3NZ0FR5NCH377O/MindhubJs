function sonarCampana() {
    return "¡Suena la campana!";
}

let resultado = "";

for (let i = 0; i < 5; i++) {
    resultado += sonarCampana() + "Ding Dong, ";
}

console.log(resultado);
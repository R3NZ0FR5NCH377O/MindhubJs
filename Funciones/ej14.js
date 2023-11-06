function diaSemana(dia){
    switch (dia) {
        case 1:
            console.log("Es dia laboral")
            break;
        case 2:
            console.log("Es dia laboral")

            break;
        case 3:
            console.log("Es dia laboral")
            break;
        case 4:
            console.log("Es dia laboral")
            break;
        case 5:
            console.log("Es dia laboral")
            break;
        case 6:
            console.log("Es fin de semana")
            break;
        case 7:
            console.log("Es fin de semana")
            break;

        default:
            console.log("Valor ingresado incorrecto...ingrese un dia entre el 1 y el 7")
            break;
    }
}
diaSemana(9)
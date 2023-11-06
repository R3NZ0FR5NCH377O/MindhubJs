function operacion() {
    let numero1, numero2, operacion;

    do {
        numero1 = parseInt(prompt("Elija un número entre 1 y 100 (distinto de cero):"));
    } while (numero1 === 0);

    do {
        numero2 = parseInt(prompt("Elija un número entre 1 y 100 (distinto de cero):"));
    } while (numero2 === 0);

    while (true) {
        operacion = prompt("Elija la operación (suma, resta, multiplicación o división):");

        if (operacion === "suma") {
            alert(numero1 + numero2);
            break;
        } else if (operacion === "resta") {
            alert(numero1 - numero2);
            break;
        } else if (operacion === "multiplicacion") {
            alert(numero1 * numero2);
            break;
        } else if (operacion === "division") {
            if (numero2 === 0) {
                alert("No se puede dividir por cero. Intente nuevamente.");
            } else {
                alert(numero1 / numero2);
            }
            break;
        } else {
            alert("Operación no válida. Intente nuevamente.");
        }
    }
}

operacion();



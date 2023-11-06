function jugarPiedraPapelTijera() {
    let jugador1 = prompt("JUgador 1 ,Elige piedra, papel o tijera:");
    let jugador2 = prompt("Jugador 2 ,Elige piedra, papel o tijera:");

    if (jugador1 === jugador2) {
        alert("Empate, vuelvan a intentarlo");
        jugarPiedraPapelTijera();
    } else if (jugador1 === "piedra" && jugador2 === "papel") {
        alert("Gano el jugador 2");
    } else if (jugador1 === "piedra" && jugador2 === "tijera") {
        alert("Gano el jugador 1");
    } else if (jugador1 === "tijera" && jugador2 === "piedra") {
        alert("Gano el jugador 2");
    } else if (jugador1 === "tijera" && jugador2 === "papel") {
        alert("Gano el jugador 1");
    } else if (jugador1 === "papel" && jugador2 === "tijera") {
        alert("Gano el jugador 2");
    } else if (jugador1 === "papel" && jugador2 === "piedra") {
        alert("Gano el jugador 1");
    } else {
        alert("Dato invalido");
        jugarPiedraPapelTijera(); 
    }
}

jugarPiedraPapelTijera();
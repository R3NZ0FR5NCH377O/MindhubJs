let numeroIncognita = 7;
let menor = "El número ingresado es menor, vuelve a intentarlo,loser";
let mayor = "El número ingresado es mayor, vuelve a intentarlo,loser";
let igual = "¡El número ingresado es igual, ganasteeeeeee!";

function adivinarNumero() {
  let numeroIngresado = parseInt(prompt("Ingresa un número:"));

  if (numeroIngresado == numeroIncognita) {
    alert(igual);
  } else if (numeroIngresado > numeroIncognita) {
    alert(mayor);
     adivinarNumero();
  } else {
    alert(menor);
    adivinarNumero();
  }

  
}

adivinarNumero(); 
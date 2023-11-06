let edad = prompt("Ingresa tu edad:");

if (edad <= 12) {
  alert("Eres un infante");
} else if (edad > 12 && edad <= 18) {
  alert("Eres un adolescente");
} else if (edad > 18 && edad <= 45) {
  alert("Eres un Mayor Joven");
} else if (edad > 45 && edad <= 100) {
  alert("Eres un Anciano");
} else if (edad > 100) {
  alert(`¿En realidad tienes esa edad? ${edad}`);
} else {
  alert("Ingresa una edad válida");
}
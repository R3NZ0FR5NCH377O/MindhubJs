function encontrarPosicionCervezaPorNombre(cervezas, nombreBuscado) {
    for (let i = 0; i < cervezas.length; i++) {
      if (cervezas[i].nombre === nombreBuscado) {
        return i;
      }
    }
  
    console.log(`${nombreBuscado} no existe`);
    return -1; 
  }
  
 
  const cervezas = [
    { nombre: "Cerveza1", alcohol: 6.5, amargura: 20 },
    { nombre: "Cerveza2", alcohol: 7.0, amargura: 15 },
    { nombre: "Cerveza3", alcohol: 5.8, amargura: 25 },
    { nombre: "Cerveza4", alcohol: 8.2, amargura: 18 },
    { nombre: "Cerveza5", alcohol: 6.9, amargura: 22 },
    { nombre: "Cerveza6", alcohol: 7.5, amargura: 17 },
    { nombre: "Cerveza7", alcohol: 5.5, amargura: 30 },
    { nombre: "Cerveza8", alcohol: 9.0, amargura: 13 },
    { nombre: "Cerveza9", alcohol: 6.0, amargura: 26 },
    { nombre: "Cerveza10", alcohol: 7.8, amargura: 19 },
    { nombre: "Cerveza11", alcohol: 8.7, amargura: 16 },
    { nombre: "Cerveza12", alcohol: 7.2, amargura: 21 },
    { nombre: "Cerveza13", alcohol: 5.2, amargura: 28 },
    { nombre: "Cerveza14", alcohol: 9.5, amargura: 12 },
    { nombre: "Cerveza15", alcohol: 6.3, amargura: 24 },
    { nombre: "Cerveza16", alcohol: 7.9, amargura: 14 },
    { nombre: "Cerveza17", alcohol: 5.7, amargura: 23 },
    { nombre: "Cerveza18", alcohol: 8.3, amargura: 11 },
    { nombre: "Cerveza19", alcohol: 6.7, amargura: 27 },
    { nombre: "Cerveza20", alcohol: 9.2, amargura: 10 },
  ];
  
  const nombreBuscado = "Cerveza10";
  
  const posicionCerveza = encontrarPosicionCervezaPorNombre(cervezas, nombreBuscado);
  
  if (posicionCerveza !== -1) {
    console.log(`${nombreBuscado} se encuentra en la posición ${posicionCerveza}`);
  }
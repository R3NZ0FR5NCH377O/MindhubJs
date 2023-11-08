function buscarCervezaPorIBU(cervezas, valorIBU) {
    const cervezaEncontrada = cervezas.find((cerveza) => cerveza.ibu === valorIBU);
  
    if (cervezaEncontrada) {
      return cervezaEncontrada;
    } else {
      console.log(`No existe cerveza con un IBU de ${valorIBU}`);
      return null;
    }
  }
  
  const cervezas = [
    { nombre: "Cerveza1", ibu: 20 },
    { nombre: "Cerveza2", ibu: 15 },
    { nombre: "Cerveza3", ibu: 25 },
    { nombre: "Cerveza4", ibu: 12 },
    { nombre: "Cerveza5", ibu: 18 },
    { nombre: "Cerveza6", ibu: 10 },
    { nombre: "Cerveza7", ibu: 30 },
    { nombre: "Cerveza8", ibu: 22 },
    { nombre: "Cerveza9", ibu: 14 },
    { nombre: "Cerveza10", ibu: 28 },
    { nombre: "Cerveza11", ibu: 9 },
    { nombre: "Cerveza12", ibu: 17 },
    { nombre: "Cerveza13", ibu: 21 },
    { nombre: "Cerveza14", ibu: 8 },
    { nombre: "Cerveza15", ibu: 27 },
    { nombre: "Cerveza16", ibu: 11 },
    { nombre: "Cerveza17", ibu: 23 },
    { nombre: "Cerveza18", ibu: 13 },
    { nombre: "Cerveza19", ibu: 24 },
    { nombre: "Cerveza20", ibu: 7 },
  ];
  
  const valorIBU = 24
  
  const cervezaEncontrada = buscarCervezaPorIBU(cervezas, valorIBU);
  
  if (cervezaEncontrada) {
    console.log("Cerveza encontrada:", cervezaEncontrada);
  }
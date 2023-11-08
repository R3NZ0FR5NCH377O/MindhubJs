function obtenerCervezasMasAlcoholicas(cervezas) {
  
    cervezas.sort((a, b) => b.alcohol - a.alcohol);
  
    const cervezasMasAlcoholicas = cervezas.slice(0, 10);
  
    return cervezasMasAlcoholicas;
  }
  
  const cervezas = [
    { nombre: "Cerveza1", alcohol: 6.5 },
    { nombre: "Cerveza2", alcohol: 7.0 },
    { nombre: "Cerveza3", alcohol: 5.8 },
    { nombre: "Cerveza4", alcohol: 8.2 },
    { nombre: "Cerveza5", alcohol: 6.9 },
    { nombre: "Cerveza6", alcohol: 7.5 },
    { nombre: "Cerveza7", alcohol: 5.5 },
    { nombre: "Cerveza8", alcohol: 9.0 },
    { nombre: "Cerveza9", alcohol: 6.0 },
    { nombre: "Cerveza10", alcohol: 7.8 },
    { nombre: "Cerveza11", alcohol: 8.7 },
    { nombre: "Cerveza12", alcohol: 7.2 },
    { nombre: "Cerveza13", alcohol: 5.2 },
    { nombre: "Cerveza14", alcohol: 9.5 },
    { nombre: "Cerveza15", alcohol: 6.3 },
    { nombre: "Cerveza16", alcohol: 7.9 },
    { nombre: "Cerveza17", alcohol: 5.7 },
    { nombre: "Cerveza18", alcohol: 8.3 },
    { nombre: "Cerveza19", alcohol: 6.7 },
    { nombre: "Cerveza20", alcohol: 9.2 },
  ];
  
  const cervezasTop10 = obtenerCervezasMasAlcoholicas(cervezas);
  console.log(cervezasTop10);
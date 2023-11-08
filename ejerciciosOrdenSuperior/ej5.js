function obtenerCervezasMenosAmargas(cervezas) {
  
    cervezas.sort((a, b) => a.amargura - b.amargura);
  
    const cervezasMenosAmargas = cervezas.slice(0, 10);
  
    return cervezasMenosAmargas;
  }
  
  const cervezas = [
    { nombre: "Cerveza1", amargura: 20 },
    { nombre: "Cerveza2", amargura: 15 },
    { nombre: "Cerveza3", amargura: 25 },
    { nombre: "Cerveza4", amargura: 12 },
    { nombre: "Cerveza5", amargura: 18 },
    { nombre: "Cerveza6", amargura: 10 },
    { nombre: "Cerveza7", amargura: 30 },
    { nombre: "Cerveza8", amargura: 22 },
    { nombre: "Cerveza9", amargura: 14 },
    { nombre: "Cerveza10", amargura: 28 },
    { nombre: "Cerveza11", amargura: 9 },
    { nombre: "Cerveza12", amargura: 17 },
    { nombre: "Cerveza13", amargura: 21 },
    { nombre: "Cerveza14", amargura: 8 },
    { nombre: "Cerveza15", amargura: 27 },
    { nombre: "Cerveza16", amargura: 11 },
    { nombre: "Cerveza17", amargura: 23 },
    { nombre: "Cerveza18", amargura: 13 },
    { nombre: "Cerveza19", amargura: 24 },
    { nombre: "Cerveza20", amargura: 7 },
  ];
  
  const cervezasMenosAmargas = obtenerCervezasMenosAmargas(cervezas);
  console.log(cervezasMenosAmargas);
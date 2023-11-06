const fechaLimite = new Date('2023-01-01'); // Define tu fecha límite
const fechas = [
    new Date('2022-12-15'),
    new Date('2023-01-10'),
    new Date('2023-02-05'),
    new Date('2023-03-20'),
];

for (const fecha of fechas) {
    if (fecha >= fechaLimite) {
        console.log(fecha);
    }
}
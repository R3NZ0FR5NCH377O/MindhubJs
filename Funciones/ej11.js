let cantidad = 10;
let precio = 100;
let funcionFlecha = (precio, cantidad) => precio * cantidad;

if (cantidad >= 10) {
    descuentoMenor = funcionFlecha(precio, cantidad) * (10/100);
    totalAPagar = funcionFlecha(precio,cantidad) - descuentoMenor
    console.log("Descuento aplicado: "+ descuentoMenor);
    console.log("Total a pagar: "+ totalAPagar)
} else if (cantidad >= 20) {
    descuentoMayor = funcionFlecha(precio, cantidad) * (20/100);
    totalAPagar = funcionFlecha(precio,cantidad) - descuentoMayor
    console.log("Descuento aplicado: "+ descuentoMayor);
    console.log("Total a pagar: "+ totalAPagar)
} else {
    sinDescuento = funcionFlecha(precio, cantidad);
    console.log(sinDescuento);
}



let nombreCliente = prompt("Ingrese su nombre:")
let pase = prompt("Ingrese su pase(vip o normal):")
let entrada = prompt("¿Tiene entrada?(si/no")


if(nombreCliente == "renzo" || pase == "vip"){
    alert("Bienvenido al bolicheee!!")
}
else if (entrada == "si"){
    let entrada_si_no=prompt("Desea utilizar su entrada?(si/no):")
    if(entrada_si_no == "si"){
        alert("Bienvenido al bolicheee!!")  
    }else{
        alert("fueraaa")
    }
   
}
else if(entrada == "no"){
    let preguntarCompra = prompt("Deseas comprar una entrada?(si/no):")
    if(preguntarCompra == "si"){
        let preguntarDinero= prompt("Tienes mas de 1000 dolares(si / no):")
        if(preguntarDinero == "si"){
            alert("venta exitosa")
            alert("Bienvenido al bolicheee!!")  
        }else{
            alert("Rechazo de compra")
            alert("fueraaa")
        }
    }else{
        
        alert("fueraaa")
    }
}else{
    alert("Fueraaa")
}
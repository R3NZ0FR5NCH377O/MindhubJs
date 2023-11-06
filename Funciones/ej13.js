function impuesto(ingreso){
    if (ingreso<=10000) {
        let impuestoMenor = ingreso*(10/100)
        console.log("el impuesto a pagar es el 10% de su ingreso, "+impuestoMenor)
    } else if(ingreso>10000 && ingreso < 20000) {
        let impuestoMedio = ingreso*(15/100)
        console.log("el impuesto a pagar es el 15% de su ingreso, "+impuestoMedio)
    }
    else{
        let impuestoMayor = ingreso*(20/100)
        console.log("el impuesto a pagar es el 20% de su ingreso, "+impuestoMayor)
    }
}
impuesto(20000)
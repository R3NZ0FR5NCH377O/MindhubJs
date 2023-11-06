let numero1 = parseInt(prompt("elija un numero entre el 1 y el 100:"))
let numero2 = parseInt(prompt("elija un numero entre el 1 y el 100:"))
let operacion = prompt("Elija la operacion(suma,resta,multiplicacion o division):")

switch (operacion){
    case "suma":
        console.log(numero1 + numero2);
        break;
    case "resta":
        console.log(numero1 - numero2); 

        break;
    case "multiplicacion":
        console.log(numero1 * numero2); 

        break;
        case "division":
            
            if(numero1 == 0 || numero2 == 0){
                alert("No se puede dividir por cero (0) salame")
            }else{
                alert(numero1/numero2)
            }

        break;
        
    default:
        console.log("no no no")

}

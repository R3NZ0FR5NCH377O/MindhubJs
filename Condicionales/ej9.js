let persona1 = {
    nombre:"juan",
    edad:39,
    altura:1.19
}
let persona2 = {
    nombre:"marta",
    edad:40,
    altura:1.17
}

if(persona1.altura < persona2.altura){
    if(persona1.edad > persona2.edad){
        console.log(`${persona1.nombre} Tiene menos altura y es mayor que ${persona2.nombre}`)
    }
    else{ 
        console.log(`${persona1.nombre} Tiene menos altura y es menor que ${persona2.nombre}`)
    }

}else if(persona1.altura > persona2.altura){
    if(persona1.edad > persona2.edad){
        console.log(`${persona1.nombre} Tiene mas altura y es mayor que ${persona2.nombre}`)
    }
    else{ 
        console.log(`${persona1.nombre} Tiene mas altura y es menor que ${persona2.nombre}`)
    }
}else{
    console.log(`${persona1.nombre} y ${persona2.nombre} son igual de altos y tienen la misma edad`)
}
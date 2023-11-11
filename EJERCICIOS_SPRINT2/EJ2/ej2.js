let texto = document.getElementById("texto")
let input = document.getElementById("inputTexto")
let boton = document.getElementById("boton")


input.addEventListener("input",()=>{
    texto.innerHTML = input.value
})


boton.addEventListener("click",()=>{
        input.value = ""
        texto.innerHTML = ""
    })

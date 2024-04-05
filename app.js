const input = document.querySelector("#entrada")
const boton = document.querySelector("#btn")

boton.addEventListener("click", ()=>{
    const valorEntrada = input.value
    alert(`Hola ${valorEntrada}`)
})

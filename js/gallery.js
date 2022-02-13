// Nombre de los archivos png en el orden que deben renderizarse
let names = [21,20,19,18,17,16,15,14,"retro"]

document.addEventListener("DOMContentLoaded", () => {
    let html = "<h2>¡PASCUA JOVEN AÑO A AÑO!</h2>"

    names.forEach(nombre => {
        html += `<div class="galleryCard" id="PJ${nombre}">
                    <img src="./images/galeria/${nombre}.png" alt="Pascua Joven ${nombre}">
                </div>`
    })
    
    document.getElementById("contentGallery").innerHTML = html

    names.forEach(nombre => {
        document.getElementById(`PJ${nombre}`).addEventListener("click", () => mostrarPascua(nombre))
    })
})

function mostrarPascua(pascua) {
    console.log(pascua)
}
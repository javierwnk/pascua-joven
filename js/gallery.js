// Nombre de los archivos png en el orden que deben renderizarse
let names = [21,20,19,18,17,16,15,14,"retro"]
let pascuas = [{
    id: 21,
    ruta: "./images/galeria/imgGaleria/PJ2021",
    cantidad: 12,
    format: ".jpeg"
},
{
    id: 19,
    ruta: "./images/galeria/imgGaleria/PJ2019",
    cantidad: 31,
    format: ".jpg"
},
{
    id: 18,
    ruta: "./images/galeria/imgGaleria/PJ2018",
    cantidad: 10,
    format: ".jpg"
},
{
    id: 17,
    ruta: "./images/galeria/imgGaleria/PJ2017",
    cantidad: 8,
    format: ".jpg"
},
{
    id: 16,
    ruta: "./images/galeria/imgGaleria/PJ2016",
    cantidad: 27,
    format: ".jpg"
},
{
    id: 15,
    ruta: "./images/galeria/imgGaleria/PJ2015",
    cantidad: 18,
    format: ".jpg"
},
{
    id: 14,
    ruta: "./images/galeria/imgGaleria/PJ2014",
    cantidad: 25,
    format: ".jpg"
},
{
    id: "retro",
    ruta: "./images/galeria/imgGaleria/PJRETRO",
    cantidad: 17,
    format: ".jpg"
},]

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
    document.getElementById("contentGallery").style.display = "none"

    let html = ""

    if(pascua != 20) {
        let busqueda = pascuas.find(pj => pj.id == pascua)

        html = ` <div class="carousel-item active">
                        <img src="${busqueda.ruta}/1${busqueda.format}" class="d-block w-100" alt="...">
                    </div>`
    
        for(let i = 2; i <= busqueda.cantidad; i++) {
            
            html += `<div class="carousel-item">
            <img src="${busqueda.ruta}/${i}${busqueda.format}" class="d-block w-100" alt="...">
        </div>`
        }


    
    } else {
        html = ` <div class="carousel-item active">
                    <iframe width="100%" height="600px" src="https://www.youtube.com/embed/vaHOxP9rXC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>`
    }


    document.getElementById("imagenesSlider").innerHTML = html
    document.getElementById("carruselGaleria").style.display = "block"

}


document.getElementById("backButton").addEventListener("click", () => {
    document.getElementById("contentGallery").style.display = "grid"
    document.getElementById("carruselGaleria").style.display = "none"
})

let inscripcionesOpciones = [{
    name: "participantes",
    imagen: "fg_participante.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSd-XFIUgQw7vZ5022sV31k-vtmI6-1LwBOeemjmGJu4bjsDmQ/viewform",
    titulo: "PARTICIPANTE",
    explicacion: "Pueden ser participantes aquellos jóvenes que estén cursando sus últimos dos años de colegio: 5to y 6to año de secundaria.",
},
{
    name: "coordinador",
    imagen: "fg_coordi.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfgukntV-6sGGjv9iqfQBSGytp4bAcrkVGhBkTu5JA0HzdFkA/viewform",
    titulo: "COORDINADOR DE GRUPITO",
    explicacion: "Pueden ser coordinadores de grupo aquellos jóvenes ya egresados que tengan entre 18 y 21 años. ",

},
{
    name: "servidor",
    imagen: "fg_servidor.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfR_c7NY7VP0uGnXUGCIgaFiCmQJVq8hWWw4l142kKypPuwyQ/viewform",
    titulo: "SERVIDOR",
    explicacion: "Pueden ser servidores aquellos jóvenes ya egresados que tengan más de 21 años. ",

},
{
    name: "acompanante",
    imagen: "fg_acompanante.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScy3F2Qp_nSHeobonMhd7unRq9cLUw23h3aqoCkOcbXBurDGw/viewform",
    titulo: "ACOMPAÑANTE",
    explicacion: "Serán acompañantes los adultos responsables designados por cada colegio y parroquia para acompañar al grupo de jóvenes correspondiente. ",

}]

// Variable que setea el tiempo que debe habilitarse la inscripción
var countDown2 = new Date("Mar 6, 2024 00:00:00").getTime();

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance2 = countDown2 - now;

$(document).ready(function () {
    let html = ""
    inscripcionesOpciones.forEach(opcion => {
        html += `<div class="circleCard">
        <div class="show" id="${opcion.name}Circulo">
            <div class="cardLogo">
                <img src="./images/icons/${opcion.imagen}" alt="${opcion.name}">
            </div>
            <p>${opcion.titulo}</p>    
        </div> 
        <div class="info" id="info${opcion.name}">
            <p>${opcion.explicacion}</p>
        </div>`

    if(distance2 > 0) { // cambiar luego por un menor para cuando inicien inscripciones
        html += `<button disabled>Próximamente</button>
        </div>`
    } else {
        html += `<a href="${opcion.link}" target="_blank">Inscribirse</a>
        </div>`
    }

    })

    if(distance2 <= 0) { document.getElementById("inscripcionTexto").innerText = "¡Seleccioná tu rol para inscribirte!"}


    document.getElementById("inscripcionesOpciones").innerHTML = html

    inscripcionesOpciones.forEach(opcion => {
        $(`#info${opcion.name}`).hide()

        $(`#${opcion.name}Circulo`).mouseover(function() {
            $(`#info${opcion.name}`).show()
            $(`#${opcion.name}Circulo`).hide()
        })
    
        $(`#info${opcion.name}`).mouseout(function () {
            $(`#info${opcion.name}`).hide()
            $(`#${opcion.name}Circulo`).show()
        })
    })
})

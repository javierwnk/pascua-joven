let inscripcionesOpciones = [{
    name: "participantes",
    imagen: "fg_participante.png",
    link: "#",
    titulo: "PARTICIPANTE",
    explicacion: "Pueden ser participantes aquellos jóvenes que estén cursando sus últimos dos años de colegio: 5to y 6to año de secundaria.",
},
{
    name: "participanteVirtual",
    imagen: "fg_participante_virtual.png",
    link: "#",
    titulo: "PARTICIPANTE VIRTUAL",
    explicacion: "Pueden participar de Pascua Joven Virtual aquellos jóvenes que estén en el interior del país y en otros países. ",
},
{
    name: "coordinador",
    imagen: "fg_coordi.png",
    link: "#",
    titulo: "COORDINADOR DE GRUPITO",
    explicacion: "Pueden ser coordinadores de grupo aquellos jóvenes ya egresados que tengan entre 18 y 21 años. ",

},
{
    name: "servidor",
    imagen: "fg_servidor.png",
    link: "#",
    titulo: "SERVIDOR",
    explicacion: "Pueden ser servidores aquellos jóvenes ya egresados que tengan más de 21 años. ",

},
{
    name: "acompanante",
    imagen: "fg_acompanante.png",
    link: "#",
    titulo: "ACOMPAÑANTE",
    explicacion: "Serán acompañantes los adultos responsables designados por cada colegio y parroquia para acompañar al grupo de jóvenes correspondiente. ",

}]

// Variable que setea el tiempo que debe habilitarse la inscripción
var countDown2 = new Date("Mar 7, 2022 00:00:00").getTime();

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

    if(distance2 > 0) {
        html += `<button disabled>Inscribirse</button>
        </div>`
    } else {
        html += `<a href="${opcion.link}">Inscribirse</a>
        </div>`
    }


    })

    if(distance2 <= 0) { document.getElementById("inscripcionTexto").innerText = "¡Selecciona tu rol para inscribirte!"}


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

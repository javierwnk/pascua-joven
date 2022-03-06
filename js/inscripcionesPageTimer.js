let inscripcionesOpciones2 = [{
    name: "participantes",
    imagen: "fg_participante.png",
    link: "#",
    titulo: "PARTICIPANTE",
    explicacion: "Jóvenes que estén cursando sus últimos dos años de colegio: 5to y 6to año de secundaria.",
},
{
    name: "participanteVirtual",
    imagen: "fg_participante_virtual.png",
    link: "#",
    titulo: "PARTICIPANTE VIRTUAL",
    explicacion: "Jóvenes que estén en el interior del país y en otros países. ",
},
{
    name: "coordinador",
    imagen: "fg_coordi.png",
    link: "#",
    titulo: "COORDINADOR DE GRUPITO",
    explicacion: "Jóvenes ya egresados que tengan entre 18 y 21 años. ",

},
{
    name: "servidor",
    imagen: "fg_servidor.png",
    link: "#",
    titulo: "SERVIDOR",
    explicacion: "Jóvenes ya egresados que tengan más de 21 años. ",

},
{
    name: "acompanante",
    imagen: "fg_acompanante.png",
    link: "#",
    titulo: "ACOMPAÑANTE",
    explicacion: "Adultos designados por cada colegio y parroquia para acompañar al grupo. ",

}]

// Variable que setea el tiempo que debe habilitarse la inscripción
var countDown3 = new Date("Mar 7, 2022 00:00:00").getTime();

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance3 = countDown3 - now;

window.onload = function () {
    let html = ""
    inscripcionesOpciones2.forEach(opcion => {
        html += `<div class="circleCard">
        <div class="imagenCard">
            <img src="./images/icons/${opcion.imagen}" alt="${opcion.titulo}">
        </div>
        <div class="textoCard">
            <p class="tituloInscripcion">${opcion.titulo}</p>
            <p>${opcion.explicacion} </p>
        </div>`

    if(distance3 > 0) {
        html += `<a href="#">Muy pronto</a>
        </div>`
    } else {
        html += `<a href="${opcion.link}">Inscribirse</a>
        </div>`
    }


    })


    document.getElementById("inscripcionesPageOptions").innerHTML = html

}

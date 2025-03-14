let inscripcionesOpciones2 = [{
    name: "participantes",
    imagen: "fg_participante.png",
    link: "https://forms.gle/FQBe4osQhkH5Vgq77",
    titulo: "PARTICIPANTE",
    explicacion: "Pueden ser participantes aquellos jóvenes que estén cursando sus últimos dos años de colegio: 5to y 6to año de secundaria.",
    target: "_blank"
},
{
    name: "coordinador",
    imagen: "fg_coordi.png",
    link: "https://forms.gle/4aB1K4vmXbxGT89M8",
    titulo: "COORDINADOR",
    explicacion: "Pueden ser coordinadores de grupo aquellos jóvenes ya egresados que tengan entre 18 y 21 años. ",
    target: "_blank"
},
{
    name: "servidor",
    imagen: "fg_servidor.png",
    link: " https://forms.gle/XneuwJdzYn5P2Exz8",
    titulo: "SERVIDOR",
    explicacion: "Pueden ser servidores aquellos jóvenes ya egresados que tengan más de 21 años. ",
    target: "_blank"
},
{
    name: "acompanante",
    imagen: "fg_acompanante.png",
    link: "https://forms.gle/7GBWDnrapqVqq2rTA",
    titulo: "ACOMPAÑANTE",
    explicacion: "Serán acompañantes los adultos responsables designados por cada colegio y parroquia para acompañar al grupo de jóvenes correspondiente. ",
    target: "_blank"
}]

// Variable que setea el tiempo que debe habilitarse la inscripción
var countDown3 = new Date("Mar 18, 2025 12:00:00").getTime();

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

    if(distance3 > 0) { // Cambiar por un mayor cuando inicien inscripciones
        html += `<a href="#" style="background: lightgrey;">Próximamente</a>
        </div>`
    } else {
        html += `<a href="${opcion.link}" target="${opcion.target}">Inscribirse</a>
        </div>`
    }


    })


    document.getElementById("inscripcionesPageOptions").innerHTML = html

}

let inscripcionesOpciones2 = [{
    name: "participantes",
    imagen: "fg_participante.png",
    link: "./participantes.html",
    titulo: "PARTICIPANTE",
    explicacion: "Jóvenes que estén cursando sus últimos dos años de colegio: 5to y 6to año de secundaria.",
    target: "_self"
},
{
    name: "coordinador",
    imagen: "fg_coordi.png",
    link: "https://forms.gle/UPSvCkL8Hi7DxMvv9",
    titulo: "COORDINADOR DE GRUPITO",
    explicacion: "Jóvenes ya egresados que tengan entre 18 y 21 años. ",
    target: "_blank"
 
},
{
    name: "servidor",
    imagen: "fg_servidor.png",
    link: "https://forms.gle/mcsraCsfHamBVZS28",
    titulo: "SERVIDOR",
    explicacion: "Jóvenes ya egresados que tengan más de 21 años. ",
    target: "_blank"

},
{
    name: "acompanante",
    imagen: "fg_acompanante.png",
    link: "https://forms.gle/9yuH2vd7qTFHizom8",
    titulo: "ACOMPAÑANTE",
    explicacion: "Adultos designados por cada colegio y parroquia para acompañar al grupo. ",
    target: "_blank"

}]

// Variable que setea el tiempo que debe habilitarse la inscripción
var countDown3 = new Date("Mar 21, 2024 19:00:00").getTime();

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

    if(distance3 < 0) { // Cambiar por un mayor cuando inicien inscripciones
        html += `<a href="#" style="background: lightgrey;">Próximamente</a>
        </div>`
    } else {
        html += `<a href="${opcion.link}" target="${opcion.target}">Inscribirse</a>
        </div>`
    }


    })


    document.getElementById("inscripcionesPageOptions").innerHTML = html

}

let inscripcionesOpciones2 = [{
    name: "participantes",
    imagen: "fg_participante.png",
    link: "https://docs.google.com/forms/d/1l7zzkjpudsuQX-IUw3KeCDaY8SfohRf3cd96Ve5Fn1s/edit?usp=drivesdk",
    titulo: "PARTICIPANTE",
    explicacion: "Jóvenes que estén cursando sus últimos dos años de colegio: 5to y 6to año de secundaria.",
},
{
    name: "participanteVirtual",
    imagen: "fg_participante_virtual.png",
    link: "https://docs.google.com/forms/d/1Go5UiPj1dJWqkGxfHEwF_TkQS8smi8s2yOOpGEjtRCY/edit?usp=drivesdk",
    titulo: "PARTICIPANTE VIRTUAL",
    explicacion: "Jóvenes que estén en el interior del país y en otros países. ",
},
{
    name: "coordinador",
    imagen: "fg_coordi.png",
    link: "https://docs.google.com/forms/d/1I0OHjMPlhVow8x4Gm7_8k6EBeTIN1DCcVewUmbmsur0/edit?usp=drivesdk",
    titulo: "COORDINADOR DE GRUPITO",
    explicacion: "Jóvenes ya egresados que tengan entre 18 y 21 años. ",

},
{
    name: "servidor",
    imagen: "fg_servidor.png",
    link: "https://docs.google.com/forms/d/17mAbmAI2NcMzME-g_tYT4V2BSf-1Bh9EaZZKvPcBRZA/edit?usp=drivesdk#",
    titulo: "SERVIDOR",
    explicacion: "Jóvenes ya egresados que tengan más de 21 años. ",

},
{
    name: "acompanante",
    imagen: "fg_acompanante.png",
    link: "https://docs.google.com/forms/d/1GMDB-3u2tY6eVUSgTfjOcBMcAh8cD6W4nl84-2fnLlQ/edit?usp=drivesdk",
    titulo: "ACOMPAÑANTE",
    explicacion: "Adultos designados por cada colegio y parroquia para acompañar al grupo. ",

}]

// Variable que setea el tiempo que debe habilitarse la inscripción
var countDown3 = new Date("Mar 8, 2022 00:00:00").getTime();

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

    if(distance3 < 0) { // Cambiar por un menor cuando inicien inscripciones
        html += `<a href="#" style="background: lightgrey;">Inscripciones cerradas</a>
        </div>`
    } else {
        html += `<a href="${opcion.link} target="_blank"">Inscribirse</a>
        </div>`
    }


    })


    document.getElementById("inscripcionesPageOptions").innerHTML = html

}

let inscripcionesOpciones2 = [{
    name: "participantes",
    imagen: "fg_participante.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSd-XFIUgQw7vZ5022sV31k-vtmI6-1LwBOeemjmGJu4bjsDmQ/viewform",
    titulo: "PARTICIPANTE",
    explicacion: "Jóvenes que estén cursando sus últimos dos años de colegio: 5to y 6to año de secundaria.",
},
{
    name: "coordinador",
    imagen: "fg_coordi.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfgukntV-6sGGjv9iqfQBSGytp4bAcrkVGhBkTu5JA0HzdFkA/viewform",
    titulo: "COORDINADOR DE GRUPITO",
    explicacion: "Jóvenes ya egresados que tengan entre 18 y 21 años. ",

},
{
    name: "servidor",
    imagen: "fg_servidor.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfR_c7NY7VP0uGnXUGCIgaFiCmQJVq8hWWw4l142kKypPuwyQ/viewform",
    titulo: "SERVIDOR",
    explicacion: "Jóvenes ya egresados que tengan más de 21 años. ",

},
{
    name: "acompanante",
    imagen: "fg_acompanante.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScy3F2Qp_nSHeobonMhd7unRq9cLUw23h3aqoCkOcbXBurDGw/viewform",
    titulo: "ACOMPAÑANTE",
    explicacion: "Adultos designados por cada colegio y parroquia para acompañar al grupo. ",

}]

// Variable que setea el tiempo que debe habilitarse la inscripción
var countDown3 = new Date("Mar 6, 2024 00:00:00").getTime();

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
        html += `<a href="${opcion.link}" target="_blank"">Inscribirse</a>
        </div>`
    }


    })


    document.getElementById("inscripcionesPageOptions").innerHTML = html

}

// Escriba la cantidad de Pascuas
const lemas = 23
let html = ""

for (let i = lemas; i >= 1; i--) {
    if(i == lemas) {
        html += `<div class="carousel-item active">
            <img src="./images/sliderlemas/${i}.jpg" class="d-block w-100" alt="Lema PJ">
        </div>`
    } else {
        html += `
        <div class="carousel-item">
            <img src="./images/sliderlemas/${i}.jpg" class="d-block w-100" alt="...">
        </div>`
    }
}

document.getElementById("sliderLemas").innerHTML = html
document.getElementById("youtube").addEventListener("click", () => {

    document.getElementById("redesBackground").style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('images/Youtube.jpeg')";

    document.getElementById("redesContent").innerHTML = `
    <div class="content container">
        <h3>Mirá nuestros videos en YouTube</h3>

        <iframe width="600" height="337" src="https://www.youtube.com/embed/cKuXQ7Dfp-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <p><a target="_blank" href="https://www.youtube.com/c/PascuaJovenMor%C3%B3n"> Ver
                canal de YouTube </a></p>

    </div>`
})

document.getElementById("spotify").addEventListener("click", () => {

    document.getElementById("redesBackground").style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('images/spotify.jpeg')";

    document.getElementById("redesContent").innerHTML = `
    <div class="content container">
        <h3>Escuchá nuestro último album en Spotify</h3>

        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2NzDXrhOjYD99hHvC1gDjR?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <p><a target="_blank" href="https://open.spotify.com/artist/6YzGHO0uipchoiqNvqODYY?si=tz2T_8vfTeSAEFGr5VsPFw"> Ver
                albums </a></p>

    </div>`
})


document.getElementById("rrss").addEventListener("click", () => {

    document.getElementById("redesBackground").style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('images/RRSS.jpeg')";

    document.getElementById("redesContent").innerHTML = ` 
    <div class="content container">
        <div class="redes">
            <div class="cardRedes">
                <img src="./images/facebook.svg" alt="Facebook icon">
                <a href="https://www.facebook.com/PascuaJovenMoron/" target="_blank" class="btnPrimary">Ir</a>
            </div>
            <div class="cardRedes">
                <img src="./images/twitter.svg" alt="Twitter icon">
                <a href="https://twitter.com/pascuajoven" target="_blank" class="btnPrimary">Ir</a>
            </div>
            <div class="cardRedes">
                <img src="./images/instagram.svg" alt="Instagram icon">
                <a href="https://instagram.com/pascuajoven" target="_blank" class="btnPrimary">Ir</a>
            </div>
        </div>
    </div>`
})
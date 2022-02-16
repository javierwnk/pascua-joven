document.getElementById("youtube").addEventListener("click", () => {

    document.getElementById("redesBackground").style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../images/Youtube.jpeg')";

    document.getElementById("redesContent").innerHTML = `
    <div class="content container">
        <h3>Mirá nuestros videos en YouTube</h3>

        <iframe width="600" height="337" src="https://www.youtube.com/embed/49tfoC0vxJs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <p><a href="https://www.youtube.com/c/PascuaJovenMor%C3%B3n"> Ver
                canal de YouTube </a></p>

    </div>`
})

document.getElementById("spotify").addEventListener("click", () => {

    document.getElementById("redesBackground").style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../images/spotify.jpeg')";

    document.getElementById("redesContent").innerHTML = `
    <div class="content container">
        <h3>Escuchá nuestro último album en Spotify</h3>

        <iframe src="https://open.spotify.com/embed/album/5leT3cB0W1BgBUyDYXQS2F" width="600" height="400"
            frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        <p><a href="https://open.spotify.com/artist/6YzGHO0uipchoiqNvqODYY?si=tz2T_8vfTeSAEFGr5VsPFw"> Ver
                albums </a></p>

    </div>`
})


document.getElementById("rrss").addEventListener("click", () => {

    document.getElementById("redesBackground").style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../images/RRSS.jpeg')";

    document.getElementById("redesContent").innerHTML = ` 
    <div class="content container">
        <div class="redes">
            <div class="cardRedes">
                <img src="./images/facebook.svg" alt="Facebook icon">
                <a href="" class="btnPrimary">Ir</a>
            </div>
            <div class="cardRedes">
                <img src="./images/twitter.svg" alt="Twitter icon">
                <a href="" class="btnPrimary">Ir</a>
            </div>
            <div class="cardRedes">
                <img src="./images/instagram.svg" alt="Instagram icon">
                <a href="" class="btnPrimary">Ir</a>
            </div>
        </div>
    </div>`
})
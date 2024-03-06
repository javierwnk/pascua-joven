<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>¡Gracias!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./js/slide/dist/css/splide.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="./mages/favicon.ico">

</head>

<body>

<?php 
$nya = $_POST['nya'];
$email = $_POST['email'];
$mensaje = $_POST ['message'];

$mimail="contacto@pascuajoven.com.ar";

$cuerpoemail = "Ha recibido una consulta de ".$nya."\r\n"."Email: ".$email."\r\n"."Telefono de contacto: ".$phone."\r\n"."Mensaje: ".$mensaje;
$cuerpoenvio = "Se ha enviado su consulta a Pascua Joven Moron "."\r\n"."Mensaje: ".$mensaje."\r\n"."Le responderemos a la brevedad"."\r\n"."Por favor, no responda este mensaje";
$respuesta ="From: $nya <$email>";
$respuestaenvio ="From: Pascua Joven Moron <contacto@pascuajoven.com.ar>";

mail ($mimail, "Ha recido una nueva consulta", $cuerpoemail, $respuesta);
mail ($email, "Recibimos tu consulta - Pascua Joven Moron", $cuerpoenvio, $respuestaenvio);
?>


    <header>

        <nav class="navbar navbar-dark navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="images/logo.svg" id="logo" alt="Logo Pascua Joven Morón" width="50" height="50">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i style="color: #12878B; font-size: 2rem;" class="bi bi-list"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="nosotros.html">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="donar.html">Donaciones</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="recursos.html">Recursos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="galeria.html">Galería</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="preguntas-frecuentes.html">FAQ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contacto.html">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link inscripcionesHeader" href="inscripciones.html">Inscripciones</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <main>


        <div class="thanks">

            <div class="content">

                <h1>
                    ¡Muchas gracias!
                </h1>
                <p>
                    Hemos recibido tu consulta correctamente. A la brevedad te responderemos por e-mail.
                </p>

            </div>

        </div>

        <div class="sectionPJ21">
            <video class="desktop" autoplay loop muted src="./images/video-lemas-desktop.mp4"></video>
            <video class="mobile" autoplay loop muted src="./images/video-lemas-mobile.mp4"></video>
        </div>

    </main>

    <footer>
        <div class="container socialMedia">
            <p>Seguinos en redes sociales</p>
            <ul>
                <li><a href="https://www.facebook.com/PascuaJovenMoron/" target="_blank"><i class="bi bi-facebook"></i></a></li>
                <li><a href="https://twitter.com/pascuajoven" target="_blank"><i class="bi bi-twitter"></i></a></li>
                <li><a href="https://instagram.com/pascuajoven" target="_blank"><i class="bi bi-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/c/PascuaJovenMor%C3%B3n" target="_blank"><i class="bi bi-youtube"></i></a></li>
                <li><a href="https://open.spotify.com/artist/6YzGHO0uipchoiqNvqODYY?si=4f159480d0d040ed" target="_blank"><i class="bi bi-spotify"></i></a></li>
            </ul>
        </div>

        <ul>
            <li>Contactanos</li>
            <li><a href="contacto.html">Contacto</a></li>
            <li><a href="preguntas-frecuentes.html">Preguntas frecuentes</a></li>
        </ul>

        <ul>
            <li>Explorá</li>
            <li><a href="nosotros.html">Historia de Pascua Joven Morón</a></li>
            <li><a href="recursos.html">Recursos descargables</a></li>
            <li><a href="galeria.html">Galería</a></li>
        </ul>

        <ul>
            <li>Formá parte</li>
            <li><a href="inscripciones.html">Inscripciones 2023</a></li>
            <li><a href="donar.html">Donaciones</a></li>
        </ul>

    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>

</body>

</html>
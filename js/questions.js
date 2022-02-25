let questions = [
    {
        pregunta: "¿Qué es Pascua Joven?",
        respuesta: "Pascua Joven es un retiro espiritual que se realiza para jóvenes, por medio de jóvenes. Es vivir un encuentro con nosotros mismos, la propia vida, con los demás, las realidades que nos rodean, y con Jesús. Es un evento masivo al que han llegado a participar 1500 jóvenes, que incluye charlas, grupos para compartir, actividades, representaciones, dinámicas y demás."
    },
    {
        pregunta: "¿Cuándo y dónde se realiza? ¿A qué hora? ¿Cómo se llega hasta ahí?",
        respuesta: "Se realiza el fin de semana previo a la Semana Santa en el colegio Emaús de Palomar. Suele comenzar a las 14 hs del viernes y terminar alrededor de las 18-19 hs del domingo. Hasta Emaús los chicos van con sus colegios, parroquias o acompañantes. En la sección “contacto” de nuestra página podés ver la dirección del Emaús en el mapa."
    },
    {
        pregunta: "¿Cómo se puede participar? ¿Hay que inscribirse?",
        respuesta: "Sí, hay que inscribirse. Se puede ser parte como: participante, coordinador de grupo, servidor o acompañante. Según tu rol, vas a llenar un formulario con datos personales y una breve ficha médica que tendrás que enviar (si sos menor de edad debe ir firmada por tu madre, padre o tutor) y junto con eso, tendrás que abonar el valor individual del retiro en efectivo o por Mercado Pago. Las inscripciones suelen abrir un mes y medio previo al retiro, las comunicamos por nuestras redes sociales y yendo a difundir a los colegios y parroquias."
    },
    {
        pregunta: "¿Quiénes pueden ser participantes?",
        respuesta: "Pueden ser participantes aquellos jóvenes que estén cursando sus últimos dos años de colegio: 5to y 6to año de secundaria. "
    },
    {
        pregunta: "¿Quiénes pueden ser coordinadores de grupo?",
        respuesta: "Pueden ser coordinadores de grupo aquellos jóvenes ya egresados que tengan entre 18 y 21 años. Los coordinadores de grupo tienen reuniones de preparación y oración las semanas previas a Pascua Joven, donde profundizan el contenido para estar listos para todo lo que se vivirá esos días y así poder acompañar de la mejor manera a los participantes. Para ser coordinador podés seguirnos en nuestras redes para enterarte dónde y cuándo te esperan para sumarte al equipo."
    },
    {
        pregunta: "¿Quiénes pueden ser servidores?",
        respuesta: "Pueden ser servidores aquellos jóvenes ya egresados que tengan más de 21 años. Los servidores comienzan a prepararse semanas antes a Pascua Joven, se juntan a rezar y a preparar actividades, diagramar momentos y organizarse para ese fin de semana. Para ser servidor podés seguirnos en nuestras redes para enterarte dónde y cuándo te esperan para sumarte al equipo."
    },
    {
        pregunta: "¿Quiénes pueden ser acompañantes?",
        respuesta: "Serán acompañantes los adultos responsables designados por cada colegio y parroquia para acompañar al grupo de jóvenes correspondiente. Suelen ser catequistas, profesores o preceptores, quienes pasan todo el fin de semana en Emaús viviendo la Pascua junto a los chicos."
    },
    {
        pregunta: "¿Hay que llevar algo?",
        respuesta: "Sí, hay que llevar: bolsa de dormir o colchón inflable, ropa cómoda, elementos de higiene personal, almohadón, cuaderno, cartuchera y comida a la canasta para la primera noche del viernes (todas las demás comidas están cubiertas)."
    },
    {
        pregunta: "¿Puedo irme antes o llegar más tarde?",
        respuesta: "La idea es que todos podamos vivir el fin de semana completo ya que cada momento está planeado siguiendo un hilo conductor, entonces, ¡es mejor no perderse nada! Pero las situaciones particulares se pueden plantear previamente con los acompañantes y organizadores para que sean diagramadas."
    },
    {
        pregunta: "Soy celíaco, veggie, hipertenso, etc… ¿Hay comida para mí?",
        respuesta: "¡Sí! Esa información la completás al llenar la ficha de inscripción, para que nosotros sepamos y lo tengamos en cuenta a la hora de diagramar el servicio de comida."
    },
    {
        pregunta: "¿Hay emergencias?",
        respuesta: "Sí, Pascua Joven dispone de una ambulancia y un médico en Emaús, durante los tres días completos del encuentro."
    },
    {
        pregunta: "¿De qué otras formas puedo participar de Pascua Joven?",
        respuesta: "Hace unos años, Pascua Joven comenzó a transmitir en vivo por streaming ciertos momentos, como charlas y algunas representaciones, vía Facebook y YouTube. Muchas familias o personas que no tienen la posibilidad de venir al retiro, nos siguen por ese medio. Además, a partir de la pandemia, nos adaptamos a la virtualidad y abrimos la posibilidad de participar del retiro íntegramente de forma virtual."
    },
    {
        pregunta: "¿Cómo puedo ser participante virtual?",
        respuesta: "Pueden participar de Pascua Joven Virtual aquellos jóvenes que estén en el interior del país y en otros países. Deben inscribirse como participantes virtuales y formarán parte de grupos de forma online para compartir juntos los contenidos del retiro. En la sección inscripciones vas a encontrar más información."
    },
    {
        pregunta: "Quiero hacer una donación, ¿cómo hago?",
        respuesta: "Para donar pueden ingresar a nuestra sección de donaciones: https://pascuajoven.com.ar/donar.html, donde encontrarán toda la información para enterarse qué necesitamos y cómo pueden ayudarnos."
    },
    {
        pregunta: "Quiero comprar algún producto oficial de Pascua, ¿cómo hago?",
        respuesta: "Los productos oficiales de Pascua Joven se venden durante el retiro en Emaús, podés comprar ahí o también podés diagramar tu compra previamente y luego retirarla ese fin de semana. Cualquier consulta en relación a este tema podés mandarnos un email o comunicarte por mensaje en nuestras redes sociales."
    }
]

let html = ""

questions.forEach((question, index) => {
    html += `
    <div class="accordion-item">
    <h2 class="accordion-header" id="heading${index}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
        ${question.pregunta}
      </button>
    </h2>
    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        ${question.respuesta}
      </div>
    </div>
  </div>
    `
})

document.getElementById("accordionExample").innerHTML = html
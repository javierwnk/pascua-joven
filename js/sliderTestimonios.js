let testimonios = [
    {
        rol: "Participante",
        mensaje: `Pascua Joven no fue un lugar más, fue un lugar donde pude ser como soy, pude afianzar lazos con mis amigos y sentirme escuchado, sentí cómo las demás personas transmitían su buena onda siempre para que el fin de semana pueda ser único y sentirme lo más en casa posible. Lo que a mí me dejó es saber que no estoy solo, que Dios y todos mis seres queridos van a estar para sostenerme y ayudarme a lograr todo lo que me proponga, porque lo más importante es el amor por sobre todo.`,
        nombre: "Iván Tielas"
    },
    {
        rol: "Coordinador de grupo",
        mensaje: `Para mí vivir la Pascua Joven desde el lugar de coordi fue encontrarme con chicos con una capacidad de amar enorme que lo único que querían desde su lugar era vivir su vida con amor.`,
        nombre: "Agus Fuente"
    },
    {
        rol: "Servidor",
        mensaje: `Para mí ser servidor es entrega por amor, entrega por el otro, dar servicio a los demás y sentirse pleno. Es sentir a Jesús en las pequeñas cosas, y darlo también. Además, creo que es el rol en el que puedo reconocer a María y sentirme identificada con ella. Porque, a través del silencio, a veces pasando desapercibidos, llevamos alegría a los demás. Siento que Jesús y María me mostraron cómo puedo dar amor y sentirme amada desde otro lado, y creo que me sorprendieron mostrándome lo que soy capaz de entregar por Amor.`,
        nombre: "Paula Mitre"
    },
    {
        rol: "Equipo",
        mensaje: `Hace 11 años recibí una invitación que realmente me iba a cambiar la vida. Los primeros dos años de ir como participante a Pascua Joven me regalaron la experiencia de encontrarme con muchos otros jóvenes que vivían mis mismas realidades y que querían compartir la fe. El tiempo fue pasando… Hoy, ya hace 7 años estoy en el equipo y Pascua Joven me sigue renovando la certeza de que Jesús nos amó tanto que dió su vida por nosotros y que la muerte nunca tiene la última palabra en la vida de nadie; que este retiro realmente es un milagro y que sigo apostando a ponerme al servicio para que otros jóvenes también puedan vivir esta experiencia.`,
        nombre: "Flor Rodríguez"
    },
    {
        rol: "Acompañante",
        mensaje: `Es una bendición la posibilidad de acompañar con nuestra presencia y oración, el paso de Dios por la vida de los chicos en Pascua Joven. Poder vivir también un fin de semana de mucha paz, compartiendo la fe como Diócesis.`,
        nombre: "Ignacio Rodríguez Andrade"
    },
    {
        rol: "Streaming",
        mensaje: `Tuve la dicha de compartir y colaborar personalmente 15 años en PJ. Cambié de nivel pero seguí viniendo en algunos momentos… Y fue justo cuando comenzaron con el streaming. Desde ese momento hice que cientos de personas sepan lo que es "vivir" Pascua Joven… Docentes, amigos, personas de España, Usa, Colombia. Es vivir la PJ desde adentro en cada momento. Recuerdo que el primer año que hubo streaming estaba muy amargada porque estaba en cama y no me resignaba a no participar, y finalmente pude! De otra forma, pero llegué por este medio a todos mis contactos de face que vivieron, rezaron, lloraron y bailaron junto a cada jóven. El secreto… El streaming que nos une ya, al mundo. Rezo por ustedes que llenan mi alma de esperanza y renuevan mi fe!`,
        nombre: "Cristina Ana Castiñeiras"
    },
    {
        rol: "Sacerdote",
        mensaje: `¿Qué es para mi estar en Pascua Joven? Con total humildad... Pienso el origen, el camino y la meta de todo. Origen: En PJ fue naciendo mi vocación de estar con Jesús y hacer que los demás estén más cerca de Él. Camino: PJ es el lugar donde mi vida se transforma, donde trabajo mis virtudes y mis pecados, mis dudas y mis certezas; y donde fundamentalmente crecen mis sueños. Meta: En PJ tengo por un momentito un chispazo de que todo terminará bien y que al final está #Dios #amor. Es como una pequeña maderita de la cual me agarro en el mar de incertezas que es el mundo, y me ayuda a vivir y buscar que los demás vivan también. Simple y totalmente eso... Al menos para mí.`,
        nombre: "P. Rodrigo Durini"
    },
]

html = ""

testimonios.forEach(opcion => {
    html += `
    <li class="splide__slide">
        <div class="splide__text">
            <p class="rol">${opcion.rol}</p>
            <p>${opcion.mensaje}</p>
            <p class="name">- ${opcion.nombre}</p>
        </div>
    </li>`
})

document.getElementById("testimoniosSlider").innerHTML = html
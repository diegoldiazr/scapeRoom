const stations = [
    {
        title: "Estación 1: El Custodio",
        location: "Palacio de Santa Cruz (Plaza de la Provincia)",
        coords: "40.4144,-3.7052",
        address: "Plaza de la Provincia, 1 (Palacio de Santa Cruz)",
        img: "palacio_santa_cruz_madrid_1773341559525.png",
        narrative: "La noche antes de su ejecución en 1615, un hombre encadenado en la Cárcel de Corte entregó un trozo de cuero a su carcelero. 'Lo que Cervantes no se atrevió a imprimir, yo lo he vivido', susurró. Aquel hombre no era un criminal común, sino el último copista del manuscrito prohibido. Sus guardianes, grabados en la piedra del Palacio, aún custodian el acceso al primer secreto. Si lográis contar a los testigos mudos de aquel suplicio, podréis romper el primer sello de la Inquisición.",
        question: "¿Cuántas figuras humanas (presos) aparecen representadas en el relieve?",
        answer: "2",
        successMsg: "¡Exacto! Dos figuras humanas. Eran los presos que esperaban juicio. Antes esto era una cárcel, y vuestro viaje no ha hecho más que empezar.",
        hints: [
            "No cuentes ángeles ni querubines. Busca figuras humanas que parecen estar sufriendo o atrapadas.",
            "Fíjate en la base del relieve, justo a los pies de la figura central (San Miguel). Hay un hombre a cada lado."
        ],
        curiosity: `
            <h3>📜 Secretos de la Cárcel de Corte</h3>
            <p><strong>1. "Dormir bajo el ángel"</strong><br>En el siglo XVII, los madrileños decían esto para referirse a estar en el calabozo, por la estatua de San Miguel en la fachada.</p>
            <p><strong>2. Una cárcel VIP</strong><br>Aquí estuvo <strong>Lope de Vega</strong> por escribir libelos contra una amante, y el famoso bandolero <strong>Luis Candelas</strong>.</p>
            <p><strong>3. El verdugo vivía al lado</strong><br>El ejecutor vivía en la calle contigua para no llegar tarde a su "trabajo".</p>
            <p><strong>4. Pagado con vino</strong><br>El edificio se financió con un impuesto especial sobre cada jarra de vino consumida en Madrid.</p>
            <p><strong>5. ¿Fantasmas?</strong><br>Leyendas de ruidos de cadenas en los sótanos que hoy son oficinas del Ministerio.</p>
        `
    },
    {
        title: "Estación 2: El Suelo de Oro",
        location: "Calle de las Huertas (Quevedo)",
        coords: "40.4141,-3.6991",
        address: "Calle de las Huertas (Frente al nº 16)",
        img: "calle_huertas_letras_madrid_1773341860529.png",
        narrative: "Habéis escapado de la sombra de la cárcel, pero la Hermandad del Acero os pisa los talones. Francisco de Quevedo, maestro de las pullas y espía de la Corona, sabía que la mejor forma de esconder algo es ponerlo a la vista de todos. En las calles de Madrid, el oro no está en los cofres, sino bajo vuestros pies. Buscad su proclama sobre el poder que mueve el mundo. Si encontráis la palabra que él consideraba el verdadero motor de la traición, tendréis la llave de la siguiente calle.",
        question: "¿Cuál es la última palabra de esa famosa frase grabada en el suelo?",
        answer: "dinero",
        successMsg: "¡Correcto! 'Poderoso caballero es don Dinero'. Quevedo sabía bien cómo se movía el mundo. Sigamos el rastro del oro...",
        hints: [
            "Busca el texto grabado en letras doradas en el suelo, no en las placas de las paredes.",
            "La cita está dividida en líneas cortas. Cuenta: 1 (Poderoso), 2 (caballero), 3 (es don), 4 (Dinero)."
        ],
        curiosity: `
            <h3>📜 Salseo en el Barrio de las Letras</h3>
            <p><strong>1. El suelo que "trollea"</strong><br>Las letras doradas son de Quevedo, el rey del "diss track" (tiraderas) del Siglo de Oro. Se insultaba con Góngora como si fueran raperos en una sesión de Bizarrap.</p>
            <p><strong>2. Quevedo: El "Gamberro"</strong><br>Experto espadachín, cojo y con gafas ("quevedos"), pero con una lengua afilada. Tuvo que huir de Madrid tras matar a un hombre en un duelo por defender a una mujer.</p>
            <p><strong>3. El mayor "zasca"</strong><br>Quevedo compró la casa donde vivía su archienemigo Góngora solo para poder desahuciarlo y echarlo a la calle.</p>
            <p><strong>4. El "trolleo" del Ayuntamiento</strong><br>La calle "Cervantes" es donde vivía Lope, y la calle "Lope de Vega" es donde vivió Cervantes. ¡Les intercambiaron las calles!</p>
        `
    },
    {
        title: "Estación 3: La Casa del Enemigo",
        location: "Calle de Cervantes, 11 (Casa Lope de Vega)",
        coords: "40.4143,-3.6975",
        address: "Calle de Cervantes, 11 (Casa Museo Lope de Vega)",
        img: "casa_lope_de_vega_madrid_1773341937858.png",
        narrative: "Lope de Vega, el 'Fénix de los Ingenios', era un hombre de pasiones y secretos. Se dice que en esta casa escondió el manuscrito de su rival, Cervantes, para protegerlo de las llamas inquisitoriales. Pero Lope era astuto: marcó su propiedad con una fecha de sangre y tinta. Esa fecha no es solo un año, es el código de acceso a la red de túneles que conectaba las casas de los poetas. Mirad sobre el dintel, donde el granito se grabó por orden del Fénix.",
        question: "¿Cuál es el AÑO que aparece tallado en piedra al final de la inscripción sobre la puerta?",
        answer: "1610",
        successMsg: "¡Exacto! 1610, el año en que Lope compró esta casa. El tiempo corre, el manuscrito está cerca.",
        hints: [
            "La inscripción está escrita en latín antiguo sobre la puerta de madera.",
            "El número está al final de todo el texto, a la derecha. Son cuatro cifras."
        ],
        curiosity: `
            <h3>📜 La Casa del "Fénix"</h3>
            <p><strong>1. El jardín de los secretos</strong><br>Lope era cura pero no dejó de tener líos amorosos. En este jardín pasaba tiempo con su gran amor, Marta de Nevares. Un rebelde con sotana.</p>
            <p><strong>2. Escribir para sobrevivir</strong><br>Era el "influencer" total: escribía una comedia entera en solo 24 horas. ¡Escribió más de 1.500 obras!</p>
            <p><strong>3. "Es de Lope"</strong><br>Cuando algo era increíble, la gente decía "es de Lope". Fue la primera marca personal potente de España.</p>
            <p><strong>4. ¿Huesos perdidos?</strong><br>Murió en la pobreza y, como no se pagó su nicho, sus restos terminaron en una fosa común. El hombre que lo fue todo terminó "desaparecido".</p>
        `
    },
    {
        title: "Estación 4: El Guardián de Bronce",
        location: "Plaza de las Cortes (Estatua de Cervantes)",
        coords: "40.4161,-3.6963",
        address: "Plaza de las Cortes (Estatua de Cervantes)",
        img: "estatua_cervantes_madrid_1773342370580.png",
        narrative: "Casi lo tenéis. Frente al Congreso, la figura de Miguel de Cervantes se alza no como un escritor, sino como un soldado. Su mirada apunta directamente hacia donde el tesoro fue enterrado. Pero cuidado: los espías de la Hermandad del Acero vigilan desde los balcones cercanos. Debéis actuar como si fuerais simples curiosos. Observad los relieves de su pedestal; allí, entre los molinos de la Mancha, se esconde la cifra exacta de la victoria. No miréis al gigante, mirad a sus brazos de madera.",
        question: "En el relieve donde aparece Don Quijote montado a caballo, ¿cuántas ASPAS tiene el molino de viento que se ve al fondo?",
        answer: "4",
        successMsg: "¡Bien visto! Cuatro aspas para cuatro siglos de misterio. Solo queda un paso más.",
        hints: [
            "Mira el relieve de bronce que hay en el lateral del pedestal de la estatua (el que mira hacia el Congreso).",
            "Don Quijote está cargando contra el molino. Cuenta cuántas 'palas' o brazos tiene ese molino."
        ],
        curiosity: `
            <h3>📜 Secretos de Cervantes</h3>
            <p><strong>1. La Cápsula del Tiempo</strong><br>En 2009 encontraron un cofre de plomo bajo la estatua. Era una "cápsula del tiempo" de 1834 con monedas y ediciones del Quijote.</p>
            <p><strong>2. Un "Badass" real</strong><br>Fue esclavo en Argel 5 años e intentó escapar 4 veces, asumiendo siempre toda la culpa para salvar a sus amigos.</p>
            <p><strong>3. El "Beef" de los Leones</strong><br>Los leones del Congreso están hechos con bronce de cañones enemigos reciclados. ¡Uno es león y la otra leona!</p>
            <p><strong>4. Tumba misteriosa</strong><br>Sus huesos fueron encontrados casi 400 años después de su muerte, en 2015, usando georradares en un convento cercano.</p>
        `
    },
    {
        title: "Estación 5: El Descubrimiento Final",
        location: "Plaza de Santa Ana (Calderón de la Barca)",
        coords: "40.4147,-3.7008",
        address: "Plaza de Santa Ana (Estatua de Calderón de la Barca)",
        img: "estatua_calderon_madrid_1773342386443.png",
        narrative: "¡Rápido! El contacto de la Sociedad del Lirio os espera en las sombras de la Plaza de Santa Ana. Pero hay un problema: el contacto ha sido interceptado. Solo ha dejado una señal bajo la estatua de Calderón de la Barca. La vida es sueño, pero vuestro éxito depende de una realidad tangible. Buscad la escena del 'Alcalde de Zalamea'. El número de personas allí reunidas es la combinación final para abrir el maletín digital que contiene el manuscrito original. Introducidlo y desapareced entre la multitud.",
        question: "¿Cuántos personajes (personas) aparecen representadas en total en esa escena esculpida?",
        answer: "5",
        successMsg: "¡MISIÓN CUMPLIDA! Habéis salvado el manuscrito. La Sociedad del Lirio os agradece vuestro servicio.",
        hints: [
            "Los relieves están en la parte baja del monumento, rodeando la base de la estatua de Calderón.",
            "Busca el relieve que tiene el título 'El Alcalde de Zalamea' grabado debajo. Cuenta todas las personas."
        ],
        curiosity: `
            <h3>📜 Hollywood en el Siglo XVII</h3>
            <p><strong>1. El Hooligan Calderón</strong><br>Asaltó un convento por la fuerza con sus amigos para atrapar a un actor que había herido a su hermano.</p>
            <p><strong>2. Monumento con "chuleta"</strong><br>Los relieves de la base sirven como "resumen de Wikipedia" de sus obras más famosas.</p>
            <p><strong>3. Plaza de los "Zacas"</strong><br>El público tiraba fruta podrida y berenjenas a los actores si la obra no les gustaba. ¡Era puro salseo en vivo!</p>
            <p><strong>4. Pepe Botella</strong><br>Esta plaza existe porque el hermano de Napoleón mandó derribar un convento. ¡Al final nos dejó un sitio genial para el terraceo!</p>
        `
    }
];

const Game = {
    currentStation: 0,
    hintCount: 0,
    timerInterval: null,
    secondsRemaining: 90 * 60,
    startTime: null,

    start: function() {
        this.startTime = Date.now();
        this.showScreen('screen-game');
        this.loadStation();
        this.startTimer();
    },

    startTimer: function() {
        const timerDisplay = document.getElementById('countdown-timer');
        this.timerInterval = setInterval(() => {
            this.secondsRemaining--;
            
            const isNegative = this.secondsRemaining < 0;
            const absSeconds = Math.abs(this.secondsRemaining);
            const minutes = Math.floor(absSeconds / 60);
            const seconds = absSeconds % 60;
            
            const timeStr = `${isNegative ? '-' : ''}${minutes}:${seconds.toString().padStart(2, '0')}`;
            timerDisplay.textContent = timeStr;
            
            if (isNegative) {
                timerDisplay.style.color = "#ff6b6b";
            }
        }, 1000);
    },

    applyPenalty: function() {
        this.secondsRemaining -= 300; // 5 minutes
        this.updateTimerDisplay(); // Force update immediate
        
        const notice = document.getElementById('penalty-notice');
        notice.style.display = 'block';
        notice.style.animation = 'fadeOutUp 1.5s forwards';
        
        setTimeout(() => {
            notice.style.display = 'none';
            notice.style.animation = '';
        }, 1500);
    },

    updateTimerDisplay: function() {
        const timerDisplay = document.getElementById('countdown-timer');
        const isNegative = this.secondsRemaining < 0;
        const absSeconds = Math.abs(this.secondsRemaining);
        const minutes = Math.floor(absSeconds / 60);
        const seconds = absSeconds % 60;
        timerDisplay.textContent = `${isNegative ? '-' : ''}${minutes}:${seconds.toString().padStart(2, '0')}`;
        if (isNegative) timerDisplay.style.color = "#ff6b6b";
    },

    formatTimeElapsed: function() {
        const totalPossibleSeconds = 90 * 60;
        const totalElapsedSeconds = totalPossibleSeconds - this.secondsRemaining;
        const minutes = Math.floor(totalElapsedSeconds / 60);
        const seconds = totalElapsedSeconds % 60;
        return `${minutes} minutos y ${seconds} segundos`;
    },

    loadStation: function() {
        const s = stations[this.currentStation];
        document.getElementById('station-title').textContent = s.title;
        document.getElementById('station-map').href = `https://www.google.com/maps/search/?api=1&query=${s.coords}`;
        document.getElementById('station-address').textContent = s.address;
        document.getElementById('station-img').src = s.img;
        document.getElementById('station-narrative').innerHTML = s.narrative.replace(/\n\n/g, '<br><br>');
        document.getElementById('station-question').textContent = s.question;
        document.getElementById('user-answer').value = '';
        document.getElementById('feedback').textContent = '';
        
        // Reset hints
        this.hintCount = 0;
        document.getElementById('hint-1').style.display = 'none';
        document.getElementById('hint-2').style.display = 'none';
        document.getElementById('hint-1').textContent = `Pista 1: ${s.hints[0]}`;
        document.getElementById('hint-2').textContent = `Pista 2: ${s.hints[1]}`;

        // Update Progress
        const percent = ((this.currentStation) / stations.length) * 100;
        document.getElementById('progress-bar').style.width = `${percent}%`;
    },

    checkAnswer: function() {
        const userInput = document.getElementById('user-answer').value.trim().toLowerCase();
        const correctAnswer = stations[this.currentStation].answer.toLowerCase();
        const feedback = document.getElementById('feedback');

        if (userInput === correctAnswer) {
            this.showSuccess();
        } else {
            this.applyPenalty();
            feedback.textContent = "❌ Clave incorrecta. Penalización: -5 min.";
            feedback.className = "error";
            // Shake effect
            document.querySelector('#screen-game .card').classList.add('shake');
            setTimeout(() => document.querySelector('#screen-game .card').classList.remove('shake'), 500);
        }
    },

    showHint: function() {
        if (this.hintCount >= 2) return;
        this.hintCount++;
        this.applyPenalty();
        if (this.hintCount === 1) {
            document.getElementById('hint-1').style.display = 'block';
        } else if (this.hintCount >= 2) {
            document.getElementById('hint-2').style.display = 'block';
        }
    },

    showCuriosity: function() {
        const s = stations[this.currentStation];
        const modal = document.getElementById('curiosity-modal');
        const content = document.getElementById('curiosity-content');
        content.innerHTML = s.curiosity;
        modal.style.display = 'flex';
    },

    closeCuriosity: function() {
        document.getElementById('curiosity-modal').style.display = 'none';
    },

    showSuccess: function() {
        document.getElementById('success-msg').textContent = stations[this.currentStation].successMsg;
        this.showScreen('screen-success');
        
        // Update bar to show this completion
        const percent = ((this.currentStation + 1) / stations.length) * 100;
        document.getElementById('progress-bar').style.width = `${percent}%`;
    },

    nextStation: function() {
        this.currentStation++;
        if (this.currentStation < stations.length) {
            this.showScreen('screen-game');
            this.loadStation();
        } else {
            this.finishGame();
        }
    },

    finishGame: function() {
        clearInterval(this.timerInterval);
        const timeTaken = this.formatTimeElapsed();
        
        const finalMsg = `
            <p><strong>¡EL CÓDIGO HA SIDO ACEPTADO!</strong></p>
            <p style="color: var(--primary-color); font-weight: bold; font-size: 1.1rem; border: 1px solid var(--primary-color); padding: 10px; border-radius: 8px; text-align: center; margin: 15px 0;">
                Tiempo total de la misión: ${timeTaken}
            </p>
            <p>De repente, vuestros teléfonos vibran con una notificación encriptada. El último número ha desbloqueado la ubicación del "Quijote Perdido".</p>
            <p>Mientras miráis la estatua de Calderón de la Barca, os dais cuenta de que no sois simples turistas. Formáis parte de una cadena de guardianes que se remonta a siglos atrás. Habéis descifrado lo que miles de personas pasan de largo cada día: la historia viva que Madrid susurra a quien sabe escuchar.</p>
            <p style="color: var(--primary-color); font-weight: bold;">EL MANUSCRITO ESTÁ A SALVO.</p>
            <p>Gracias a vuestra agudeza, los agentes de la Sociedad del Lirio ya han recuperado el legajo antes de que la Hermandad del Acero cruzara la Plaza. Habéis evitado que el mayor tesoro literario de la humanidad se convierta en el capricho de un multimillonario.</p>
            <p><strong>Vuestra recompensa:</strong> La Sociedad os ha concedido el honor de la "Libertad de la Villa". Mirad a vuestro alrededor. Estas calles ahora os pertenecen un poco más. Las risas en las terrazas de Santa Ana, el tintineo de las copas en la calle de la Victoria y el sol de marzo sobre los tejados de Madrid son vuestro banquete de victoria.</p>
            <p><strong>ORDEN FINAL:</strong> Guardad vuestros dispositivos. Buscad la taberna más cercana. Brindad por Cervantes, por Lope y, sobre todo, por vosotros.</p>
            <p style="text-align: center; font-family: var(--font-heading); font-size: 1.2rem; margin-top: 20px;">Misión Cumplida. Bienvenidos a la Historia.</p>
        `;
        document.getElementById('final-text-container').innerHTML = finalMsg;
        this.showScreen('screen-final');
    },

    showScreen: function(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
        window.scrollTo(0,0);
    }
};

// Add shake animation style dynamically
const style = document.createElement('style');
style.innerHTML = `
    .shake { animation: shake 0.5s; }
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    @keyframes fadeOutUp {
        0% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-40px); }
    }
`;
document.head.appendChild(style);

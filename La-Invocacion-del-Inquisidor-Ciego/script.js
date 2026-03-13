const stations = [
    {
        title: "Estación 1: El Quemadero de la Cruz Verde",
        location: "La Plaza de la Cruz Verde",
        coords: "40.4132,-3.7119",
        address: "Plaza de la Cruz Verde (Fuente)",
        img: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=1000&auto=format&fit=crop",
        narrative: "Habéis sido convocados por una carta anónima que huele a azufre. Aquí, donde la Inquisición ejecutaba sus sentencias, el aire aún pesa. Se dice que un Inquisidor ciego fue enterrado vivo bajo estos adoquines por practicar artes oscuras. Para aplacar su espíritu, debéis identificar el año de su mayor 'espectáculo'.",
        question: "¿Cuál es el año del último Auto de Fe mencionado en la placa conmemorativa?",
        answer: "1680",
        successMsg: "El suelo vibra bajo vuestros pies. El Inquisidor os ha escuchado. Corred hacia la calle Mayor antes de que las sombras os alcancen.",
        hints: [
            "El centro de la plaza tiene una fuente. El número que buscas está en la placa que explica por qué se llama así.",
            "Busca el año en que se realizó el último gran Auto de Fe en esta zona. Es un año de cuatro dígitos."
        ],
        curiosity: `
            <h3>📜 Secretos de la Cruz Verde</h3>
            <p><strong>1. El color de la muerte</strong><br>Se llama "Cruz Verde" por el color de la cruz de madera que portaba la hermandad que asistía a los reos antes de morir.</p>
            <p><strong>2. Ejecuciones públicas</strong><br>Esta plaza fue uno de los principales "quemaderos" de Madrid, donde la Inquisición cumplía sus sentencias de muerte.</p>
            <p><strong>3. Leyendas de azufre</strong><br>La gente evitaba pasar por aquí de noche, creyendo que las almas de los condenados aún vagaban entre las llamas invisibles.</p>
        `
    },
    {
        title: "Estación 2: El Palacio de las Sombras",
        location: "El Palacio de Cañete (C. Mayor)",
        coords: "40.4150,-3.7111",
        address: "Calle Mayor, 69 (Palacio de Cañete)",
        img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
        narrative: "En este palacio ocurrió un crimen atroz: el asesinato del Marqués de Cañete. Dicen que su fantasma aún recorre los balcones buscando justicia. El Inquisidor ciego guardaba aquí el grimorio de las almas perdidas.",
        question: "¿Cuántas bestias rampantes (leones) protegen el linaje del Marqués en el escudo central?",
        answer: "2",
        successMsg: "Un susurro frío os hiela la nuca: 'Seguid el rastro de incienso y sangre hacia la iglesia donde los muertos no descansan'.",
        hints: [
            "Fíjate en el escudo de armas sobre la puerta principal del palacio.",
            "Cuenta los leones que custodian el blasón central. Son figuras de piedra."
        ],
        curiosity: `
            <h3>📜 Crímenes del Siglo de Oro</h3>
            <p><strong>1. El asesinato del Marqués</strong><br>Fue uno de los mayores escándalos de la época. El Marqués de Cañete fue asesinado en su propia casa y el caso conmocionó a toda la Villa.</p>
            <p><strong>2. Pasadizos ocultos</strong><br>Se rumorea que el palacio tiene túneles que conectan directamente con otras casas nobles, usados para escapar de la Inquisición o encuentros secretos.</p>
            <p><strong>3. El fantasma del balcón</strong><br>Muchos transeúntes aseguran haber visto una figura vestida de negro asomada a los balcones altos cuando la calle Mayor está desierta.</p>
        `
    },
    {
        title: "Estación 3: El Decapitado de San Ginés",
        location: "Iglesia de San Ginés",
        coords: "40.4168,-3.7067",
        address: "Calle del Arenal, 13 (Iglesia de San Ginés)",
        img: "https://images.unsplash.com/photo-1543733333-8ced014c000c?q=80&w=1000&auto=format&fit=crop",
        narrative: "Una de las iglesias más antiguas y tenebrosas. Cuenta la leyenda que un hombre fue decapitado aquí por unos ladrones y su sombra volvió para tocar las campanas. El Inquisidor necesita que contéis las entradas al inframundo.",
        question: "Contad las puertas de madera de esta fachada y restadle las estatuas de santos en ese paño específico. ¿Cuál es el resultado?",
        answer: "3",
        successMsg: "Las campanas no suenan, pero vuestro corazón late más rápido. El círculo se está cerrando en la plaza donde el poder se hacía ley.",
        hints: [
            "Observad la fachada de ladrillo y piedra que da a la calle Arenal. Cuenta solo las puertas principales.",
            "Resta el número de estatuas de santos que vigilan desde los nichos en ese mismo tramo de pared (pista: fíjate bien si hay alguna)."
        ],
        curiosity: `
            <h3>📜 Misterios Sagrados</h3>
            <p><strong>1. El hombre sin cabeza</strong><br>La leyenda dice que un hombre decapitado por ladrones volvió a la iglesia para señalar a sus asesinos tocando las campanas.</p>
            <p><strong>2. El Cocodrilo de San Ginés</strong><br>En el interior se conserva un caimán disecado traído de América. En el siglo XVII, verlo causaba auténtico terror a los fieles.</p>
            <p><strong>3. Refugio de pecadores</strong><br>San Ginés ha sido testigo de incendios, robos y milagros, siendo un punto clave en la historia negra de Madrid.</p>
        `
    },
    {
        title: "Estación 4: El Juicio de Álvaro de Bazán",
        location: "Plaza de la Villa",
        coords: "40.4154,-3.7104",
        address: "Plaza de la Villa, 5 (Estatua de Álvaro de Bazán)",
        img: "https://images.unsplash.com/photo-1552674605-1a34bc330516?q=80&w=1000&auto=format&fit=crop",
        narrative: "Estamos en el corazón del poder civil antiguo. Aquí se decidía quién vivía y quién moría. El Inquisidor os observa desde la estatua del gran almirante.",
        question: "Restad el año de nacimiento del año de muerte de Álvaro de Bazán (según el pedestal). ¿Cuál es la cifra?",
        answer: "62",
        successMsg: "Habéis demostrado sabiduría. Solo queda un paso para desterrar al Inquisidor o uniros a él para siempre. Dirigíos al gran rectángulo de piedra.",
        hints: [
            "Analizad el pedestal de la estatua de Don Álvaro de Bazán. Busca las fechas grabadas.",
            "La operación es: Año de Muerte (1588) - Año de Nacimiento (1526)."
        ],
        curiosity: `
            <h3>📜 El Corazón de Madrid</h3>
            <p><strong>1. Casa de los Lujanes</strong><br>El edificio con torre de la plaza es uno de los más antiguos de Madrid (siglo XV). Dicen que allí estuvo prisionero el rey Francisco I de Francia.</p>
            <p><strong>2. El Almirante invicto</strong><br>Álvaro de Bazán murió justo antes de que partiera la Gran Armada (la Armada Invencible). Muchos dicen que si él hubiera ido, la historia habría sido otra.</p>
            <p><strong>3. Justicia Civil</strong><br>Mientras la Inquisición juzgaba almas, en esta plaza se juzgaban los delitos contra la Villa de Madrid.</p>
        `
    },
    {
        title: "Estación 5: El Gran Auto de Fe",
        location: "Plaza Mayor (El Final)",
        coords: "40.4150,-3.7075",
        address: "Plaza Mayor (Arco de Cuchilleros)",
        img: "https://images.unsplash.com/photo-1516108317508-6788f6a160e6?q=80&w=1000&auto=format&fit=crop",
        narrative: "Habéis llegado al epicentro de los Autos de Fe. Aquí el Inquisidor Ciego espera su liberación. Solo nombrando al arquitecto de las cenizas podréis sellar el portal.",
        question: "¿Quién fue el arquitecto que reconstruyó la plaza tras el incendio de 1790? (Escribe Nombre y Apellido)",
        answer: "Juan de Villanueva",
        successMsg: "¡LO HABÉIS LOGRADO! El espíritu del Inquisidor ha sido sellado. La ciudad vuelve a ser segura... por ahora.",
        hints: [
            "Busca la placa informativa en el Arco de Cuchilleros que habla de los incendios.",
            "El apellido empieza por V y es el mismo arquitecto del Museo del Prado."
        ],
        curiosity: `
            <h3>📜 La Plaza de las Llamas</h3>
            <p><strong>1. El foso del miedo</strong><br>El Arco de Cuchilleros tiene tantas escaleras porque aprovecha el foso de la antigua muralla medieval de Madrid.</p>
            <p><strong>2. Tres grandes incendios</strong><br>La Plaza Mayor ha ardido tres veces. La forma que ves hoy es el resultado de la reconstrucción final de finales del XVIII.</p>
            <p><strong>3. El balcón de la Inquisición</strong><br>Desde los balcones de la Casa de la Panadería, los reyes y el Santo Oficio presidían los macabros Autos de Fe que llenaban la plaza.</p>
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
        this.updateTimerDisplay();
        
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
        document.getElementById('station-location').textContent = s.location;
        document.getElementById('station-map').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.location + " Madrid")}`;
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
        document.getElementById('hint-1').textContent = `Sello 1: ${s.hints[0]}`;
        document.getElementById('hint-2').textContent = `Sello 2: ${s.hints[1]}`;

        // Update Progress
        const percent = ((this.currentStation) / stations.length) * 100;
        document.getElementById('progress-bar').style.width = `${percent}%`;
    },

    checkAnswer: function() {
        const normalize = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const userInput = normalize(document.getElementById('user-answer').value.trim());
        const correctAnswer = normalize(stations[this.currentStation].answer);
        const feedback = document.getElementById('feedback');

        if (userInput === correctAnswer) {
            this.showSuccess();
        } else {
            this.applyPenalty();
            feedback.textContent = "❌ El Inquisidor rechaza tu ofrenda. (-5 min)";
            feedback.className = "error";
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
        this.playAchievementSound();
        document.getElementById('success-msg').textContent = stations[this.currentStation].successMsg;
        this.showScreen('screen-success');
        
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
        this.playAchievementSound(true);
        const timeTaken = this.formatTimeElapsed();
        
        const finalMsg = `
            <p><strong>¡EL PORTAL HA SIDO SELLADO DEFINITIVAMENTE!</strong></p>
            <p style="color: var(--primary); font-weight: bold; font-size: 1.1rem; border: 1px solid var(--gold); padding: 10px; border-radius: 8px; text-align: center; margin: 15px 0;">
                Tiempo de purificación: ${timeTaken}
            </p>
            <p>La sombra del Inquisidor Ciego se desvanece entre las piedras del Arco de Cuchilleros, lanzando un último lamento que solo vosotros podéis oír. Madrid se libera de una maldición que ha dormido durante siglos bajo los adoquines de los Austrias.</p>
            <p>Habéis descifrado crímenes olvidados y rituales oscuros, demostrando que la luz del ingenio siempre vence a las sombras del fanatismo. Ya no sois simples caminantes; sois los <strong>Custodios de la Villa</strong>.</p>
            <p style="color: var(--primary); font-weight: bold; letter-spacing: 2px;">CIUDAD PURIFICADA. MISIÓN CUMPLIDA.</p>
            <p><strong>Vuestra recompensa:</strong> El Santo Oficio ha sido desterrado. Disfrutad de la libertad ganada. Bajad las escaleras hacia las tabernas centenarias; hoy brindáis con los fantasmas del pasado.</p>
            <p style="text-align: center; font-family: var(--font-heading); font-size: 1.2rem; margin-top: 20px;">El Sello está cerrado. Que la historia os juzgue como héroes.</p>
        `;
        document.getElementById('final-text-container').innerHTML = finalMsg;
        this.showScreen('screen-final');
    },

    playAchievementSound: function(isFinal = false) {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const ctx = new AudioContext();
            const playNote = (freq, start, duration) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, start);
                gain.gain.setValueAtTime(0.1, start);
                gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(start);
                osc.stop(start + duration);
            };
            const now = ctx.currentTime;
            if (isFinal) {
                [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50].forEach((f, i) => playNote(f, now + i*0.15, 1.2));
            } else {
                [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => playNote(f, now + i*0.1, 0.5));
            }
        } catch(e) { console.error("Audio error", e); }
    },

    showScreen: function(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
        window.scrollTo(0,0);
    }
};

// Animations
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

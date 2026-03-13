const stations = [
    {
        title: "Estación 1: La Última Salida",
        location: "Renfe Las Retamas (Salida Calle Berna)",
        coords: "40.3498,-3.8441",
        address: "Calle Berna, Alcorcón (Estación Las Retamas)",
        img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop",
        narrative: "Acabáis de bajar del último tren. El conductor ha gritado por megafonía que la línea C-5 está colapsada por 'incidentes biológicos' en Madrid Central. Tenéis que bloquear el acceso a la estación para que la horda no llegue al barrio de Las Retamas.",
        question: "Calculad el código: 'Número de paradas que separan LAS RETAMAS de ATOCHA' multiplicado por el 'Número de paradas que faltan para llegar al final de línea en MÓSTOLES'.",
        answer: "18",
        successMsg: "¡Las puertas de acero se cierran! Habéis contenido el brote en la estación. Ahora, subid hacia la Avenida de las Retamas antes de que los rezagados os rodeen.",
        hints: [
            "Mira el mapa de la línea C-5 que hay en el andén o la salida. Cuenta las paradas que faltan para llegar al final de línea (Móstoles-El Soto).",
            "El código es 9 (paradas a Atocha) x 2 (paradas a Móstoles El Soto)."
        ],
        curiosity: `
            <h3>☣️ Registro de Supervivencia</h3>
            <p><strong>Escenario de Cine:</strong> Esta estación es famosa por sus túneles de hormigón visto, que le dan un aire post-apocalíptico ideal para rodar películas de ciencia ficción.</p>
        `
    },
    {
        title: "Estación 2: El Monumento del Superviviente",
        location: "Av. Las Retamas (Escultura Metálica)",
        coords: "40.3475,-3.8420",
        address: "Av. de las Retamas (Cerca de la farmacia)",
        img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000&auto=format&fit=crop",
        narrative: "El aire está pesado. Necesitáis suministros de la farmacia de guardia, pero la persiana está bloqueada por un sistema de emergencia que requiere una clave geométrica.",
        question: "Contad el número de 'hojas' o 'filamentos' metálicos que apuntan al cielo en la estructura principal. Ese número, seguido de la cifra 0, es la clave.",
        answer: "70", // Asumimos 7 según la guía (7 filamentos + 0)
        successMsg: "Lográis sacar los antibióticos. El camino hacia el centro histórico está despejado, pero escucháis disparos cerca del recinto ferial. ¡Rápido, hacia la Calle Mayor!",
        hints: [
            "Los 'elementos' son los componentes verticales de la escultura metálica que parece una llama o espiga.",
            "Contad solo los pilares metálicos principales de la obra de arte."
        ],
        curiosity: `
            <h3>☣️ Notas de Campo</h3>
            <p><strong>Centro Social:</strong> Las Retamas es el corazón de Alcorcón; lo que antes eran campos de cultivo, hoy es la zona con más ambiente de la ciudad.</p>
        `
    },
    {
        title: "Estación 3: El Muro de la Fe",
        location: "Iglesia de Santa María la Blanca",
        coords: "40.3491,-3.8315",
        address: "Calle de la Iglesia, 2 (Casco Antiguo)",
        img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
        narrative: "Habéis llegado al refugio de la zona vieja. Los muros de piedra son gruesos. Un superviviente dejó un mensaje oculto en la fachada de la iglesia antes de ser evacuado.",
        question: "Tomad las dos últimas cifras del año de la placa de restauración y sumadle el número de ventanas circulares (óculos) que tiene la fachada principal.",
        answer: "85",
        successMsg: "Encontráis una nota tras una piedra suelta: 'El búnker está bajo el poder civil, id al Ayuntamiento'.",
        hints: [
            "El año está en la parte superior de la puerta principal o en un lateral.",
            "Fíjate en las ventanas circulares de la fachada. Réstalo o súmalo según la instrucción."
        ],
        curiosity: `
            <h3>☣️ Refugio Estratégico</h3>
            <p><strong>Punto de Vigilancia:</strong> Esta iglesia es el punto más alto del casco antiguo, usada históricamente para vigilar todo el valle del Guadarrama.</p>
        `
    },
    {
        title: "Estación 4: El Búnker del Concejo",
        location: "Plaza de España (Ayuntamiento)",
        coords: "40.3496,-3.8290",
        address: "Plaza de España, 1 (Ayuntamiento de Alcorcón)",
        img: "https://images.unsplash.com/photo-1505672678657-cc7037095e60?q=80&w=1000&auto=format&fit=crop",
        narrative: "La Calle Mayor es un caos. Solo los muros del Ayuntamiento pueden resistir el empuje de la horda. El código de acceso final está oculto a plena vista en el símbolo de la ciudad.",
        question: "Multiplicad el número de cerros del escudo por el número de castillos que hay sobre ellos para obtener la secuencia.",
        answer: "9",
        successMsg: "¡La pesada puerta de bronce se abre! Estáis a salvo. El ejército ha llegado por la A-5 y está limpiando la zona. ¡Sobrevivisteis al Protocolo Alcorcón!",
        hints: [
            "El escudo tiene tres símbolos principales. Los 'cerros' o 'montañitas' son la clave.",
            "Cuenta cuántos castillos hay en el escudo de la fachada."
        ],
        curiosity: `
            <h3>☣️ Heráldica Local</h3>
            <p><strong>Tres Cerros:</strong> Representan la orografía de Alcorcón, un terreno elevado que hoy habéis conquistado para sobrevivir.</p>
        `
    }
];

const Game = {
    currentStation: 0,
    hintCount: 0,
    timerInterval: null,
    secondsRemaining: 90 * 60,

    start: function() {
        this.showScreen('screen-game');
        this.loadStation();
        this.startTimer();
    },

    startTimer: function() {
        const timerDisplay = document.getElementById('countdown-timer');
        this.timerInterval = setInterval(() => {
            this.secondsRemaining--;
            const isNeg = this.secondsRemaining < 0;
            const absSec = Math.abs(this.secondsRemaining);
            const m = Math.floor(absSec / 60);
            const s = absSec % 60;
            timerDisplay.textContent = `${isNeg?'-':''}${m}:${s.toString().padStart(2,'0')}`;
            if (isNeg) timerDisplay.style.color = "#ff4d4d";
        }, 1000);
    },

    applyPenalty: function() {
        this.secondsRemaining -= 300;
        const notice = document.getElementById('penalty-notice');
        notice.style.display = 'block';
        setTimeout(() => notice.style.display = 'none', 1500);
    },

    loadStation: function() {
        const s = stations[this.currentStation];
        document.getElementById('station-title').textContent = s.title;
        document.getElementById('station-location').textContent = s.location;
        document.getElementById('station-map').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.location + " Alcorcon")}`;
        document.getElementById('station-address').textContent = s.address;
        document.getElementById('station-img').src = s.img;
        document.getElementById('station-narrative').innerHTML = s.narrative.replace(/\n\n/g, '<br><br>');
        document.getElementById('station-question').textContent = s.question;
        document.getElementById('user-answer').value = "";
        document.getElementById('feedback').textContent = "";
        document.getElementById('hint-1').style.display = "none";
        document.getElementById('hint-2').style.display = "none";
        document.getElementById('hint-1').textContent = `Filtro 1: ${s.hints[0]}`;
        document.getElementById('hint-2').textContent = `Filtro 2: ${s.hints[1]}`;
        this.hintCount = 0;
        
        const prg = (this.currentStation / stations.length) * 100;
        document.getElementById('progress-bar').style.width = `${prg}%`;
    },

    checkAnswer: function() {
        const normalize = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const val = normalize(document.getElementById('user-answer').value.trim());
        const correct = normalize(stations[this.currentStation].answer);
        const f = document.getElementById('feedback');
        
        if (val === correct) {
            this.showSuccess();
        } else {
            this.applyPenalty();
            f.textContent = "❌ Error de bio-frecuencia. (-5 min)";
            f.className = "error";
            document.querySelector('#screen-game .card').classList.add('shake');
            setTimeout(() => document.querySelector('#screen-game .card').classList.remove('shake'), 500);
        }
    },

    showHint: function() {
        if (this.hintCount >= 2) return;
        this.applyPenalty();
        this.hintCount++;
        document.getElementById(`hint-${this.hintCount}`).style.display = "block";
    },

    showCuriosity: function() {
        const s = stations[this.currentStation];
        document.getElementById('curiosity-content').innerHTML = s.curiosity;
        document.getElementById('curiosity-modal').style.display = 'flex';
    },

    closeCuriosity: function() {
        document.getElementById('curiosity-modal').style.display = 'none';
    },

    showSuccess: function() {
        this.playAchievementSound();
        document.getElementById('success-msg').textContent = stations[this.currentStation].successMsg;
        this.showScreen('screen-success');
        const prg = ((this.currentStation + 1) / stations.length) * 100;
        document.getElementById('progress-bar').style.width = `${prg}%`;
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
        const total = (90 * 60) - this.secondsRemaining;
        const m = Math.floor(total / 60);
        const s = total % 60;
        
        const finalMsg = `
            <p><strong>¡PROTOCOLO DE EXTRACCIÓN COMPLETADO!</strong></p>
            <p style="color: #ffff00; font-weight: bold; font-size: 1.1rem; border: 1px solid #ffff00; padding: 10px; border-radius: 8px; text-align: center; margin: 15px 0;">
                Tiempo de supervivencia: ${m}m ${s}s
            </p>
            <p>Habéis cruzado el desierto de Las Retamas y las sombras del casco antiguo esquivando la extinción. El código final ha sellado el búnker del Ayuntamiento, protegiendo las últimas semillas de la civilización en este sector.</p>
            <p>Mientras las bengalas de evacuación iluminan el cielo de Alcorcón, sabéis que vuestro nombre quedará grabado en los registros como los supervivientes que no se rindieron.</p>
            <p style="color: #00ff00; font-weight: 900; letter-spacing: 2px; margin: 20px 0;"> ZONA ASEGURADA. PROTOCOLO CERRADO. </p>
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
                osc.type = 'sawtooth'; // Rougher sound for zombie theme
                osc.frequency.setValueAtTime(freq, start);
                gain.gain.setValueAtTime(0.05, start);
                gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(start);
                osc.stop(start + duration);
            };
            const now = ctx.currentTime;
            if (isFinal) {
                [110, 164.81, 220, 329.63, 440, 659.25, 880].forEach((f, i) => playNote(f, now + i*0.15, 1.5));
            } else {
                [220, 277.18, 329.63, 440].forEach((f, i) => playNote(f, now + i*0.1, 0.6));
            }
        } catch(e) { console.error("Audio error", e); }
    },

    showScreen: function(id) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        window.scrollTo(0,0);
    }
};

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

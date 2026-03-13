const stations = [
    {
        title: "Estación 1: La Sombra del Cadalso",
        location: "Plaza de la Provincia (Cárcel de Corte)",
        coords: "40.4144,-3.7052",
        address: "Plaza de la Provincia, 1 (Palacio de Santa Cruz)",
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio_de_Santa_Cruz_(Madrid)_01.jpg",
        narrative: "Bienvenidos, investigadores. Este edificio no siempre fue un palacio de diplomacia; fue la temida Cárcel de Corte. Aquí, los reos esperaban su ejecución mientras el verdugo afilaba su hacha. Se dice que uno de ellos dejó un mensaje cifrado antes de subir al patíbulo.",
        question: "¿En qué siglo se terminó de construir este lugar? (Escribe el número)",
        answer: "17",
        successMsg: "Habéis escapado de los calabozos. El rastro de sangre lleva hacia la antigua muralla.",
        hints: [
            "Mirad el edificio principal, antiguo Ministerio de Asuntos Exteriores.",
            "Buscad la placa que menciona la construcción. El número está en el siglo (XVII)."
        ],
        curiosity: `
            <h3>📜 Salseo Criminal</h3>
            <p><strong>Dormir en la trena:</strong> Las condiciones aquí eran brutales. Los presos dormían en celdas húmedas mientras el verdugo vivía en la calle contigua para no llegar tarde.</p>
        `
    },
    {
        title: "Estación 2: El Mural de las Llamas",
        location: "Plaza de Puerta Cerrada",
        coords: "40.4132,-3.7093",
        address: "Plaza de Puerta Cerrada (Frente al mural)",
        img: "https://images.squarespace-cdn.com/content/v1/5bf1e2c19d5abbac28975277/1551706319128-6EWNIDHGKBJMJUNODYFN/cruz_humilladero_puerta_cerrada_madrid.jpg",
        narrative: "Esta plaza debe su nombre a una de las puertas de la muralla que siempre estaba cerrada por la inseguridad. En sus muros hay un mensaje sobre el origen de Madrid.",
        question: "Completa la frase: 'Fui sobre agua edificada, mis muros de _________ son'.",
        answer: "fuego",
        successMsg: "¡Correcto! El fuego purifica, pero también oculta.",
        hints: [
            "Observad los murales artísticos en las fachadas altas.",
            "Es lo que usa el verdugo para quemar las pruebas."
        ],
        curiosity: `
            <h3>📜 Murallas de Sílex</h3>
            <p>Madrid se fundó sobre agua, y sus murallas de sílex echaban chispas al ser golpeadas por flechas, pareciendo que estaban hechas de fuego.</p>
        `
    },
    {
        title: "Estación 3: El Crimen del Criado",
        location: "Calle de la Cabeza",
        coords: "40.4116,-3.7032",
        address: "Calle de la Cabeza, 13 (Portal del Busto)",
        img: "https://edificiosmadridblog.wordpress.com/wp-content/uploads/2020/02/fachada.png",
        narrative: "Un criado asesinó a su amo y huyó. Al regresar años después con la cabeza oculta, un milagro reveló su crimen ante la guardia.",
        question: "¿En qué número de portal se encuentra el busto que recuerda al decapitado?",
        answer: "13",
        successMsg: "La justicia es ciega pero implacable. Deja atrás la cabeza.",
        hints: [
            "Buscad el relieve de una cabeza humana en la fachada.",
            "Es el número del portal donde ocurrió la tragedia."
        ],
        curiosity: `
            <h3>📜 La Cabeza del Cordero</h3>
            <p>La leyenda dice que la cabeza humana se convirtió en una de cordero para pasar el control de la guardia, y luego volvió a ser la del amo asesinado.</p>
        `
    },
    {
        title: "Estación 4: El Reposo del Ingenio",
        location: "Convento de las Trinitarias (Barrio de las Letras)",
        coords: "40.4137,-3.6974",
        address: "Calle de Lope de Vega, 18 (Convento de las Trinitarias)",
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Convento_de_las_Trinitarias_Descalzas_(Madrid)_01.jpg",
        narrative: "En este convento descansan los restos de un hombre que sobrevivió a mil batallas, pero no a la envidia. Su pluma fue su mejor defensa.",
        question: "Buscad el nombre del hidalgo que aquí yace. ¿Cuál es su apellido?",
        answer: "cervantes",
        successMsg: "El autor ha firmado vuestro pasaporte a la etapa final.",
        hints: [
            "Leed las placas en los muros exteriores del convento.",
            "Es el autor del Quijote."
        ],
        curiosity: `
            <h3>📜 El Misterio de los Restos</h3>
            <p>Los huesos de Cervantes estuvieron perdidos durante siglos hasta que un equipo de científicos los identificó en la cripta en 2015.</p>
        `
    },
    {
        title: "Estación 5: El Escenario del Juicio Final",
        location: "Plaza de Santa Ana (Final)",
        coords: "40.4147,-3.7008",
        address: "Plaza de Santa Ana (Estatua de Calderón)",
        img: "../El-Ultimo-Verso/estatua_calderon_madrid_1773342386443.png",
        narrative: "Habéis llegado al corazón del teatro. Frente a vosotros, el gran dramaturgo observa el horizonte. El juicio final está cerca.",
        question: "¿Cuál es el sentimiento que guía al protagonista según la placa de bronce inferior? (Empieza por D)",
        answer: "determinación",
        successMsg: "¡MISTERIO RESUELTO! Habéis encontrado el manuscrito perdido.",
        hints: [
            "Acercaos a la base de la estatua de Calderón.",
            "Buscad la placa de bronce bajo el relieve del honor."
        ],
        curiosity: `
            <h3>📜 Plaza de Pepe Botella</h3>
            <p>Esta plaza existe porque José Bonaparte mandó derribar un convento para crear un espacio abierto, ganándose el odio de los madrileños.</p>
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
        const timerDisplay = document.getElementById('timer');
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

    penalty: function() {
        this.secondsRemaining -= 300;
        const msg = document.getElementById('penalty-msg');
        msg.style.display = 'block';
        setTimeout(() => msg.style.display = 'none', 1500);
    },

    loadStation: function() {
        const s = stations[this.currentStation];
        document.getElementById('st-title').textContent = s.title;
        document.getElementById('st-location').textContent = s.location;
        document.getElementById('st-img').src = s.img;
        document.getElementById('st-narrative').textContent = s.narrative;
        document.getElementById('st-question').textContent = s.question;
        document.getElementById('st-map').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.location + " Madrid")}`;
        document.getElementById('st-address').textContent = s.address;
        document.getElementById('ans-input').value = "";
        document.getElementById('feedback').textContent = "";
        document.getElementById('hint-1').style.display = "none";
        document.getElementById('hint-2').style.display = "none";
        this.hintCount = 0;
        
        const prg = (this.currentStation / stations.length) * 100;
        document.getElementById('bar').style.width = `${prg}%`;
    },

    check: function() {
        const normalize = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const val = normalize(document.getElementById('ans-input').value.trim());
        const correct = normalize(stations[this.currentStation].answer);
        const f = document.getElementById('feedback');
        
        if (val === correct) {
            this.showSuccess();
        } else {
            this.penalty();
            f.textContent = "❌ Incorrecto. El hacha se afila... (-5 min)";
            f.className = "error";
        }
    },

    showHint: function() {
        if (this.hintCount >= 2) return;
        this.penalty();
        this.hintCount++;
        document.getElementById(`hint-${this.hintCount}`).textContent = stations[this.currentStation].hints[this.hintCount-1];
        document.getElementById(`hint-${this.hintCount}`).style.display = "block";
    },

    showCuriosity: function() {
        const modal = document.getElementById('modal');
        document.getElementById('modal-content').innerHTML = stations[this.currentStation].curiosity;
        modal.style.display = 'flex';
    },

    closeModal: function() {
        document.getElementById('modal').style.display = 'none';
    },

    showSuccess: function() {
        this.playAchievementSound();
        document.getElementById('succ-msg').textContent = stations[this.currentStation].successMsg;
        this.showScreen('screen-success');
        const prg = ((this.currentStation + 1) / stations.length) * 100;
        document.getElementById('bar').style.width = `${prg}%`;
    },

    next: function() {
        this.currentStation++;
        if (this.currentStation < stations.length) {
            this.showScreen('screen-game');
            this.loadStation();
        } else {
            this.finish();
        }
    },

    finish: function() {
        clearInterval(this.timerInterval);
        this.playAchievementSound(true);
        const total = (90 * 60) - this.secondsRemaining;
        const m = Math.floor(total / 60);
        const s = total % 60;
        
        const epicFinal = `
            <p style="font-size: 1.2rem; line-height: 1.8;"><strong>¡EL JUICIO HA CONCLUIDO!</strong></p>
            <p>Habeis caminado por la fina línea que separa la justicia de la venganza. Las sombras de la Cárcel de Corte y los ecos de la Calle de la Cabeza han sido vuestros testigos. Con la <strong>${stations[4].answer.toUpperCase()}</strong> grabada en vuestra alma, habéis recuperado el Manuscrito del Verdugo antes de que el hacha cayera sobre la verdad.</p>
            <p>Madrid respira tranquila, sus secretos más oscuros vuelven a dormir bajo los adoquines del Barrio de las Letras gracias a vuestro ingenio implacable.</p>
            <p style="color: var(--primary); font-weight: 900; letter-spacing: 2px; margin: 20px 0;"> HONOR RESTAURADO. CASO CERRADO. </p>
        `;
        
        const textContainer = document.querySelector('#screen-final .parchment p');
        if (textContainer) textContainer.parentElement.innerHTML = epicFinal + `<p style="font-size: 1.5rem; text-align: center; margin: 20px 0; color: var(--primary);">TIEMPO: <span id="final-time">${m}m ${s}s</span></p>`;
        
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
                // Epic final flourish
                [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50].forEach((f, i) => playNote(f, now + i*0.15, 1.2));
            } else {
                // Achievement chime
                [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => playNote(f, now + i*0.1, 0.5));
            }
        } catch(e) { console.error("Audio error", e); }
    },

    showScreen: function(id) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        window.scrollTo(0,0);
    }
};

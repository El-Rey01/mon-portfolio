
//Code pour rester dans le mode choisi sur toutes les pages
const btnDarkMode = document.getElementById('dark-mode');
    const body = document.body;

    // 1. Vérifier si le mode nuit était déjà activé auparavant
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mood');
        if (btnDarkMode) btnDarkMode.textContent = "Mode Jour";
    }

    // 2. Écouteur de clic
    if (btnDarkMode) {
        btnDarkMode.addEventListener('click', () => {
            body.classList.toggle('dark-mood');

            if (body.classList.contains('dark-mood')) {
                btnDarkMode.textContent = "Mode Jour";
                localStorage.setItem('theme', 'dark'); // On enregistre "dark"
            } else {
                btnDarkMode.textContent = "Mode Nuit";
                localStorage.setItem('theme', 'light'); // On enregistre "light"
            }
        });
    }

    /*Code classique pour juste assurer les changements de mode par le bouton
        const btnDarkMode = document.getElementById('dark-mode');
    const body = document.body;

    // 1. Vérifier si le mode nuit était déjà activé auparavant
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mood');
        if (btnDarkMode) btnDarkMode.textContent = "Mode Jour";
    }

    // 2. Écouteur de clic
    if (btnDarkMode) {
        btnDarkMode.addEventListener('click', () => {
            body.classList.toggle('dark-mood');

            if (body.classList.contains('dark-mood')) {
                btnDarkMode.textContent = "Mode Jour";
                localStorage.setItem('theme', 'dark'); // On enregistre "dark"
            } else {
                btnDarkMode.textContent = "Mode Nuit";
                localStorage.setItem('theme', 'light'); // On enregistre "light"
            }
        });
    }
});*/
// Activer le thème sombre au chargement si besoin
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}

// Fonction appelée après le chargement du header
function initThemeToggle() {
  const toggle = document.getElementById('dark-mode-toggle');
  if (!toggle) return;

  // Cocher la case si le thème est sombre
  toggle.checked = document.documentElement.classList.contains('dark');

  // Basculer le thème au clic
  toggle.addEventListener('change', function () {
    const isDark = toggle.checked;
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Rendre accessible depuis header.js
window.initThemeToggle = initThemeToggle;

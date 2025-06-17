// Initialisation du thème sombre
function initThemeToggle() {
  const btn = document.getElementById('toggle-theme');
  if (!btn) return;

  // Appliquer la préférence au chargement
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }

  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}

window.initThemeToggle = initThemeToggle;

function initThemeToggle() {
  const btn = document.getElementById('toggle-theme');
  if (!btn) return;

  // Appliquer le thème enregistré
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }

  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
  });
}
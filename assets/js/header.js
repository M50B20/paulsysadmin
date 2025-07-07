fetch('../../../src/components/Header.astro')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header').innerHTML = html;
    initThemeToggle();
  });
fetch('../components/footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header-container').innerHTML = html;
    initThemeToggle();
  });
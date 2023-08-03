function setTheme(theme) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  
    localStorage.setItem('theme', theme);
  }
  
  function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
    setTheme(newTheme);
  }
  
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    setTheme(storedTheme);
  } else {
    setTheme('light');
  }
  
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIcon = document.querySelector('.theme-toggle-btn-icon');
themeToggleBtn.addEventListener('click', () => {
  toggleTheme()
  themeIcon.classList.toggle('fa-sun')
  themeIcon.classList.toggle('fa-moon')
});
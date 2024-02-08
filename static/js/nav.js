const navToggleButton = document.getElementById('nav-toggle')
const navbarContainer = document.querySelector('nav')
const toggleIcon = document.getElementById('nav-toggle-icon')

navToggleButton.addEventListener('click', () => {
    navbarContainer.classList.toggle('toggled');
    toggleIcon.classList.toggle('fa-bars');
    toggleIcon.classList.toggle('fa-xmark');
})
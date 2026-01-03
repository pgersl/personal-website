const select = document.querySelector('#contacts');
const contactOptions = document.querySelectorAll('.contact-option');

select.addEventListener('change', () => {
    contactOptions.forEach(option => {
        if (option.id === select.value) {
            option.style.display = 'flex';
        } else {
            option.style.display = 'none';
        }
    });
});
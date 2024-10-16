const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const nav = document.querySelector('nav');
const darkModeIcon = document.getElementById('darkModeIcon');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark'); 
    const isDarkMode = body.classList.contains('dark');
    nav.classList.toggle('navbar-dark');
    if (isDarkMode) {
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    } else {
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
    }
    localStorage.setItem('darkMode', isDarkMode);
});

document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark');
        nav.classList.add('navbar-dark');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    }
});

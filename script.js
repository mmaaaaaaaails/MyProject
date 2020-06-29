const HAMBURGER_MENU = document.querySelector('.hamburger');
const HAMBURGER_NAV = document.querySelector('.menu');

HAMBURGER_MENU.addEventListener('click', () => {
        HAMBURGER_MENU.classList.toggle('hamburger__rotate--active');
        HAMBURGER_NAV.classList.toggle('hamburger--active');
});

document.addEventListener('click', (event) => {
    if (event.target.closest('.menu')) {
        HAMBURGER_MENU.classList.remove('hamburger__rotate--active');
        HAMBURGER_NAV.classList.remove('hamburger--active');
    }
});

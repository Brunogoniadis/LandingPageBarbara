
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

menu.addEventListener('click', ()=> {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})
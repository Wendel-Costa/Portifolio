const buttonMenu = document.querySelector('.button__menu');
const menuMobile = document.querySelector('.cabecalho__links--mobile');
let isMenuOpen = false;


buttonMenu.addEventListener('click', function () {
    isMenuOpen ? menuMobile.classList.add('invisible') : menuMobile.classList.remove('invisible')

    isMenuOpen ? buttonMenu.children[0].setAttribute('src', '../Icones/Menu.svg') : buttonMenu.children[0].setAttribute('src', '../Icones/Close.svg')

    isMenuOpen = !isMenuOpen
    console.log(isMenuOpen)
})

document.querySelector('.button__menu').addEventListener('click', () => {
    document.querySelector('.cabecalho__links--mobile').classList.toggle('invisible');
});

// Adiciona rolagem suave para as âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.cabecalho__links__link');

    function changeLinkState() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('cabecalho__links__link__atual'));
        navLinks[index].classList.add('cabecalho__links__link__atual');
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
});
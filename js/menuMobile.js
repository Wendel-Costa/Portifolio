const buttonMenu = document.querySelector('.button__menu');
const menuMobile = document.querySelector('.cabecalho__links--mobile');
let isMenuOpen = false;


buttonMenu.addEventListener('click', function(){
    isMenuOpen ? menuMobile.classList.add('invisible') : menuMobile.classList.remove('invisible')

    isMenuOpen ?     buttonMenu.children[0].setAttribute('src','../Icones/Menu.svg') :     buttonMenu.children[0].setAttribute('src','../Icones/Close.svg')

    isMenuOpen = !isMenuOpen
    console.log(isMenuOpen)
})
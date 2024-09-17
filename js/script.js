const buttonMenu = document.querySelector('.button__menu');
const menuMobile = document.querySelector('.cabecalho__links--mobile');
let isMenuOpen = false;

buttonMenu.addEventListener('click', function () {
    // Alternar a visibilidade do menu mobile
    menuMobile.classList.toggle('visible');
    
    // Mudar ícone do botão de menu
    if (isMenuOpen) {
        buttonMenu.children[0].setAttribute('src', 'Icones/Menu.svg');
    } else {
        buttonMenu.children[0].setAttribute('src', 'Icones/Close.svg');
    }

    isMenuOpen = !isMenuOpen; // Alternar estado do menu
});

// Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.cabecalho__links__link');
  
    // Função para remover a classe de link atual
    function removeActiveClasses() {
      navLinks.forEach(link => link.classList.remove('cabecalho__links__link__atual'));
    }
  
    // Função para adicionar a classe de link atual com base na seção visível
    function setActiveLink() {
      let index = sections.length;
  
      // Loop para encontrar a seção atual
      while (--index && window.scrollY + window.innerHeight / 2 < sections[index].offsetTop) {}
  
      // Atualizar a navegação
      removeActiveClasses();
      navLinks[index].classList.add('cabecalho__links__link__atual');
    }
  
    setActiveLink(); // Definir o link correto ao carregar a página
    window.addEventListener('scroll', setActiveLink); // Atualizar na rolagem
  });
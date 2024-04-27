const btnMenuMobile = document.getElementById('btn-menu-mobile');
const menuMobile = document.getElementById('menu-mobile');

menuMobile.addEventListener('click', animarMenuMobile);

function animarMenuMobile() {
    menuMobile.classList.toggle('abrir')
    btnMenuMobile.classList.toggle('ativar')    
}






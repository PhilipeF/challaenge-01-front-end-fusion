const btnMenuMobile = document.getElementById('btn-menu-mobile');
const menuMobile = document.getElementById('menu-mobile');
menuMobile.addEventListener('click', animar);

function animar() {
    menuMobile.classList.toggle('abrir')
    btnMenuMobile.classList.toggle('ativar')    
}






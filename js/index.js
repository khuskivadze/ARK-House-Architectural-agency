const opmenMenuBtn = document.querySelector('.burger');
const closeMenuBtn =  document.querySelector('.close')
const menu = document.querySelector('.header_menu');

function openMenu () {
   console.log(menu);
   menu.classList.add('active')
    
}
opmenMenuBtn.addEventListener('click', openMenu);

function closeMenu () {
    console.log(menu);
    menu.classList.remove('active')
     
}
closeMenuBtn.addEventListener('click', closeMenu)
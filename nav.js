
//nav-bar
const menu=document.querySelector('#menu-bar');
const menulist=document.querySelector('.navlinks');
menu.addEventListener('click',()=>{
    menulist.classList.toggle('show-menu')
})

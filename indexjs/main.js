const menu = document.querySelector('.menu');
const modalMenu = document.querySelector('.menu-modal');
const close = document.querySelector('.close');
const nostrosMenu = document.querySelector('#nosotros-menu');
const ProductoMenu = document.querySelector('#productos-menu');
const contactoMenu = document.querySelector('#contacto-menu');

function hiddenMenu() {
  modalMenu.classList.add('active');
  document.body.classList.remove('opacity');
}

function toggleMenu() {
  // Change the styles for the menu and the body
  modalMenu.classList.toggle('active');
  document.body.classList.toggle('opacity');
}

menu.addEventListener('click', toggleMenu);
close.addEventListener('click', hiddenMenu);
nostrosMenu.addEventListener('click', hiddenMenu);
ProductoMenu.addEventListener('click', hiddenMenu);
contactoMenu.addEventListener('click', hiddenMenu);


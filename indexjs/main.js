const menu = document.querySelector('.menu');
const modalMenu = document.querySelector('.menu-modal');
const close = document.querySelector('.close');

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
close.addEventListener('click', hiddenMenu)

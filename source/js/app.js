const menuButton = document.querySelector('.main-nav__toggle');
const menuList = document.querySelector('.main-nav__lists');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('main-nav__toggle--open');
  menuList.classList.toggle('main-nav__lists--open');
});


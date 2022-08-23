const menuButton = document.querySelector('.main-nav__toggle');
const menuList = document.querySelector('.main-nav__lists');
const pageBodyClass = document.querySelector('.page-body');

const submitFormButton= document.querySelector('.form__button');

const popupButtonError = document.querySelector('#popupButtonError');
const popupWindowError = document.querySelector('#popupWindowError');
const overlayError = document.querySelector('#overlayError');

const popupButtonSuccess = document.querySelector('#popupButtonSuccess');
const popupWindowSuccess = document.querySelector('#popupWindowSuccess');
const overlaySuccess = document.querySelector('#overlaySuccess');

// открытие меню
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('main-nav__toggle--open');
  menuList.classList.toggle('main-nav__lists--open');
});

// открытие модальных окон
submitFormButton.addEventListener('click', () => {
  const inputs = document.querySelectorAll('.form__input-field-required');
  inputs.forEach(el => {
    if (el.value  === '') {
      popupWindowError.classList.add('popup--open');
      overlayError.classList.add('overlay--open');
      pageBodyClass.style.overflow = 'hidden';
    }
    else {
      popupWindowSuccess.classList.add('popup--open');
      overlaySuccess.classList.add('overlay--open');
      pageBodyClass.style.overflow = 'hidden';
    }
  });
});

// закрытие модальных окон
popupButtonError.addEventListener('click', () => {
  popupWindowError.classList.remove('popup--open');
  overlayError.classList.remove('overlay--open');
  pageBodyClass.style.overflow = 'visible';
});

popupButtonSuccess.addEventListener('click', () => {
  popupWindowSuccess.classList.remove('popup--open');
  overlaySuccess.classList.remove('overlay--open');
  pageBodyClass.style.overflow = 'visible';
});

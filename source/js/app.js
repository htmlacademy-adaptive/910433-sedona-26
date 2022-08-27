const pageBodyClass = document.querySelector('.page-body');

//элементы меню
const menuButton = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.main-nav');
const menuList = document.querySelector('.main-nav__lists');

//элементы формы
const form = document.querySelector('.form');
const submitFormButton= document.querySelector('.form__button');
const firstNameField = document.querySelector('#firstName');
const secondNameField = document.querySelector('#secondName');
const thirdNameField = document.querySelector('#thirdName');
const phoneField = document.querySelector('#phone');
const emailField = document.querySelector('#email');
const textareaField = document.querySelector('#textarea');

//элементы модального окна ОШИБКА
const popupButtonError = document.querySelector('#popupButtonError');
const popupWindowError = document.querySelector('#popupWindowError');
const overlayError = document.querySelector('#overlayError');

//элементы модального окна УСПЕХ
const popupButtonSuccess = document.querySelector('#popupButtonSuccess');
const popupWindowSuccess = document.querySelector('#popupWindowSuccess');
const overlaySuccess = document.querySelector('#overlaySuccess');

//функция очистки полей формы
const clearFields = () => {
  firstNameField.value = '';
  secondNameField.value = '';
  thirdNameField.value = '';
  phoneField.value = '';
  emailField.value = '';
  textareaField.value = '';
}

//отображение меню, если не подгрузился JS
menu.classList.remove('main-nav--no-js');

// открытие меню
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('main-nav__toggle--open');
  menuList.classList.toggle('main-nav__lists--open');
});

// открытие модальных окон
// submitFormButton.addEventListener('click', () => {
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!firstNameField.value || !secondNameField.value || !phoneField.value || !emailField.value) {
      popupWindowError.classList.add('popup--open');
      overlayError.classList.add('overlay--open');
      pageBodyClass.classList.add('page-body--no-scroll');
      popupButtonError.focus();
    } else {
      popupWindowSuccess.classList.add('popup--open');
      overlaySuccess.classList.add('overlay--open');
      pageBodyClass.classList.add('page-body--no-scroll');
      popupButtonSuccess.focus();
    }
  });

  // закрытие модальных окон
  // закрытие модального окна ОШИБКА
  popupButtonError.addEventListener('click', () => {
    popupWindowError.classList.remove('popup--open');
    overlayError.classList.remove('overlay--open');
    pageBodyClass.classList.remove('page-body--no-scroll');
  });

  // закрытие модального окна УСПЕХ
  popupButtonSuccess.addEventListener('click', () => {
    popupWindowSuccess.classList.remove('popup--open');
    overlaySuccess.classList.remove('overlay--open');
    pageBodyClass.classList.remove('page-body--no-scroll');
    clearFields();
  });
}


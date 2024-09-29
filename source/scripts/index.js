/* в этот файл добавляет скрипты*/
const mainNavigationButton = document.querySelector('.main-navigation__button');
const mainNavigationList = document.querySelector('.main-navigation__list');

mainNavigationButton.onclick = function() {
  mainNavigationButton.classList.toggle('main-navigation__button--close');
  mainNavigationList.classList.toggle('main-navigation__list--hidden');
};


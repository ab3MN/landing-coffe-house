import { allowScroll, blockScroll } from '../helpers/scroll';

const BURGER = document.querySelector('#burger');
const NAV = document.querySelector('.nav');
const HEADER__BUTTON = document.querySelector('.header__button');
const NAV__ITEM = document.querySelectorAll('.nav__item');

BURGER.onclick = () => {
  NAV.classList.contains('active') ? inActiveteMenu() : activeteMenu();
};
NAV__ITEM.forEach((el) => {
  hideNav(el);
});
hideNav(HEADER__BUTTON);

function hideNav(el) {
  el.onclick = () => inActiveteMenu();
}

function activeteMenu() {
  NAV.classList.add('active');
  BURGER.classList.add('active');
  blockScroll();
}

function inActiveteMenu() {
  NAV.classList.remove('active');
  BURGER.classList.remove('active');
  allowScroll();
}

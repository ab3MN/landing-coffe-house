import MenuItem from './MenuItem';
export default class Menu {
  constructor(menu) {
    Object.assign(this, { menu });
  }

  generateMenu(type) {
    const menuList = document.querySelector('#menu__list');
    const menuWrapper = document.querySelector('.menu__wrapper');
    const REFRESH__BUTTON = document.querySelector('.refresh__button');
    if (REFRESH__BUTTON) {
      REFRESH__BUTTON.remove();
    }

    menuList.innerHTML = '';
    const filtredMenu = this.menu.filter((el) => el.category === type);

    filtredMenu.forEach((item) => {
      const menuItem = this.generateMenuItem(item);
      menuList.append(menuItem);
    });
    if (filtredMenu.length > 4) {
      const refreshButton = this.createButton();
      const refreshItem = this.refreshItem.bind(this);
      refreshButton.addEventListener('click', refreshItem);

      menuWrapper.append(refreshButton);
    }
  }

  createDomNode(el = 'div', ...classes) {
    const domElement = document.createElement(el);
    domElement.classList.add(...classes);
    return domElement;
  }

  createButton() {
    const refreshButton = this.createDomNode(
      'button',
      'icon__button',
      'refresh',
      'refresh__button'
    );

    refreshButton.innerHTML = `<object data="./img/general/icons/refresh.svg"></object>`;
    return refreshButton;
  }

  refreshItem(e) {
    const menuItems = document.querySelectorAll('.menu__item');
    menuItems.forEach((el) => (el.style.display = 'block'));
    console.log(e.target);
    e.target.remove();
  }

  generateMenuItem({ id, img, name, description, price }) {
    const menuItem = this.createDomNode('article', 'menu__item');
    menuItem.setAttribute('id', id);
    menuItem.onclick = () => this.openMenuItem.call(this, id);
    const template = `
        <div class="menu__img--box" > 
            <img src=${img} alt=${name} class="menu__img">
        </div>
        <div class="menu__container">
            <div class="menu__content"> 
                <h2 class="article__title">${name}</h2>
                <h4 class="article__description">${description}</h4>
            </div>

            <p class="article__price">$${price}</p>
        </div>
    `;
    menuItem.innerHTML = template;
    return menuItem;
  }

  openMenuItem(id) {
    const item = this.menu.find((el) => el.id === id);
    const menuItem = new MenuItem(item);
    menuItem.generateMenuItem();
  }
}

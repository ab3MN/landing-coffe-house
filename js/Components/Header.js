const generateHeader = (page) => {
  const header = document.querySelector('.header');
  let template = `<h1 class="logo">`;
  const headerLink =
    page === 'home__page'
      ? `<a href="#" onClick="return false;" class="link ${page}">
  <img src="./img/general/logo.png" alt="logo" />
</a>`
      : `<a href="./index.html" class="link">
      <img src="./img/general/logo.png" alt="logo" />
    </a>`;
  template += headerLink;
  template += `</h1>
  <nav class="nav">
  <ul class="nav__list">
    <li class="nav__item">
      <a class="nav__link" href=${
        page === 'home__page' ? '#favorite' : './index.html#favorite'
      }> Favorite coffee </a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href=${
        page === 'home__page' ? '#about' : './index.html#about'
      }> About </a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href=${
        page === 'home__page' ? '#mobile' : './index.html#mobile'
      }> Mobile app</a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href="#contacts">Contact us</a>
    </li>
  </ul>
  </nav>
`;
  const menuLink =
    page === 'home__page'
      ? `<a
  class="header__button ${page}"
  data-menu="header__button"
  href="./menu.html"
  >
  Menu
  <object data="./img/general/icons/coffee-cup.svg"></object>
  </a>`
      : ` <a
  class="header__button ${page}"
  data-menu="header__button"
  href="#" onClick="return false;"
  >
  Menu
  <object data="./img/general/icons/coffee-cup.svg"></object>
  </a>`;
  template += menuLink;
  header.innerHTML = template;
};

export default generateHeader;

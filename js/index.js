/* ==================== MENU DATA ==================== */
import products from "../db/products.json";
/* ==================== BURGER==================== */
import "./Components/Burger.js";

/* ==================== GENERATE MENU ==================== */
import Menu from "./Components/Menu.js";

if (location.pathname.split("/").at(-1) === "menu.html") {
  /* ==================== GENERATE MENU ==================== */
  const menu = new Menu(products);
  menu.generateMenu("coffee");

  const MENU__CONTROLLERS = document.querySelectorAll(".menu__controller");

  MENU__CONTROLLERS.forEach((el) => {
    el.onclick = (e) => {
      MENU__CONTROLLERS.forEach((el) => (el.disabled = false));

      const menuItem = e.currentTarget;
      const menuType = menuItem.getAttribute("data-menu");

      menuItem.disabled = true;
      menu.generateMenu(menuType);
    };
  });
}

/* ==================== GENERATE FOOTER ==================== */
import generateFooter from "./Components/Footer.js";
setTimeout(() => generateFooter());

import Modal from "./Modal";

export default class MenuItem extends Modal {
  constructor(item) {
    super();
    Object.assign(this, {
      item,
      productItem: null,
      totalPrice: item.price * 100,
      sizePrice: 0,
      additivePrice: {},
      price: "",
    });
  }
  generateMenuItem() {
    this.generateProductItem();
    super.genereateModal(this.productItem);
  }

  createDomNode(el = "div", ...classes) {
    const domElement = document.createElement(el);
    domElement.classList.add(...classes);
    return domElement;
  }

  /* ==================== CONTROLLERS ==================== */
  generateProductControllers(type) {
    const controllers = this.createDomNode("div", "menu__controllers");
    if (type === "additives") {
      this.item[type].forEach((el, i) => {
        const productController = this.generateProductControllerByAdditive(
          el,
          i + 1
        );
        controllers.append(productController);
      });
      return controllers;
    }

    Object.entries(this.item[type]).forEach((el) => {
      const productController = this.generateProductControllerBySize(el);

      controllers.append(productController);
    });
    return controllers;
  }
  /* ==================== SIZE CONTROLLER ==================== */
  generateProductControllerBySize(data) {
    const controller = this.createDomNode(
      "button",
      "button__secondary",
      "product__controller",
      "product__size--controller"
    );

    const _size = data[0];
    if (_size === "s") controller.classList.add("active");
    const { size, price } = data[1];
    controller.dataset.price = price;
    controller.innerHTML = `<span>${_size}</span>${size}`;

    controller.onclick = (e) => {
      const PRODUCT__CONTROLLERS = document.querySelectorAll(
        ".product__size--controller"
      );
      PRODUCT__CONTROLLERS.forEach((el) => {
        el.classList.remove("active");
      });
      this.changeSizePrice(price);
      e.currentTarget.classList.add("active");
    };

    return controller;
  }
  changeSizePrice(price) {
    this.totalPrice = this.totalPrice - this.sizePrice;
    this.sizePrice = price * 100;
    this.totalPrice += this.sizePrice;
    this.changeProductPrice();
  }
  /* ==================== ADDITIVE CONTROLLER ==================== */
  generateProductControllerByAdditive(additive, number) {
    const { name, price } = additive;
    const controller = this.createDomNode(
      "button",
      "button__secondary",
      "product__controller"
    );
    controller.dataset.name = name;
    controller.innerHTML = `<span>${number}</span>${name}`;

    controller.onclick = (e) =>
      this.changeAdditivePrice(price, name, e.currentTarget);

    return controller;
  }
  changeAdditivePrice(price, type, target) {
    target.classList.contains("active")
      ? target.classList.remove("active")
      : target.classList.add("active");
    const _price = price * 100;
    if (type in this.additivePrice) {
      delete this.additivePrice[type];
      this.totalPrice -= _price;
      this.changeProductPrice();
      return;
    }
    this.additivePrice[type] = _price;
    this.totalPrice += _price;
    this.changeProductPrice();
  }
  /* ==================== GENERATE PRODUCT PRICE ==================== */
  changeProductPrice() {
    let price = this.totalPrice / 100 + "".replace(",", ".");
    if (price.length < 2) {
      price += ".00";
    } else if (price.length === 3) {
      price += 0;
    }
    this.productPrice.innerHTML = `<span>Total:</span>$${price}`;
  }
  /* ==================== GENERATE PRODUCT ITEM ==================== */
  generateProductItem() {
    const { id, img, description, name, price } = this.item;
    this.productItem = this.createDomNode("article", "product");
    this.productItem.setAttribute("id", id);

    /* ==================== LEFT ==================== */
    const left = `
    <aside class="product__left">
      <div>
        <img src=${img} alt=${name}>
      </div>
    </aside>`;
    this.productItem.innerHTML = left;
    /* ==================== RIGHT ==================== */
    const right = this.createDomNode("div", "product__right");
    right.innerHTML = `
    <h3 class="article__title">${name}</h3>
    <h4 class="article__description">${description}</h4>
    <p class="article__specifications">Size</p>
    `;
    /* ==================== CONTROLLERS ==================== */

    const sizeControllers = this.generateProductControllers("sizes");
    right.append(sizeControllers);
    sizeControllers.insertAdjacentHTML(
      "afterend",
      '<p class="article__specifications">Additives</p>'
    );
    const additiveControllers = this.generateProductControllers("additives");
    right.append(additiveControllers);

    /* ==================== PRICE AND INFO ==================== */
    this.productPrice = this.createDomNode("p", "article__price");
    this.productPrice.innerHTML = `<span>Total:</span>$${price}`;
    right.append(this.productPrice);

    this.productPrice.insertAdjacentHTML(
      "afterend",
      `  
    <div class="article__hr"></div>
    <h6 class="article__attention">
    <object data="./img/general/icons/product/info.svg"></object>
    The cost is not final. Download our mobile app to see the final
    price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
    </h6>
    `
    );
    /* ==================== CLOSE BUTTON ==================== */
    const closeButton = this.createDomNode("button", "product__button");
    closeButton.onclick = () => super.handleClose();
    closeButton.innerText = "Close";
    right.append(closeButton);

    this.productItem.append(right);
  }
}
